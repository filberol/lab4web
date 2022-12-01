package com.web.lab4web.repos

import com.web.lab4web.entities.UserEntity
import org.springframework.data.repository.CrudRepository
import org.springframework.stereotype.Repository

@Repository
interface UserRepository: CrudRepository<UserEntity, Long> {
    fun findByLogin(login: String): UserEntity?
}