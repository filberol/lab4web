package com.web.lab4web.service

import org.springframework.stereotype.Service
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder

@Service
class HashService {
    val encoder = BCryptPasswordEncoder()
    fun encodePassword(pass: String): String {
        return encoder.encode(pass)
    }

    fun matchPassword(candidate: String, hash: String): Boolean {
        return encoder.matches(candidate, hash)
    }
}