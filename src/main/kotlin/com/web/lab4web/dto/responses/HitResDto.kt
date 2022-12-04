package com.web.lab4web.dto.responses

import java.time.ZonedDateTime

data class HitResDto (
    var cords: Array<Float>,
    var time: ZonedDateTime,
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