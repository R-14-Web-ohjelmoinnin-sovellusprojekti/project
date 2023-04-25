package com.security.auth;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface PersonRepository extends JpaRepository<User,String>{
    
    @Query(value = "SELECT * FROM User", nativeQuery = true)
    List<User> getUsers();

}
