package com.web.lab4web.service

import io.jsonwebtoken.ExpiredJwtException
import io.jsonwebtoken.Jwts
import io.jsonwebtoken.security.Keys
import org.springframework.beans.factory.annotation.Value
import org.springframework.stereotype.Service
import java.util.*


@Service
class JwtService {
    @Value ("\${jwt_secret_key}")
    private lateinit var secret: String
    @Value ("\${jwt_token_timeout_hours}")
    private var expired: Int = 12

    fun generateForUser(username: String): String {
        val signKey = Keys.hmacShaKeyFor(secret.toByteArray())
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
        val signKey = Keys.hmacShaKeyFor(secret.toByteArray())
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