package com.skilldistillery.artistgallery.entities;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

class ArtistTest {

	private static EntityManagerFactory emf;
	private static EntityManager em;
	private static Artist artist;
	
	@BeforeAll
	static void setUpBeforeClass() throws Exception {
		emf = Persistence.createEntityManagerFactory("ArtistGalleryPU");
	}

	@AfterAll
	static void tearDownAfterClass() throws Exception {
		emf.close();
	}

	@BeforeEach
	void setUp() throws Exception {
		em = emf.createEntityManager();
		artist = em.find(Artist.class, 1);
	}

	@AfterEach
	void tearDown() throws Exception {
		em.close();artist = null;
	}

	@Test
	void test_Artist_entity_mapping() {
		assertNotNull(artist);
		assertEquals("Vincent", artist.getName());
	}

}
