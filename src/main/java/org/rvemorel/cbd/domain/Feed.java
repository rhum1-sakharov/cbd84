package org.rvemorel.cbd.domain;

import java.io.Serializable;
import java.sql.Timestamp;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

import org.hibernate.validator.constraints.NotEmpty;

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

	@NotNull	
	@NotEmpty
	private String title;

	@NotNull
	@NotEmpty
	@Column(length=1024)
	private String content;
		
	private Date creationDate;
	
	private String pathFile;
	
	private boolean facebookLike;
	
	private boolean top;
	
	private String imagePosition;

	
	@NotNull	
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




	public String getPathFile() {
		return pathFile;
	}

	public void setPathFile(String pathFile) {
		this.pathFile = pathFile;
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

	

	

	}