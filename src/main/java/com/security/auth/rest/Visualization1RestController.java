package com.security.auth.rest;

import java.util.List;
import java.util.Map;

import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Autowired;

import com.security.auth.data.Visualization1.Visualization1Annual;
import com.security.auth.repository.Visualization1Repository;

@CrossOrigin
@RestController
public class Visualization1RestController {
    
    Visualization1Repository vis1;

    @Autowired
    public Visualization1RestController(Visualization1Repository vis1) {
        this.vis1 = vis1;
    }

    @GetMapping("/vis1annual") //get all annual data
    public List<Map<String, Object>> getAnnual() {
        return vis1.getAnnual();
    }

    @GetMapping("/vis1monthly") //get all monthly data
    public List<Map<String, Object>> getMonthly() {
        return vis1.getMonthly();
    }

    @GetMapping("/vis1rec") //get all reconstruction data
    public List<Map<String, Object>> getReconstruction() {
        return vis1.getReconstruction();
    }

    @GetMapping("/vis1/{time}") //search data by time
    public List<Visualization1Annual> getDataByTime(@PathVariable String time) {
        return vis1.findByTime(time);
    }

    @PostMapping("/vis1") //add data
    public Visualization1Annual addData(@RequestBody Visualization1Annual data) {
        return vis1.save(data);
    }

    @PutMapping("/vis1") //update data
    public Visualization1Annual updateData(@RequestBody Visualization1Annual data) {
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
