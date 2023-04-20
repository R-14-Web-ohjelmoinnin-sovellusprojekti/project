package com.security.auth.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.security.auth.data.Visualization1Annual;

import java.util.List;
import java.util.Map;

@Repository
public interface Visualization1Repository extends JpaRepository<Visualization1Annual, Integer>{
    //custom query to search data by time
    List<Visualization1Annual> findByTime(String time);
    //List<Visualization1> findAll();

    @Query(value="SELECT * FROM annual", nativeQuery = true)
    List<Map<String, Object>> getAnnual();

    @Query(value="SELECT * FROM monthly", nativeQuery = true)
    List<Map<String, Object>> getMonthly();

    @Query(value="SELECT * FROM reconstruction", nativeQuery = true)
    List<Map<String, Object>> getReconstruction();
    
    //void deleteById(String time);
}