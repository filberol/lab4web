package com.web.lab4web.controllers

import org.springframework.stereotype.Controller
import org.springframework.web.bind.annotation.RequestMapping

@Controller
class MainController {
    @RequestMapping("/")
    fun home(): String {
        return "home"
    }
}