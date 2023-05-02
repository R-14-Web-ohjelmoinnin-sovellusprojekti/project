package com.security.auth.repository.Visualization2;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.security.auth.data.Visualization2.V2Icecore3;

@Repository
public interface Visualization2Icecore3Repository extends JpaRepository<V2Icecore3, Integer> {

    List<V2Icecore3> findAll();
}