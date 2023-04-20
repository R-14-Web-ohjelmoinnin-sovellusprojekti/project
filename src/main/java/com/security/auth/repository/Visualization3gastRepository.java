package com.security.auth.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.security.auth.data.Visualization3gast;

import java.util.List;
import java.util.Map;

@Repository
public interface Visualization3gastRepository extends JpaRepository<Visualization3gast, String> {
    //custom query to search data by time
    List<Visualization3gast> findByTime(String time);

    @Query(value="SELECT * FROM vis3gast", nativeQuery = true)
    List<Map<String, Object>> getAll();
    //void deleteById(String time);
}
