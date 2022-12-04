package com.web.lab4web.controllers

import com.web.lab4web.dto.responses.AuthResDto
import com.web.lab4web.dto.responses.RegResDto
import com.web.lab4web.dto.requests.UserDto
import com.web.lab4web.entities.UserEntity
import com.web.lab4web.repos.UserRepository
import com.web.lab4web.service.HashService
import com.web.lab4web.service.JwtService
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.http.ResponseEntity
import org.springframework.validation.annotation.Validated
import org.springframework.web.bind.annotation.*

@RestController
@CrossOrigin
@RequestMapping("/user-api")
class UserController {

    @Autowired
    private lateinit var userRepository: UserRepository
    @Autowired
    private lateinit var tokenService: JwtService
    @Autowired
    private lateinit var hashService: HashService

    @PostMapping
    fun checkUserAuth(@Validated @RequestBody user: UserDto): ResponseEntity<Any> {
        val username = user.username
        val dbUser = userRepository.findByLogin(username)
        return if (dbUser == null || !hashService.matchPassword(user.password, dbUser.hashPass!!)) {
            ResponseEntity.badRequest().body(
                AuthResDto("error", errorMessage = "Неверные имя пользователя или пароль")
            )
        } else {
            val token = tokenService.generateForUser(username)
            println("Authed user $username")
            ResponseEntity.ok().body(
                AuthResDto("ok", token = token)
            )
        }
    }

    @PutMapping
    fun addUser(@Validated @RequestBody user: UserDto): ResponseEntity<Any> {
        println("Requested registration for $user")
        val username = user.username
        println(user.password)
        return if (userRepository.findByLogin(username) != null) {
            ResponseEntity.badRequest().body(
                RegResDto("error", errorMessage = "Имя пользователя $username уже используется")
            )
        } else {
            val newUser = UserEntity().also {
                it.login = username
                it.hashPass = hashService.encodePassword(user.password)
            }
            userRepository.save(newUser)
            println("Saved new user $username")
            ResponseEntity.ok().body(
                RegResDto("ok")
            )
        }
    }
}