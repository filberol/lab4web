package com.web.lab4web

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication

@SpringBootApplication(scanBasePackages = ["com.web.lab4web.*"])
class Lab4webApplication
fun main(args: Array<String>) {
    runApplication<Lab4webApplication>(*args)
}
