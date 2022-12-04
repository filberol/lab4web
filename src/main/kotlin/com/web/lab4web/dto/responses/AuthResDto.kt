package com.web.lab4web.dto.responses

data class AuthResDto (
    var result: String,
    var token: String? = null,
    var errorMessage: String? = null
)
