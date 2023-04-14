package com.security.auth.rest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;

import com.security.auth.data.Visualization5;
import com.security.auth.repository.Visualization5Repository;


@RestController

public class Visualization5RestController {

    @Autowired

    Visualization5Repository vis5;

    @CrossOrigin

    @GetMapping("/vis5")
    public List<Visualization5> getVis5(){
    return vis5.findAll();
    }
        
}