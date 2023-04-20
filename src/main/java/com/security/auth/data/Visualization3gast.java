package com.security.auth.data;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Table;

@Entity
@Table(name="vis3gast")
public class Visualization3gast {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private String time;
    private double gast;

    public Visualization3gast(String time, double gast) {
        this.time = time;
        this.gast = gast;
    }

    public Visualization3gast() {
    }

    public String getTime() {
        return this.time;
    }

    public void setTime(String time) {
        this.time = time;
    }

    public double getGast() {
        return this.gast;
    }

    public void setGast(double gast) {
        this.gast = gast;
    }
}