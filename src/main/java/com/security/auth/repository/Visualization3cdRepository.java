package com.security.auth.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.security.auth.data.Visualization3cd;
import java.util.List;
import java.util.Map;
import org.springframework.data.jpa.repository.Query;

@Repository
public interface Visualization3cdRepository extends JpaRepository<Visualization3cd, String> {
    //custom query to search data by time
    List<Visualization3cd> findByTime(String time);
    
    @Query(value="SELECT * FROM vis3cd", nativeQuery = true)
    List<Map<String, Object>> getAll();
    //void deleteById(String time);
}
