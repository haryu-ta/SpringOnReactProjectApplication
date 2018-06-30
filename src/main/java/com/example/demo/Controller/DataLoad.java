package com.example.demo.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import com.example.demo.Entity.Horse;
import com.example.demo.Repository.HorseRepository;

@Component
public class DataLoad implements CommandLineRunner {
	
	private final HorseRepository rep;
	
	@Autowired
	public DataLoad ( HorseRepository rep ) {
		this.rep = rep;
	}

	@Override
	public void run(String... args) throws Exception {
		
		rep.save(new Horse("Deep Impact","Ikee","male"));
		
	}

}
