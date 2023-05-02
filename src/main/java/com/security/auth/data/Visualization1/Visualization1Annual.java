package com.security.auth.data.Visualization1;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Table;

@Entity
@Table(name="annual")
public class Visualization1Annual {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private String time;
    private double anomaly;
    private int area;

    public Visualization1Annual(String time, double anomaly, int area) {
        this.time = time;
        this.anomaly = anomaly;
        this.area = area;
    }

    public Visualization1Annual() {
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

