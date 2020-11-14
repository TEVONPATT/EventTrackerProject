package com.skilldistillery.artistgallery.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.artistgallery.entities.Artist;

public interface ArtistRepository extends JpaRepository<Artist, Integer> {

}
