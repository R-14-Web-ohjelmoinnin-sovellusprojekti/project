package com.security.auth.data.Visualization2;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "co2_monthly")
public class Visualization2Monthly {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private String time;
    private double decimaldate;
    private double co2;

    public Visualization2Monthly(String time, double decimaldate, double co2) {
        this.time = time;
        this.decimaldate = decimaldate; 
        this.co2 = co2;
    }

    public Visualization2Monthly() {
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

    public double getDecimalDate() {
        return this.decimaldate;
    }

    public void setDecimalDate(double decimaldate) {
        this.decimaldate = decimaldate;
    }

}
