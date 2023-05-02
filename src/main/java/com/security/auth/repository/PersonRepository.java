package com.security.auth.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.security.auth.User;

@Repository
public interface PersonRepository extends JpaRepository<User,String>{
    
    @Query(value = "SELECT * FROM User", nativeQuery = true)
    List<User> getUsers();

}
