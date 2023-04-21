package com.security.auth.repository.Visualization2;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.security.auth.data.Visualization2.V2Icecore2;

@Repository
public interface V2Icecore2Repository extends JpaRepository<V2Icecore2, Integer> {

    List<V2Icecore2> findAll();
}