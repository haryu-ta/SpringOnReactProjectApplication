package com.example.demo.Entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
public class Horse {
	
	private @Id @GeneratedValue Long id;
	private String horsename;
	private String stable;
	private String gender;
	
	public Horse(String horsename,String stable,String gender) {
		this.horsename = horsename;
		this.stable = stable;
		this.gender = gender;
	}

}
