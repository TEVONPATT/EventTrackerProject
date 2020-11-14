package com.skilldistillery.artistgallery.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.artistgallery.services.ArtistService;

@RequestMapping("api")
@RestController
public class ArtistController {
	
	@Autowired
	private ArtistService svc;

	@GetMapping("ping")
	public String ping() {
		return "pong";
	}
	
}
