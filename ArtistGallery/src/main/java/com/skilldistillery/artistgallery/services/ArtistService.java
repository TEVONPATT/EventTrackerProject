package com.skilldistillery.artistgallery.services;

import java.util.List;
import java.util.Optional;

import com.skilldistillery.artistgallery.entities.Artist;

public interface ArtistService {
	List<Artist> getAllArtists();
	List<Artist> getArtistsForKeyword(String keyword);
	Optional<Artist> findById(int id);
	Artist showArtist(int artistId);
	Artist create(Artist artist);
	Artist updateArtist(int id, Artist artist);
	boolean delete(int artistId);

	
}
