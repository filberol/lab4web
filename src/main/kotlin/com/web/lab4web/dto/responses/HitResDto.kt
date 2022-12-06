package com.web.lab4web.dto.responses

data class HitResDto(
    var coords: Array<Float>,
    var time: String,
    var exec: Long,
    var result: String
) {
    override fun equals(other: Any?): Boolean {
        if (this === other) return true
        if (javaClass != other?.javaClass) return false
        other as HitResDto
        if (time != other.time) return false
        return true
    }

    override fun hashCode(): Int {
        return time.hashCode()
    }
}