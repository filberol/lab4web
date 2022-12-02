package com.web.lab4web.controllers

import org.springframework.http.ResponseEntity
import org.springframework.http.converter.HttpMessageNotReadableException
import org.springframework.web.bind.annotation.ControllerAdvice
import org.springframework.web.bind.annotation.ExceptionHandler

@ControllerAdvice
class ControllerExceptions {
    @ExceptionHandler
    fun handleIllegalStateException(ex: HttpMessageNotReadableException): ResponseEntity<Any> {
        return ResponseEntity.badRequest().body(null)
    }
}