package com.skilldistillery.artistgallery.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.artistgallery.entities.Artist;

public interface ArtistRepository extends JpaRepository<Artist, Integer> {
	List<Artist> findByNameLikeOrArtStyleLike(String keyword1, String keyword2);
}
