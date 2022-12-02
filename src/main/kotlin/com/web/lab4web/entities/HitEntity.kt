package com.web.lab4web.entities

import jakarta.persistence.*
import java.time.ZonedDateTime

@Entity
@Table(name = "strike_hits")
open class HitEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    open var id: Long? = null

    open var name: String? = null
    open var cordX: Float? = null
    open var cordY: Float? = null
    open var cordR: Float? = null
    open var time: ZonedDateTime? = null
    open var execution: Long? = null
    open var result: String? = null
}