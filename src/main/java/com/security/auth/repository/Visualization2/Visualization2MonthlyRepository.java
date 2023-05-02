package com.security.auth.repository.Visualization2;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.security.auth.data.Visualization2.Visualization2Monthly;

@Repository
public interface Visualization2MonthlyRepository extends JpaRepository<Visualization2Monthly, Integer> {

    List<Visualization2Monthly> findAll();
    // @Query(value="SELECT * FROM co2_monthly", nativeQuery = true) // get all data
    //     List<Map<String, Object>> getAll();
}
