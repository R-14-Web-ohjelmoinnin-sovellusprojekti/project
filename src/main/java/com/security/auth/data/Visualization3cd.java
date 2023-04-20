package com.security.auth.data;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Table;

@Entity
@Table(name="vis3cd")
public class Visualization3cd {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private String time;
    private double carbon_dioxide;

    public Visualization3cd(String time, double carbon_dioxide) {
        this.time = time;
        this.carbon_dioxide = carbon_dioxide;
    }

    public Visualization3cd() {
    }

    public String getTime() {
        return this.time;
    }

    public void setTime(String time) {
        this.time = time;
    }

    public double getcarbonDioxide() {
        return this.carbon_dioxide;
    }

    public void setcarbonDioxide(double carbon_dioxide) {
        this.carbon_dioxide = carbon_dioxide;
    }
}