package com.security.auth.data.Visualization2;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "icecore3")
public class Visualization2Icecore3 {
    
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private String time;
    private double co2;

    public Visualization2Icecore3(String time, double co2) {
        this.time = time;
        this.co2 = co2;
    }

    public Visualization2Icecore3() {
    }

    public String getTime() {
        return this.time;
    }

    public void setTime(String time) {
        this.time = time;
    }

    public double getCo2() {
        return this.co2;
    }

    public void setCo2(double co2) {
        this.co2 = co2;
    }
}