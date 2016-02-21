package org.rvermorel.cbd.mvc;

import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.rvermorel.cbd.datastore.IDatastore;
import org.rvermorel.cbd.domain.Contact;
import org.rvermorel.cbd.jpa.ContactRepositoryService;
import org.rvermorel.cbd.reports.IReportService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import net.sf.jasperreports.engine.data.JRBeanCollectionDataSource;

@RestController
@RequestMapping(value = "/contacts")
public class ContactController {

	private static final Logger LOG = LoggerFactory.getLogger(ContactController.class);

	@Autowired
	private ContactRepositoryService contactRepoService;

	@Autowired
	private IReportService reportService;

	@RequestMapping(value = "/report", method = RequestMethod.GET)
	public ResponseEntity<byte[]> getPDFReportList(HttpServletRequest request) {
		List<Contact> contacts = contactRepoService.findAssoMembersOrderByPosition();
		JRBeanCollectionDataSource ds = new JRBeanCollectionDataSource(contacts);
		Map<String, Object> params = new HashMap<String, Object>();

		int port = request.getServerPort();
		String rootUrl = "";
		rootUrl = String.format("%s://%s%s/", request.getScheme(), request.getServerName(),
				port == 80 ? "" : ":" + port);
		rootUrl += "images/get/contacts/jpg/";
		LOG.debug(rootUrl);
		params.put("urlAssoImage", rootUrl);
		byte[] bytes = reportService.createPDFA1(getClass().getResourceAsStream("/reports/assos.jasper"), params, ds);
		HttpHeaders headers = new HttpHeaders();
		headers.set("Content-Type", "application/pdf");
		headers.set("Content-Disposition", "attachment; filename=associations-sportives-84.pdf");
		return new ResponseEntity<byte[]>(bytes, headers, HttpStatus.OK);
	}

	@RequestMapping(method = RequestMethod.GET)
	List<Contact> displaySortedContacts() {
		return contactRepoService.findPersonMembersOrderByPosition();
	}

	@RequestMapping(value = "/add", method = RequestMethod.POST)
	Contact addContact(@RequestBody final Contact c) {
		return contactRepoService.addOrUpdateContact(c, ContactRepositoryService.CONTACT_TYPE_PERSON);
	}

	@RequestMapping(value = "/add/image/{imgExtension}/{size}/{id}", method = { RequestMethod.POST })
	public ResponseEntity<String> addImage(@RequestParam("file") MultipartFile file, @PathVariable String imgExtension,
			@PathVariable String id, @PathVariable int size) {
		String responseMessage = "";
		try {
			contactRepoService.addContactImage(id, imgExtension, IDatastore.TYPE_CONTACTS, file.getBytes(), size);
		} catch (IOException e) {
			return new ResponseEntity<String>(e.getMessage(), null, HttpStatus.OK);
		}

		return new ResponseEntity<String>(responseMessage, null, HttpStatus.OK);
	}

	@RequestMapping(value = "/update", method = RequestMethod.POST)
	Contact updatePartner(@RequestBody final Contact c) {
		return contactRepoService.addOrUpdateContact(c, ContactRepositoryService.CONTACT_TYPE_PERSON);
	}

	@RequestMapping(value = "/delete/{id}/{imgExtension}", method = RequestMethod.GET)
	void deleteContact(@PathVariable String id, @PathVariable String imgExtension) {
		contactRepoService.deleteContact(id, imgExtension);
	}

}
