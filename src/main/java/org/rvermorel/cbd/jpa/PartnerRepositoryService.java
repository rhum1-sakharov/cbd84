package org.rvermorel.cbd.jpa;

import java.io.IOException;
import java.util.List;

import javax.transaction.Transactional;

import org.rvermorel.cbd.datastore.IDatastore;
import org.rvermorel.cbd.domain.Partner;
import org.rvermorel.cbd.mvc.ImageController;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PartnerRepositoryService {

	private static final Logger LOG = LoggerFactory.getLogger(PartnerRepositoryService.class);

	@Autowired
	private PartnerRepository partnerRepo;

	@Autowired
	private IDatastore datastore;

	public List<Partner> findAllOrderByPosition() {
		return partnerRepo.findAllOrderByPosition();
	}

	public Partner addOrUpdatePartner(Partner p) {

		Partner partner = partnerRepo.save(p);
		partner.setImageUrl("images/get/partners/jpg/" + p.getId());
		return partnerRepo.saveAndFlush(partner);

	}

	@Transactional
	public void deletePartner(String id, String imgExtension) {
		try {
			datastore.deleteContent(id, imgExtension, "partners");
			partnerRepo.delete(Long.valueOf(id));
		} catch (IOException e) {
			LOG.error(e.getMessage(), e);
		}

	}

}
