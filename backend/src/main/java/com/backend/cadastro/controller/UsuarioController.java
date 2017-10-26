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

import com.backend.cadastro.model.Usuario;
import com.backend.cadastro.repository.UsuarioRepository;


@RestController
@RequestMapping("/usuario")
public class UsuarioController {
	
	@Autowired
	UsuarioRepository usuarioRepository;
	
	@GetMapping()
	public ResponseEntity<List<Usuario>> getAllAlunos() {
		return ResponseEntity.ok().body(usuarioRepository.findAll());
	}
	
	@PostMapping()
	public ResponseEntity<Usuario> create(@Valid @RequestBody Usuario aluno) {
		return ResponseEntity.ok().body(usuarioRepository.save(aluno));
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<Usuario> getUsuario(@PathVariable(value = "id") Long id) {
		Usuario usuario = usuarioRepository.findOne(id);
		if (Objects.isNull(usuario)) {
			return ResponseEntity.notFound().build();
		}
		return ResponseEntity.ok().body(usuario);
	}
	
	@PutMapping("/{id}")
	public ResponseEntity<Usuario> updateUsuario(@PathVariable(value = "id") Long id,
			@Valid @RequestBody Usuario usuarioDetails) {
		Usuario usuario = usuarioRepository.findOne(id);
		if (Objects.isNull(usuario)) {
			return ResponseEntity.notFound().build();
		}
		usuario.setUsername(usuarioDetails.getUsername());
		usuario.setPassword(usuarioDetails.getPassword());
		Usuario usuarioUpdated = usuarioRepository.save(usuario);
		return ResponseEntity.ok().body(usuarioUpdated);
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<Usuario> deleteUsuario(@PathVariable(value = "id") Long id) {
		Usuario usuario = usuarioRepository.findOne(id);
		if(Objects.isNull(usuario)) {
			return ResponseEntity.notFound().build();
		}
		usuarioRepository.delete(usuario);
		return ResponseEntity.ok().build();
	}	

}
