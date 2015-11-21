package org.rvermorel.cbd.jpa;

import java.util.List;

import org.rvermorel.cbd.domain.Partner;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PartnerRepositoryService {

	@Autowired
	private PartnerRepository partnerRepo;
	
	public List<Partner> findAllOrderByPosition(){
		return partnerRepo.findAllOrderByPosition();
	}
}
