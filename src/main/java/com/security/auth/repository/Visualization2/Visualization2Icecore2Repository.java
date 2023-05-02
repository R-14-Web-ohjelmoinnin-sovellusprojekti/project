package com.security.auth.repository.Visualization2;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.security.auth.data.Visualization2.Visualization2Icecore2;

@Repository
public interface Visualization2Icecore2Repository extends JpaRepository<Visualization2Icecore2, Integer> {

    List<Visualization2Icecore2> findAll();
}