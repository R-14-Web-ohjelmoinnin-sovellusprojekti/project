package com.security.auth.data.Visualization3;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Table;

@Entity
@Table(name="vis3cd")
public class Visualization3Cd {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private String time;
    private double carbon_dioxide;

    public Visualization3Cd(String time, double carbon_dioxide) {
        this.time = time;
        this.carbon_dioxide = carbon_dioxide;
    }

    public Visualization3Cd() {
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