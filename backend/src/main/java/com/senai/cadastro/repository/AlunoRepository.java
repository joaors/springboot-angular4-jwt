package com.senai.cadastro.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.senai.cadastro.model.Aluno;

@Repository
public interface AlunoRepository extends JpaRepository<Aluno, Long>{
	
	
	public Aluno findByName(String name);

}
