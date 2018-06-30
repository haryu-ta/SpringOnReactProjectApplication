package com.example.demo.Repository;

import org.springframework.data.repository.CrudRepository;

import com.example.demo.Entity.Horse;

public interface HorseRepository extends CrudRepository<Horse, Long> {

}
