package com.web.lab4web.repos

import com.web.lab4web.entities.HitEntity
import org.springframework.data.repository.CrudRepository
import org.springframework.stereotype.Repository

@Repository
interface HitsRepository: CrudRepository<HitEntity, Long> {
    fun findAllByName(name: String): List<HitEntity>?
    fun deleteAllByName(name: String)
}