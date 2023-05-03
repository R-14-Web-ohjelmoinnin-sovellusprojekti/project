package com.security.auth.rest;

import java.util.List;
import java.util.Map;

import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Autowired;

import com.security.auth.repository.Visualization4Repository;

@CrossOrigin
@RestController
public class Visualization4RestController {
    
    Visualization4Repository vis4;

    @Autowired
    public Visualization4RestController(Visualization4Repository vis4) {
        this.vis4 = vis4;
    }

    @GetMapping("/vis4data") //get all carbon emissions data
    public List<Map<String, Object>> getAnnual() {
        return vis4.getData();
    }
}
