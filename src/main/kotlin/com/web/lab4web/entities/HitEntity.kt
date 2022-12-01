package com.web.lab4web.entities

import jakarta.persistence.*
import java.time.ZonedDateTime

@Entity
class HitEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private var id: Long? = null

    private var name: String? = null
    private var cordX: Float? = null
    private var cordY: Float? = null
    private var cordR: Float? = null
    private var time: ZonedDateTime? = null
    private var execution: Long? = null
    private var result: String? = null
}