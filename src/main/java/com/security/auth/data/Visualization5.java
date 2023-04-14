package com.security.auth.data;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table (name="vis5")
public class Visualization5 {

    @Id

    private String sector;
    private double emissions;
    private String ide;

    public Visualization5(){

    }

    public Visualization5(String sector, double emissions, String ide) {

        this.sector = sector;
        this.emissions = emissions;
        this.ide = ide;
    }

    public String getSector() {
        return this.sector;
    }

    public void setSector(String sector) {
        this.sector = sector;
    }

    public double getEmissions() {
        return this.emissions;
    }

    public void setEmissions(double emissions) {
        this.emissions = emissions;
    }

    public String getIde() {
        return this.ide;
    }

    public void setIde(String ide ) {
        this.ide = ide;
    }


    
    
}