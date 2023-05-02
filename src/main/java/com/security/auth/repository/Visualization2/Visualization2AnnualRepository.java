package com.security.auth.repository.Visualization2;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.security.auth.data.Visualization2.Visualization2Annual;

@Repository
public interface Visualization2AnnualRepository extends JpaRepository<Visualization2Annual, Integer> {

        List<Visualization2Annual> findAll();
}