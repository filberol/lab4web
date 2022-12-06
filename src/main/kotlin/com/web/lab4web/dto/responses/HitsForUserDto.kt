package com.web.lab4web.dto.responses

data class HitsForUserDto (
    var result: String,
    var errorMessage: String? = null,
    var hits: List<HitResDto>?
)