package com.security.auth.rest;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;

import org.springframework.web.bind.annotation.RestController;

import com.security.auth.data.Visualization2.V2Annual;
import com.security.auth.data.Visualization2.V2Icecore1;
import com.security.auth.data.Visualization2.V2Icecore2;
import com.security.auth.data.Visualization2.V2Icecore3;
import com.security.auth.data.Visualization2.V2Monthly;
import com.security.auth.repository.Visualization2.V2AnnualRepository;
import com.security.auth.repository.Visualization2.V2Icecore1Repository;
import com.security.auth.repository.Visualization2.V2Icecore2Repository;
import com.security.auth.repository.Visualization2.V2Icecore3Repository;
import com.security.auth.repository.Visualization2.V2MonthlyRepository;

@CrossOrigin
@RestController
public class V2RestController {

    V2AnnualRepository vis2Annual;
    V2MonthlyRepository vis2Monthly;
    V2Icecore1Repository vis2Icecore1;
    V2Icecore2Repository vis2Icecore2;
    V2Icecore3Repository vis2Icecore3;

    @Autowired
    public V2RestController(V2AnnualRepository vis2Annual,
            V2MonthlyRepository vis2Monthly, V2Icecore1Repository vis2Icecore1,
            V2Icecore2Repository vis2Icecore2, V2Icecore3Repository vis2Icecore3) {
        this.vis2Annual = vis2Annual;
        this.vis2Monthly = vis2Monthly;
        this.vis2Icecore1 = vis2Icecore1;
        this.vis2Icecore2 = vis2Icecore2;
        this.vis2Icecore3 = vis2Icecore3;
    }

    @GetMapping("/vis2Annual")
    public List<V2Annual> findAll() {
        return vis2Annual.findAll();
    }

    @GetMapping("/vis2Monthly")
    public List<V2Monthly> getAll() {
        return vis2Monthly.findAll();
    }

    @GetMapping("/vis2Icecore1")
    public List<V2Icecore1> getIcecore1() {
        return vis2Icecore1.findAll();
    }

    @GetMapping("/vis2Icecore2")
    public List<V2Icecore2> getIcecore2() {
        return vis2Icecore2.findAll();
    }

    @GetMapping("/vis2Icecore3")
    public List<V2Icecore3> getIcecore3() {
        return vis2Icecore3.findAll();
    }
}
