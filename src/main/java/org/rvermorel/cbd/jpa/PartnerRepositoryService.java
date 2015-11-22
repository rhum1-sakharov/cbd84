package org.rvermorel.cbd.jpa;

import java.util.List;

import org.rvermorel.cbd.domain.Partner;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PartnerRepositoryService {

	@Autowired
	private PartnerRepository partnerRepo;

	public List<Partner> findAllOrderByPosition() {
		return partnerRepo.findAllOrderByPosition();
	}

	public Partner addOrUpdatePartner(Partner p) {

		Partner partner = partnerRepo.save(p);
		partner.setImageUrl("images/get/partners/jpg/" + p.getId());
		return partnerRepo.saveAndFlush(partner);

	}

	
}
