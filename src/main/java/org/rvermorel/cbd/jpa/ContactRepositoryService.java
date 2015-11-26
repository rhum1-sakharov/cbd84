package org.rvermorel.cbd.jpa;

import java.io.IOException;
import java.util.List;

import javax.transaction.Transactional;

import org.rvermorel.cbd.datastore.IDatastore;
import org.rvermorel.cbd.domain.Contact;
import org.rvermorel.cbd.domain.Feed;
import org.rvermorel.cbd.images.IImageEnhancement;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ContactRepositoryService {

	private static final Logger LOG = LoggerFactory.getLogger(ContactRepositoryService.class);

	public static final String CONTACT_TYPE_PERSON = "person";
	public static final String CONTACT_TYPE_ASSO = "asso";
	
	@Autowired
	private ContactRepository contactRepo;

	@Autowired
	private IDatastore datastore;
	
	@Autowired
	private IImageEnhancement ie;

	public List<Contact> findPersonMembersOrderByPosition() {
		return contactRepo.findPersonMembersOrderByPosition();
	}
	
	public List<Contact> findAssoMembersOrderByPosition() {
		return contactRepo.findAssoMembersOrderByPosition();
	}

	public Contact addOrUpdateContact(Contact c, String type) {

		Contact contact = contactRepo.save(c);
		contact.setType(type);
		contact.setPhotoUrl("images/get/contacts/jpg/" + c.getId());
		return contactRepo.save(c);
	}
	
	public void addContactImage(String id, String imgExtension, String type, byte[] bytes, int size) {

		try {
			Long idLong = Long.valueOf(id);
			byte[] resized = ie.resizeImg(bytes, size, imgExtension);
			datastore.writeContent(resized, id, imgExtension, type);
			Contact c = contactRepo.getOne(idLong);
			c.setPhotoUrl("images/get/contacts/jpg/" + id);
			contactRepo.save(c);
			
		} catch (IOException e) {
			LOG.error(e.getMessage(), e);
		}
	}

	@Transactional
	public void deleteContact(String id, String imgExtension) {
		try {
			datastore.deleteContent(id, imgExtension, IDatastore.TYPE_CONTACTS);
		} catch (IOException e) {
			LOG.error(e.getMessage());
		}
			contactRepo.delete(Long.valueOf(id));	

	}

}
