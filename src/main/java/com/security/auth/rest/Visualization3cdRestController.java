package com.security.auth.rest;
import java.util.List;
import java.util.Map;
import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Autowired;
import com.security.auth.repository.Visualization3cdRepository;

@CrossOrigin
@RestController
public class Visualization3cdRestController {

    Visualization3cdRepository vis3cd;

    @Autowired
    public Visualization3cdRestController(Visualization3cdRepository vis3cd) {
        this.vis3cd = vis3cd;
    }

    @GetMapping("/vis3cd") //get all data
    public List<Map<String, Object>> getAll() {
        return vis3cd.getAll();
    }
}
