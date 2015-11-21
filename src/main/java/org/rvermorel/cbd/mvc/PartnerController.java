package org.rvermorel.cbd.mvc;

import java.util.List;

import org.rvermorel.cbd.domain.Feed;
import org.rvermorel.cbd.domain.Partner;
import org.rvermorel.cbd.images.IImageEnhancement;
import org.rvermorel.cbd.jpa.PartnerRepositoryService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/partners")
public class PartnerController {

	private static final Logger LOG = LoggerFactory.getLogger(PartnerController.class);

	@Autowired
	private PartnerRepositoryService partnerRepoService;

	@RequestMapping(method = RequestMethod.GET)
	List<Partner>  displaySortedPartners() {
		return partnerRepoService.findAllOrderByPosition();
	}
	
	@RequestMapping(value="/add",method = RequestMethod.POST)	
	void  addPartner(@RequestBody final Partner partner) {
		
	}
	
	@RequestMapping(value="/delete/{id}",method = RequestMethod.GET)	
	void  deletePartner(@PathVariable String id) {
		
	}


}
