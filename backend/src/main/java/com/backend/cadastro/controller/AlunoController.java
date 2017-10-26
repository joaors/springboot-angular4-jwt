package com.backend.cadastro.controller;

import java.util.List;
import java.util.Objects;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.backend.cadastro.model.Aluno;
import com.backend.cadastro.repository.AlunoRepository;

@RestController
@RequestMapping("/aluno")
public class AlunoController {

	@Autowired
	AlunoRepository alunoRepository;
	
	@GetMapping()
	public ResponseEntity<List<Aluno>> getAllAlunos() {
		return ResponseEntity.ok().body(alunoRepository.findAll());
	}
	
	@PostMapping()
	public ResponseEntity<Aluno> create(@Valid @RequestBody Aluno aluno) {
		return ResponseEntity.ok().body(alunoRepository.save(aluno));
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<Aluno> getAluno(@PathVariable(value = "id") Long id) {
		Aluno aluno = alunoRepository.findOne(id);
		if (Objects.isNull(aluno)) {
			return ResponseEntity.notFound().build();
		}
		return ResponseEntity.ok().body(aluno);
	}
	
	@PutMapping("/{id}")
	public ResponseEntity<Aluno> updateAluno(@PathVariable(value = "id") Long id,
			@Valid @RequestBody Aluno alunoDetails) {
		Aluno aluno = alunoRepository.findOne(id);
		if (Objects.isNull(aluno)) {
			return ResponseEntity.notFound().build();
		}
		aluno.setName(alunoDetails.getName());
		Aluno alunoUpdated = alunoRepository.save(aluno);
		return ResponseEntity.ok().body(alunoUpdated);
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<Aluno> deleteAluno(@PathVariable(value = "id") Long id) {
		Aluno aluno = alunoRepository.findOne(id);
		if(Objects.isNull(aluno)) {
			return ResponseEntity.notFound().build();
		}
		alunoRepository.delete(aluno);
		return ResponseEntity.ok().build();
	}
	
}
