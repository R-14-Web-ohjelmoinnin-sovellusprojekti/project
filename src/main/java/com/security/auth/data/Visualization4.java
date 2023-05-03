package com.security.auth.data;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Table;

@Entity
@Table(name="carbonemissions")
public class Visualization4 {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int time;
    private double emissions;
    private String country;

    public Visualization4(int time, double anomaly, String area) {
        this.time = time;
        this.emissions = anomaly;
        this.country = area;
    }

    public Visualization4() {
    }

    public int getYear() {
        return this.time;
    }

    public void setYear(int time) {
        this.time = time;
    }

    public double getEmissions() {
        return this.emissions;
    }

    public void setEmissions(double emissions) {
        this.emissions = emissions;

    }

    public String getCountry() {
        return this.country;
    }

    public void setCountry(String country) {
        this.country = country;
    }

}

