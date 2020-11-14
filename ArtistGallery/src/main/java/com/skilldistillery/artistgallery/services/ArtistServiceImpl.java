package com.skilldistillery.artistgallery.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skilldistillery.artistgallery.entities.Artist;
import com.skilldistillery.artistgallery.repositories.ArtistRepository;

@Service
public class ArtistServiceImpl implements ArtistService {

	@Autowired
	private ArtistRepository repo;
	@Override
	public List<Artist> getAllArtists() {
		// TODO Auto-generated method stub
		return null;
	}

}
