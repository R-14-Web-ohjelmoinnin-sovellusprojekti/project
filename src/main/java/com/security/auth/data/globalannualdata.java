package com.exampledb.project.data;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Table;


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

