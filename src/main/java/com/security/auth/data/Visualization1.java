package com.security.auth.data;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Table;

@Entity
@Table(name="annual")
public class Visualization1 {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private String time;
    private double anomaly;
    private int area;

    public Visualization1(String time, double anomaly, int area) {
        this.time = time;
        this.anomaly = anomaly;
        this.area = area;

    }

    public Visualization1() {
    }

    public String getTime() {
        return this.time;
    }

    public void setTime(String time) {
        this.time = time;
    }

    public double getAnomaly() {
        return this.anomaly;
    }

    public void setAnomaly(double anomaly) {
        this.anomaly = anomaly;

    }

    public int getArea() {
        return this.area;
    }

    public void setArea(int area) {
        this.area = area;
    }

}

