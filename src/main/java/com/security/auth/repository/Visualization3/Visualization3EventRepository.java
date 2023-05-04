package com.security.auth.repository.Visualization3;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.security.auth.data.Visualization3.Visualization3Cd;
import com.security.auth.data.Visualization3.Visualization3Events;

import java.util.List;
import java.util.Map;
import org.springframework.data.jpa.repository.Query;

@Repository
public interface Visualization3EventRepository extends JpaRepository<Visualization3Events, String> {
    //custom query to search data by time
    List<Visualization3Events> findByTime(String time);
    
    @Query(value="SELECT * FROM humanevents", nativeQuery = true)
    List<Map<String, Object>> getAll();
    //void deleteById(String time);
}
