package com.security.auth.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.security.auth.data.Visualization1;

import java.util.List;
import java.util.Map;

@Repository
public interface Visualization1Repository extends JpaRepository<Visualization1, Integer>{
    //custom query to search data by time
    List<Visualization1> findByTime(String time);
    //List<Visualization1> findAll();

    @Query(value="SELECT * FROM annual", nativeQuery = true)
    List<Map<String, Object>> getAll();
    
    //void deleteById(String time);
}