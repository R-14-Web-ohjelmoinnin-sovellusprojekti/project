package com.security.auth.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.security.auth.data.globalannualdata;
import java.util.List;

@Repository
public interface DataRepository extends JpaRepository<globalannualdata, Integer>{
    //custom query to search data by time
    List<globalannualdata> findByTime(int time);
    List<globalannualdata> findAll();
    void deleteById(int time);
}