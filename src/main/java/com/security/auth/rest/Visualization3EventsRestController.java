package com.security.auth.rest;
import java.util.List;
import java.util.Map;
import org.springframework.web.bind.annotation.*;

import com.security.auth.repository.Visualization3.Visualization3EventRepository;

import org.springframework.beans.factory.annotation.Autowired;

@CrossOrigin
@RestController
public class Visualization3EventsRestController {

    Visualization3EventRepository vis3event;

    @Autowired
    public Visualization3EventsRestController(Visualization3EventRepository vis3event) {
        this.vis3event = vis3event;
    }

    @GetMapping("/humanevents") //get all data
    public List<Map<String, Object>> getAll() {
        return vis3event.getAll();
    }
}
