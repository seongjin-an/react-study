package com.ansj.react.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class ReactController {
    @GetMapping("/")
    public String index(){
        return "index";
    }
    @GetMapping("/ansj")
    public String alsoIndex(){
        return "index";
    }
}
