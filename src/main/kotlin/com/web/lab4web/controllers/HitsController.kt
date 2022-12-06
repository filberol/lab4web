package com.web.lab4web.controllers

import com.web.lab4web.dto.requests.HitDto
import com.web.lab4web.dto.responses.HitResDto
import com.web.lab4web.dto.responses.HitsForUserDto
import com.web.lab4web.entities.HitEntity
import com.web.lab4web.repos.HitsRepository
import com.web.lab4web.service.AreaCheckService
import com.web.lab4web.service.JwtService
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.http.ResponseEntity
import org.springframework.transaction.annotation.Transactional
import org.springframework.validation.annotation.Validated
import org.springframework.web.bind.annotation.*
import java.time.ZonedDateTime
import java.time.format.DateTimeFormatter

@RestController
@CrossOrigin
@RequestMapping("/hit-api")
class HitsController {

    @Autowired
    private lateinit var hitsRepository: HitsRepository
    @Autowired
    private lateinit var tokenService: JwtService
    @Autowired
    private lateinit var areaChecker: AreaCheckService

    @PostMapping
    fun getHitsByUser(@Validated @RequestBody emptyHit: HitDto): ResponseEntity<Any> {
        return if (tokenService.validateToken(emptyHit.username, emptyHit.token)) {
            val hits = hitsRepository.findAllByName(emptyHit.username)
            getOkResponseFromEntityArray(hits)
        } else {
            ResponseEntity.badRequest().body(
                HitsForUserDto("error", "expired token", null)
            )
        }

    }

    @PatchMapping
    fun addValidateHit(@Validated @RequestBody hitRec: HitDto): ResponseEntity<Any> {
        return if (tokenService.validateToken(hitRec.username, hitRec.token)) {
            val start = System.currentTimeMillis()
            val time = ZonedDateTime.now()
            val res = areaChecker.checkHit(hitRec).toString()
            val checkedHitEntity = HitEntity().also {
                it.cordX = hitRec.cordX
                it.cordY = hitRec.cordY
                it.cordR = hitRec.cordR
                it.time = time
                it.name = hitRec.username
                it.result = res
                it.execution = System.currentTimeMillis()-start
            }
            hitsRepository.save(checkedHitEntity)
            val hits = hitsRepository.findAllByName(hitRec.username)
            getOkResponseFromEntityArray(hits)
        } else {
            ResponseEntity.badRequest().body(
                HitsForUserDto("error", "expired token", null)
            )
        }
    }

    @DeleteMapping
    @Transactional
    fun deleteHitsByUser(@Validated @RequestBody emptyHit: HitDto): ResponseEntity<Any> {
        return if (tokenService.validateToken(emptyHit.username, emptyHit.token)) {
            hitsRepository.deleteAllByName(emptyHit.username)
            val hits = hitsRepository.findAllByName(emptyHit.username)
            getOkResponseFromEntityArray(hits)
        } else {
            ResponseEntity.badRequest().body(
                HitsForUserDto("error", "expired token", null)
            )
        }
    }

    private fun getOkResponseFromEntityArray(hits: List<HitEntity>?): ResponseEntity<Any> {
        val formatter = DateTimeFormatter.ofPattern("MM/dd/yyyy HH:mm:ss")
        return ResponseEntity.ok().body(
            HitsForUserDto("ok", null, hits!!.map {
                HitResDto(
                    arrayOf(it.cordX!!, it.cordY!!, it.cordR!!),
                    it.time!!.format(formatter),
                    it.execution!!,
                    it.result!!)
            })
        )
    }

}