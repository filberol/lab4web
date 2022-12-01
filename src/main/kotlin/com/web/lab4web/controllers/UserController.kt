package com.web.lab4web.controllers

import com.web.lab4web.dto.UserDto
import com.web.lab4web.entities.UserEntity
import com.web.lab4web.repos.UserRepository
import com.web.lab4web.service.HashService
import com.web.lab4web.service.JwtService
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.http.ResponseEntity
import org.springframework.validation.annotation.Validated
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("/user-api")
class UserController {

    @Autowired
    private lateinit var userRepository: UserRepository
    @Autowired
    private lateinit var tokenService: JwtService
    @Autowired
    private lateinit var hashService: HashService

    @GetMapping
    fun checkUserAuth(@Validated @RequestBody user: UserDto): ResponseEntity<Any> {
        println(user)
        val username = user.username
        val dbUser = userRepository.findByLogin(username)
        return if (dbUser == null || hashService.encodePassword(user.password) != dbUser.hashPass) {
            ResponseEntity.badRequest().body("Неверное имя пользователя или пароль.")
        } else {
            val token = tokenService.generateForUser(username)
            ResponseEntity.ok().body(token)
        }
    }

    @PostMapping
    fun addUser(@Validated @RequestBody user: UserDto): ResponseEntity<Any> {
        println(user)
        val username = user.username
        return if (userRepository.findByLogin(username) != null) {
            ResponseEntity.badRequest().body("Имя пользователя $username уже используется")
        } else {
            val newUser = UserEntity().also {
                it.login = username
                it.hashPass = hashService.encodePassword(user.password)
            }
            userRepository.save(newUser)
            ResponseEntity.ok().body(username)
        }
    }
}