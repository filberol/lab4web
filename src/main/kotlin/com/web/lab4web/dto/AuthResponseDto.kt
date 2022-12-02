package com.web.lab4web.dto

data class AuthResponseDto (
    var result: String,
    var token: String? = null,
    var errorMessage: String? = null
)
