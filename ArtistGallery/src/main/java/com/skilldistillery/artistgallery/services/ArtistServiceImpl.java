package com.skilldistillery.artistgallery.services;

import java.util.List;
import java.util.Optional;

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
		return repo.findAll();
	}
	
	@Override
	public List<Artist> getArtistsForKeyword(String keyword) {
			keyword = "%" + keyword + "%";
			return repo.findByNameLikeOrArtStyleLike(keyword, keyword);
	}
	
	@Override
	public Optional<Artist> findById(int id) {
		return repo.findById(id);
	}

	@Override
	public Artist create(int id, Artist artist) {
		if (artist.getName() == null) {
			artist = new Artist();
			artist.setId(1);
		}
		repo.saveAndFlush(artist);
		return artist;
	}

	@Override
	public Artist updateArtist(int id, Artist artist) {
		Optional<Artist> updateArtist = repo.findById(id);
		Artist managedArtist = null;
		if(updateArtist.isPresent()) {
			managedArtist = updateArtist.get();
			if (artist.getName() != null) {managedArtist.setName(artist.getName());}
			if (artist.getArtStyle() != null) {managedArtist.setArtStyle(artist.getArtStyle());}
			managedArtist.setBirthYear(artist.getBirthYear());
			managedArtist.setDeathYear(artist.getDeathYear());
			if (artist.getListOfWork() != null) {managedArtist.setListOfWork(artist.getListOfWork());}
			repo.flush();
		}
		return managedArtist;
	}

	@Override
	public boolean delete(int artistId) {
		boolean deleted = false;
		Optional<Artist> artistOpt = repo.findById(artistId);
		if(artistOpt.isPresent()) {
			repo.delete(artistOpt.get());
			repo.deleteById(artistId);
			deleted = true;
		}
		return deleted;
	}

	@Override
	public Artist showArtist(int artistId) {
		Optional<Artist> artistOpt = repo.findById(artistId);
		Artist artist = null;
		if (artistOpt.isPresent()) {
			artist = artistOpt.get();
		}
		return artist;
	}
	

}
