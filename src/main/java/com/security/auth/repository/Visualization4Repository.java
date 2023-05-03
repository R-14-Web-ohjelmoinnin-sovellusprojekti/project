package com.security.auth.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.security.auth.data.Visualization4;

import java.util.List;
import java.util.Map;

@Repository
public interface Visualization4Repository extends JpaRepository<Visualization4, Integer>{
    //custom query to search data by time
    //List<Visualization4> findByTime(String time);
    //List<Visualization1> findAll();

    @Query(value="SELECT * FROM carbonemissions", nativeQuery = true)
    List<Map<String, Object>> getData();
    //void deleteById(String time);
};