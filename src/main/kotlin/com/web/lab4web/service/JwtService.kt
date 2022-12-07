package com.web.lab4web.service

import io.jsonwebtoken.ExpiredJwtException
import io.jsonwebtoken.Jwts
import io.jsonwebtoken.security.Keys
import org.springframework.stereotype.Service
import java.io.FileInputStream
import java.util.*


@Service
class JwtService {
    private final val properties = Properties().also {
        it.load(FileInputStream("src/main/resources/jwt.properties"))
    }
    private val secret = properties.getProperty("jwt_secret_key")
    private val expired = properties.getProperty("jwt_token_timeout_hours").toInt()
    private val signKey = Keys.hmacShaKeyFor(secret.toByteArray())

    fun generateForUser(username: String): String {
        return Jwts.builder()
            .setSubject(username)
            .setIssuedAt(Date())
            .setExpiration(addHoursToJavaUtilDate(Date(), expired).also {
                println("Created new token, expiring at $it")
            })
            .signWith(signKey)
            .compact()
    }

    fun validateToken(username: String, token: String): Boolean {
        return try {
            Jwts.parserBuilder()
                .setSigningKey(signKey)
                .build()
                .parseClaimsJws(token)
                .body
                .subject
                .equals(username)
        } catch (e: ExpiredJwtException) {
            false
        }

    }
    companion object DateUtils {
        private fun addHoursToJavaUtilDate(date: Date, hours: Int): Date? {
            val calendar = Calendar.getInstance()
            calendar.time = date
            calendar.add(Calendar.HOUR_OF_DAY, hours)
            return calendar.time
        }
    }
}