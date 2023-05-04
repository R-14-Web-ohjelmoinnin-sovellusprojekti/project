package com.security.auth.data.Visualization3;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Table;

@Entity
@Table(name="humanevents")
public class Visualization3Events {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private String time;
    @Column(name = "event", nullable = false)
    private String humanEvent;

    public Visualization3Events(String time, String humanEvent) {
        this.time = time;
        this.humanEvent = humanEvent;
    }

    public Visualization3Events() {
    }

    public String getTime() {
        return this.time;
    }

    public void setTime(String time) {
        this.time = time;
    }

    public String getHumanEvent() {
        return this.humanEvent;
    }

    public void setHumanEvent(String humanEvent) {
        this.humanEvent = humanEvent;
    }
}