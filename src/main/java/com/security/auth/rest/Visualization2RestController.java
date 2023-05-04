package com.security.auth.rest;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;

import org.springframework.web.bind.annotation.RestController;

import com.security.auth.data.Visualization2.Visualization2Annual;
import com.security.auth.data.Visualization2.Visualization2Icecore1;
import com.security.auth.data.Visualization2.Visualization2Icecore2;
import com.security.auth.data.Visualization2.Visualization2Icecore3;
import com.security.auth.data.Visualization2.Visualization2Monthly;
import com.security.auth.repository.Visualization2.Visualization2AnnualRepository;
import com.security.auth.repository.Visualization2.Visualization2Icecore1Repository;
import com.security.auth.repository.Visualization2.Visualization2Icecore2Repository;
import com.security.auth.repository.Visualization2.Visualization2Icecore3Repository;
import com.security.auth.repository.Visualization2.Visualization2MonthlyRepository;

@CrossOrigin
@RestController
public class Visualization2RestController {

    Visualization2AnnualRepository vis2Annual;
    Visualization2MonthlyRepository vis2Monthly;
    Visualization2Icecore1Repository vis2Icecore1;
    Visualization2Icecore2Repository vis2Icecore2;
    Visualization2Icecore3Repository vis2Icecore3;

    @Autowired
    public Visualization2RestController(Visualization2AnnualRepository vis2Annual,
            Visualization2MonthlyRepository vis2Monthly, Visualization2Icecore1Repository vis2Icecore1,
            Visualization2Icecore2Repository vis2Icecore2, Visualization2Icecore3Repository vis2Icecore3) {
        this.vis2Annual = vis2Annual;
        this.vis2Monthly = vis2Monthly;
        this.vis2Icecore1 = vis2Icecore1;
        this.vis2Icecore2 = vis2Icecore2;
        this.vis2Icecore3 = vis2Icecore3;
    }

    @GetMapping("/vis2Annual")
    public List<Visualization2Annual> findAll() {
        return vis2Annual.findAll();
    }

    @GetMapping("/vis2Monthly")
    public List<Visualization2Monthly> getAll() {
        return vis2Monthly.findAll();
    }

    @GetMapping("/vis2Icecore1")
    public List<Visualization2Icecore1> getIcecore1() {
        return vis2Icecore1.findAll();
    }

    @GetMapping("/vis2Icecore2")
    public List<Visualization2Icecore2> getIcecore2() {
        return vis2Icecore2.findAll();
    }

    @GetMapping("/vis2Icecore3")
    public List<Visualization2Icecore3> getIcecore3() {
        return vis2Icecore3.findAll();
    }
}
