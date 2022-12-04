package com.web.lab4web.controllers

import com.web.lab4web.dto.requests.HitDto
import com.web.lab4web.dto.responses.HitResDto
import com.web.lab4web.repos.HitsRepository
import com.web.lab4web.service.JwtService
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.http.ResponseEntity
import org.springframework.validation.annotation.Validated
import org.springframework.web.bind.annotation.*
import java.time.ZonedDateTime

@RestController
@CrossOrigin
@RequestMapping("/hit-api")
class HitsController {

    @Autowired
    private lateinit var hitsRepository: HitsRepository
    @Autowired
    private lateinit var tokenService: JwtService

    @PostMapping
    fun getHitsByUser(@Validated @RequestBody emptyHit: HitDto): ResponseEntity<Any> {
        println("got post")
        println(emptyHit)
        return ResponseEntity.ok().body("")
    }

    @PatchMapping
    fun addValidateHit(@Validated @RequestBody hitRec: HitDto): ResponseEntity<Any> {
        val time = ZonedDateTime.now()
        val start = System.currentTimeMillis()
        val res = "Попадание"
        return ResponseEntity.ok().body(
            HitResDto(arrayOf(2.0f, 1.0f, 0.0f), time, System.currentTimeMillis()-start, res)
        )
    }

    @DeleteMapping
    fun deleteHitsBtUser(@Validated @RequestBody emptyHit: HitDto): ResponseEntity<Any> {
        return ResponseEntity.ok().body("")
    }
}