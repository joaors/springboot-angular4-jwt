package com.senai.cadastro.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.senai.cadastro.model.Usuario;

@Repository
public interface UsuarioRepository extends JpaRepository<Usuario, Long>{
	
	public Usuario findByUsername(String login);

}
