package com.security.auth.repository.Visualization3;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.security.auth.data.Visualization3.Visualization3Cd;

import java.util.List;
import java.util.Map;
import org.springframework.data.jpa.repository.Query;

@Repository
public interface Visualization3CdRepository extends JpaRepository<Visualization3Cd, String> {
    //custom query to search data by time
    List<Visualization3Cd> findByTime(String time);
    
    @Query(value="SELECT * FROM vis3cd", nativeQuery = true)
    List<Map<String, Object>> getAll();
    //void deleteById(String time);
}
