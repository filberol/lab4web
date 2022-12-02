package com.web.lab4web.service

import org.springframework.stereotype.Service

@Service
class JwtService {
//    @Value(${jwt.secret_token})
//    private lateinit var jwtSecretKey: String

    fun generateForUser(username: String): String {
        return "placeholder"
    }
}