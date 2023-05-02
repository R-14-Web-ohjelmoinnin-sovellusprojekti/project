package com.security.auth.repository.Visualization3;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.security.auth.data.Visualization3.Visualization3Gast;

import java.util.List;
import java.util.Map;

@Repository
public interface Visualization3GastRepository extends JpaRepository<Visualization3Gast, String> {
    //custom query to search data by time
    List<Visualization3Gast> findByTime(String time);

    @Query(value="SELECT * FROM vis3gast", nativeQuery = true)
    List<Map<String, Object>> getAll();
    //void deleteById(String time);
}
