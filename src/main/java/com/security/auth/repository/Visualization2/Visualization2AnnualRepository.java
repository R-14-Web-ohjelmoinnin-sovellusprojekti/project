package com.security.auth.repository.Visualization2;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.security.auth.data.Visualization2.V2Annual;

@Repository
public interface Visualization2AnnualRepository extends JpaRepository<V2Annual, Integer> {

        List<V2Annual> findAll();
}