package com.web.lab4web.dto.requests

import org.springframework.lang.Nullable

data class HitDto(
    var username: String,
    var token: String,
    @Nullable
    var cordX: Float?,
    @Nullable
    var cordY: Float?,
    @Nullable
    var cordR: Float?
)
