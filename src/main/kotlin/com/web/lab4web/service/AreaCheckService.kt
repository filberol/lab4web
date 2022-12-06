package com.web.lab4web.service

import com.web.lab4web.dto.requests.HitDto
import org.springframework.stereotype.Service

@Service
class AreaCheckService {

    fun checkHit(hit: HitDto): HitResult {
        val x = hit.cordX!!
        val y = hit.cordY!!
        val r = hit.cordR!!
        return if (x >= 0) {
            if (y <= 0) {
                checkCircle(x, y, r)
            } else {
                checkRectangle(x, r)
            }
        } else {
            if (y <= 0) {
                checkTriangle(x, y, r)
            } else {
                HitResult.FAIL
            }
        }
    }


    companion object Checker {
        fun checkCircle(x: Float, y: Float, r: Float): HitResult {
            return if (x*x + y*y <= r*r) HitResult.SUCCESS else HitResult.FAIL
        }
        fun checkTriangle(x: Float, y: Float, r: Float): HitResult {
            return if (y >= -2*x-r) HitResult.SUCCESS else HitResult.FAIL
        }
        fun checkRectangle(x: Float, r: Float): HitResult {
            return if (x <= r/2) HitResult.SUCCESS else HitResult.FAIL
        }
    }

    enum class HitResult(private val str: String) {
        SUCCESS("Hit"),
        FAIL("Miss");
        override fun toString() = str
    }
}