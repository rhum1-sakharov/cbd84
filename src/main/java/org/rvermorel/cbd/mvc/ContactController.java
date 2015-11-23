package org.rvermorel.cbd.mvc;

import java.util.List;

import org.rvermorel.cbd.domain.Contact;
import org.rvermorel.cbd.jpa.ContactRepositoryService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/contacts")
public class ContactController {

	private static final Logger LOG = LoggerFactory.getLogger(ContactController.class);

	@Autowired
	private ContactRepositoryService contactRepoService;

	@RequestMapping(method = RequestMethod.GET)
	List<Contact>  displaySortedContacts() {
		return contactRepoService.findAllOrderByPosition();
	}
	
	@RequestMapping(value="/add",method = RequestMethod.POST)	
	Contact  addContact(@RequestBody final Contact c) {
		return contactRepoService.addOrUpdateContact(c);
	}
	
	@RequestMapping(value="/update",method = RequestMethod.POST)	
	Contact  updatePartner(@RequestBody final Contact c) {
		return contactRepoService.addOrUpdateContact(c);
	}
	
	@RequestMapping(value="/delete/{id}/{imgExtension}",method = RequestMethod.GET)	
	void  deleteContact(@PathVariable String id,@PathVariable String imgExtension) {
		contactRepoService.deleteContact(id, imgExtension);
	}


}
