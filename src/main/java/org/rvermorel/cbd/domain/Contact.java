package org.rvermorel.cbd.domain;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;

@Entity
@Table(name = "contacts" )
public class Contact implements Serializable {
	/**
	 * 
	 */
	private static final long serialVersionUID = 2739849460801882429L;

	/** Default value included to remove warning. Remove or modify at will. **/


	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id_contact", unique = true, nullable = false)
	private Long id;
	
	@Column(name = "function")
	private String function;
	
	@Column(name = "city")
	private String city;	

	@Column(name = "lastname")
	private String lastname;	
	
	@Column(name = "firstname")
	private String firstname;
	
	@Column(name = "address")
	private String address;
	
	@Column(name = "postalCode")
	private String postalCode;

	@Column(name = "email")
	private String email;

	@Column(name = "phone")
	private String phone;
	
	@Column(name = "mobile")
	private String mobile;
	
	@Column(name = "photoUrl")
	private String photoUrl;
	
	@Column(name = "type")
	private String type;
	
	@Column(name = "assoCodeLabel")
	private String assoCodeLabel;
	
	@Column(name = "assoName")
	private String assoName;
	
	@Column(name = "correspondance")
	private String correspondance;
	
	@Column(name = "boulodrome")
	private String boulodrome;
	
	@Column(name = "history")
	private String history;
	
	@Column(name = "position")
	private int position;

	public int getPosition() {
		return position;
	}

	public void setPosition(int position) {
		this.position = position;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getFunction() {
		return function;
	}

	public void setFunction(String function) {
		this.function = function;
	}

	public String getLastname() {
		return lastname;
	}

	public void setLastname(String lastname) {
		this.lastname = lastname;
	}

	public String getFirstname() {
		return firstname;
	}

	public void setFirstname(String firstname) {
		this.firstname = firstname;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getPostalCode() {
		return postalCode;
	}

	public void setPostalCode(String postalCode) {
		this.postalCode = postalCode;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public String getPhotoUrl() {
		return photoUrl;
	}

	public void setPhotoUrl(String photoUrl) {
		this.photoUrl = photoUrl;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getMobile() {
		return mobile;
	}

	public void setMobile(String mobile) {
		this.mobile = mobile;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public String getAssoCodeLabel() {
		return assoCodeLabel;
	}

	public void setAssoCodeLabel(String assoCodeLabel) {
		this.assoCodeLabel = assoCodeLabel;
	}

	public String getAssoName() {
		return assoName;
	}

	public void setAssoName(String assoName) {
		this.assoName = assoName;
	}

	public String getCorrespondance() {
		return correspondance;
	}

	public void setCorrespondance(String correspondance) {
		this.correspondance = correspondance;
	}

	public String getBoulodrome() {
		return boulodrome;
	}

	public void setBoulodrome(String boulodrome) {
		this.boulodrome = boulodrome;
	}

	public String getHistory() {
		return history;
	}

	public void setHistory(String history) {
		this.history = history;
	}
	
}