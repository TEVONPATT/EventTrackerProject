package com.skilldistillery.artistgallery.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Artist {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	private String name;
	
	@Column(name="art_style")
	private String artStyle;
	
	@Column(name="birth_year")
	private int birthYear;
	
	@Column(name="death_year")
	private int deathYear;
	
	@Column(name="artist_image")
	private String imageUrl;
	
	@Column(name="list_of_work")
	private String listOfWork;
	
//	GETTERS AND SETTERS========================================
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getArtStyle() {
		return artStyle;
	}
	public void setArtStyle(String artStyle) {
		this.artStyle = artStyle;
	}
	public int getBirthYear() {
		return birthYear;
	}
	public void setBirthYear(int birthYear) {
		this.birthYear = birthYear;
	}
	public int getDeathYear() {
		return deathYear;
	}
	public void setDeathYear(int deathYear) {
		this.deathYear = deathYear;
	}
	public String getImageUrl() {
		return imageUrl;
	}
	public void setImageUrl(String imageUrl) {
		this.imageUrl = imageUrl;
	}
	public String getListOfWork() {
		return listOfWork;
	}
	public void setListOfWork(String listOfWork) {
		this.listOfWork = listOfWork;
	}
	
//	CONSTRUCTOR============================================================
	
	public Artist() {
		super();
	}
	
//	HASHCODE AND EQUALS++++++++++++++++++++++++++++++++++++++++++++++++++++++

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((artStyle == null) ? 0 : artStyle.hashCode());
		result = prime * result + birthYear;
		result = prime * result + deathYear;
		result = prime * result + id;
		result = prime * result + ((imageUrl == null) ? 0 : imageUrl.hashCode());
		result = prime * result + ((listOfWork == null) ? 0 : listOfWork.hashCode());
		result = prime * result + ((name == null) ? 0 : name.hashCode());
		return result;
	}
	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Artist other = (Artist) obj;
		if (artStyle == null) {
			if (other.artStyle != null)
				return false;
		} else if (!artStyle.equals(other.artStyle))
			return false;
		if (birthYear != other.birthYear)
			return false;
		if (deathYear != other.deathYear)
			return false;
		if (id != other.id)
			return false;
		if (imageUrl == null) {
			if (other.imageUrl != null)
				return false;
		} else if (!imageUrl.equals(other.imageUrl))
			return false;
		if (listOfWork == null) {
			if (other.listOfWork != null)
				return false;
		} else if (!listOfWork.equals(other.listOfWork))
			return false;
		if (name == null) {
			if (other.name != null)
				return false;
		} else if (!name.equals(other.name))
			return false;
		return true;
	}
	
	//	TOSTRING++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
	
	@Override
	public String toString() {
		return "Artist [id=" + id + ", name=" + name + ", artStyle=" + artStyle + ", birthYear=" + birthYear
				+ ", deathYear=" + deathYear + ", imageUrl=" + imageUrl + ", listOfWork=" + listOfWork + "]";
	}

	
	
	
	
	
	
	
	
}
