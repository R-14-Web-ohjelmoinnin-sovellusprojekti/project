package com.security.auth.rest;
import java.util.List;
import java.util.Map;
import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Autowired;
import com.security.auth.repository.Visualization3gastRepository;

@CrossOrigin
@RestController
public class Visualization3gastRestController {

    Visualization3gastRepository vis3gast;

    @Autowired
    public Visualization3gastRestController(Visualization3gastRepository vis3gast) {
        this.vis3gast = vis3gast;
    }

    @GetMapping("/vis3gast") //get all data
    public List<Map<String, Object>> getAll() {
        return vis3gast.getAll();
    }
}
