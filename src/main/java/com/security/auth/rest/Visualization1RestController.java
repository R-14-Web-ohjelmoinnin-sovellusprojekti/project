package com.security.auth.rest;

import java.util.List;
import java.util.Map;

import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Autowired;

import com.security.auth.data.Visualization1;
import com.security.auth.repository.Visualization1Repository;

@CrossOrigin
@RestController
public class Visualization1RestController {
    
    Visualization1Repository vis1;

    @Autowired
    public Visualization1RestController(Visualization1Repository vis1) {
        this.vis1 = vis1;
    }
    /*
    @GetMapping("/vis1") //get all data
    public List<Visualization1> findAll() {
        return vis1.findAll();
    }
    */
    @GetMapping("/vis1") //get all data
    public List<Map<String, Object>> getAll() {
        return vis1.getAll();
    }

    @GetMapping("/vis1/{time}") //search data by time
    public List<Visualization1> getDataByTime(@PathVariable String time) {
        return vis1.findByTime(time);
    }

    @PostMapping("/vis1") //add data
    public Visualization1 addData(@RequestBody Visualization1 data) {
        return vis1.save(data);
    }

    @PutMapping("/vis1") //update data
    public Visualization1 updateData(@RequestBody Visualization1 data) {
        return vis1.save(data);
    }
    /*
    @DeleteMapping("/data/vis1/{time}") //delete data
    public String deleteData(@PathVariable String time) {
        vis1.deleteById(time);
        return "Data removed !! " + time;
    }
    */
}
