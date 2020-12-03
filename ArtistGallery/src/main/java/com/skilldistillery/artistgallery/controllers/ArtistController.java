package com.skilldistillery.artistgallery.controllers;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.artistgallery.entities.Artist;
import com.skilldistillery.artistgallery.services.ArtistService;

@CrossOrigin({"*", "http://localhost:4205"})
@RequestMapping("api")
@RestController
public class ArtistController {

	@Autowired
	private ArtistService svc;

	@GetMapping("ping")
	public String ping() {
		return "pong";
	}

	@GetMapping("artists")
	public List<Artist> listArtists() {
		return svc.getAllArtists();

	}

	@PostMapping("artists")
	public Artist addArtist(@RequestBody Artist artist, HttpServletRequest request,
			HttpServletResponse response) {

		try {
			artist = svc.create(artist);
			response.setStatus(404);
			StringBuffer url = request.getRequestURL();
			response.setStatus(201);
		} catch (Exception e) {
			response.setStatus(404);
			e.printStackTrace();
		}

		return artist;

	}
	
	@PutMapping("artists/{id}")
	public Artist udpateArtist(@PathVariable Integer id, @RequestBody Artist artist, HttpServletResponse response) {
		try {
			artist = svc.updateArtist(id, artist);
			if (artist == null) {
				response.setStatus(404);
			}
		} catch (Exception e) {
			response.setStatus(400);
			artist = null;
			e.printStackTrace();
		}
		return artist;
	}
	
	@DeleteMapping("artists/{id}")
	public void deleteArtist(@PathVariable Integer id, HttpServletResponse response) {
		if (svc.delete(id)) {
			response.setStatus(204);
		}
		else {
			response.setStatus(404);
			
		}
	}

}
