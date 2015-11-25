package org.rvermorel.cbd.domain;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "feeds")
public class Feed implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = -8698063873066222672L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id_feed", unique = true, nullable = false)
	private Long id;

	@Column(name="title")
	private String title;

	@Column(name = "type")
	private String type;
	
	@Column(length = 1024)
	private String content;

	@Column(name="creationDate", nullable=false)
	private Date creationDate;

	@Column(name="facebookLike")
	private boolean facebookLike;

	private boolean top;
	
	@Column(name="imageUrl")
	private String imageUrl;
	
	
	@Column(name="imageTitle")
	private String imageTitle;

	@Column(name="imagePosition")
	private String imagePosition;
	
	
	@Column(name="imageExtension")
	private String imageExtension;

	
	private String author;

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

	public String getContent() {
		return content;
	}

	public void setContent(String content) {
		this.content = content;
	}

	public String getAuthor() {
		return author;
	}

	public void setAuthor(String author) {
		this.author = author;
	}

	public boolean isFacebookLike() {
		return facebookLike;
	}

	public void setFacebookLike(boolean facebookLike) {
		this.facebookLike = facebookLike;
	}

	public boolean isTop() {
		return top;
	}

	public void setTop(boolean top) {
		this.top = top;
	}

	public Date getCreationDate() {
		return creationDate;
	}

	public void setCreationDate(Date creationDate) {
		this.creationDate = creationDate;
	}

	public String getImagePosition() {
		return imagePosition;
	}

	public void setImagePosition(String imagePosition) {
		this.imagePosition = imagePosition;
	}

	
	public String getImageUrl() {
		return imageUrl;
	}

	public void setImageUrl(String imageUrl) {
		this.imageUrl = imageUrl;
	}

	

	public String getImageTitle() {
		return imageTitle;
	}

	public void setImageTitle(String imageTitle) {
		this.imageTitle = imageTitle;
	}

	public String getImageExtension() {
		return imageExtension;
	}

	public void setImageExtension(String imageExtension) {
		this.imageExtension = imageExtension;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

}