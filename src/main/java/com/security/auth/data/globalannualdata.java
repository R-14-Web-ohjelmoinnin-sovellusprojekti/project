package com.security.auth.data;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Table;


@Entity
@Table(name="globalannualdata")
public class globalannualdata {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int time;
    private double anomaly;

    public globalannualdata(int time, double anomaly) {
        this.time = time;
        this.anomaly = anomaly;
    }

    public globalannualdata() {
    }

    public int getTime() {
        return this.time;
    }

    public void setTime(int time) {
        this.time = time;
    }

    public double getAnomaly() {
        return this.anomaly;
    }

    public void setAnomaly(double anomaly) {
        this.anomaly = anomaly;

    }
}

