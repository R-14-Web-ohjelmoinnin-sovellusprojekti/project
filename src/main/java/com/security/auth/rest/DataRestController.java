package com.security.auth.rest;

import java.util.List;
import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Autowired;
import com.security.auth.data.globalannualdata;
import com.security.auth.repository.DataRepository;

@CrossOrigin
@RestController
public class DataRestController {

    DataRepository ps;

    @Autowired
    public DataRestController(DataRepository ps) {
        this.ps = ps;
    }

    @GetMapping("/data") //get all data
    public List<globalannualdata> getAllData() {
        return ps.findAll();
    }

    @GetMapping("/data/{time}") //search data by time
    public List<globalannualdata> getDataByTime(@PathVariable int time) {
        return ps.findByTime(time);
    }

    @PostMapping("/data") //add data
    public globalannualdata addData(@RequestBody globalannualdata data) {
        return ps.save(data);
    }

    @PutMapping("/data") //update data
    public globalannualdata updateData(@RequestBody globalannualdata data) {
        return ps.save(data);
    }

    @DeleteMapping("/data/{time}") //delete data
    public String deleteData(@PathVariable int time) {
        ps.deleteById(time);
        return "Data removed !! " + time;
    }
}

//find data by time and show it in the browser
//http://localhost:8080/data/1880
//find all data and show it in the browser
//http://localhost:8080/data
//add data
//http://localhost:8080/data
//update data
//http://localhost:8080/data
//delete data
//http://localhost:8080/data/1880
