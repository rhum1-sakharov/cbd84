package org.rvermorel.cbd.domain;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "partners")
public class Partner implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = -3281605656209077047L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id_partner", unique = true, nullable = false)
	private Long id;

	@Column(name="title")
	private String title;
	
	@Column(name="urlLink")
	private String urlLink;
	
	@Column(name="imageUrl")
	private String imageUrl;
	
	@Column(name="imageExtension")
	private String imageExtension;
	
	@Column(name="position")
	private int position;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getUrlLink() {
		return urlLink;
	}

	public void setUrlLink(String urlLink) {
		this.urlLink = urlLink;
	}

	public String getImageUrl() {
		return imageUrl;
	}

	public void setImageUrl(String imageUrl) {
		this.imageUrl = imageUrl;
	}

	public int getPosition() {
		return position;
	}

	public void setPosition(int position) {
		this.position = position;
	}
	

}