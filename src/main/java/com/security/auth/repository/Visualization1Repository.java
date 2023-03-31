package com.security.auth.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.security.auth.data.Visualization1;

import java.util.List;

@Repository
public interface Visualization1Repository extends JpaRepository<Visualization1, Integer>{
    //custom query to search data by time
    List<Visualization1> findByTime(String time);
    List<Visualization1> findAll();
    //void deleteById(String time);
}