package org.rvermorel.cbd.jpa;

import java.io.IOException;
import java.util.List;

import javax.transaction.Transactional;

import org.rvermorel.cbd.datastore.IDatastore;
import org.rvermorel.cbd.domain.Contact;
import org.rvermorel.cbd.domain.Partner;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ContactRepositoryService {

	private static final Logger LOG = LoggerFactory.getLogger(ContactRepositoryService.class);

	@Autowired
	private ContactRepository contactRepo;

	@Autowired
	private IDatastore datastore;

	public List<Contact> findAllOrderByPosition() {
		return contactRepo.findAllOrderByPosition();
	}

	public Contact addOrUpdateContact(Contact c) {

		Contact contact = contactRepo.save(c);
		contact.setPhotoUrl("images/get/contacts/jpg/" + c.getId());
		return contactRepo.save(c);

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
