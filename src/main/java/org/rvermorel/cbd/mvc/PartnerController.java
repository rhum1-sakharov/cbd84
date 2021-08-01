package org.rvermorel.cbd.mvc;

import org.rvermorel.cbd.datastore.IDatastore;
import org.rvermorel.cbd.domain.Partner;
import org.rvermorel.cbd.jpa.PartnerRepositoryService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping(value = "/partners")
public class PartnerController {

	private static final Logger LOG = LoggerFactory.getLogger(PartnerController.class);

	@Autowired
	private PartnerRepositoryService partnerRepoService;

	@RequestMapping(method = RequestMethod.GET)
	List<Partner> displaySortedPartners() {
		return partnerRepoService.findAllOrderByPosition();
	}

	@RequestMapping(value = "/add", method = RequestMethod.POST)
	Partner addPartner(@RequestBody final Partner p) {
		return partnerRepoService.addOrUpdatePartner(p);
	}

	@RequestMapping(value = "/add/image/{imgExtension}/{size}/{id}", method = { RequestMethod.POST })
	public ResponseEntity<String> addImage(@RequestParam("file") MultipartFile file, @PathVariable String imgExtension,
			@PathVariable String id, @PathVariable int size) {
		String responseMessage = "";
		try {
			partnerRepoService.addPartnerImage(id, imgExtension, IDatastore.TYPE_PARTNERS, file.getBytes(), size);
		} catch (IOException e) {
			return new ResponseEntity<String>(e.getMessage(), null, HttpStatus.OK);
		}

		return new ResponseEntity<String>(responseMessage, null, HttpStatus.OK);
	}

	@RequestMapping(value = "/update", method = RequestMethod.POST)
	Partner updatePartner(@RequestBody final Partner p) {
		return partnerRepoService.addOrUpdatePartner(p);
	}

	@RequestMapping(value = "/delete/{id}/{imgExtension}", method = RequestMethod.GET)
	void deletePartner(@PathVariable String id, @PathVariable String imgExtension) {
		partnerRepoService.deletePartner(id, imgExtension);
	}

}
