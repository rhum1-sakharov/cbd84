package org.rvermorel.cbd.jpa;

import java.io.IOException;
import java.util.List;

import javax.transaction.Transactional;

import org.rvermorel.cbd.datastore.IDatastore;
import org.rvermorel.cbd.domain.Partner;
import org.rvermorel.cbd.images.IImageEnhancement;
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
	
	@Autowired
	private IImageEnhancement ie;

	public List<Partner> findAllOrderByPosition() {
		return partnerRepo.findAllOrderByPosition();
	}

	public Partner addOrUpdatePartner(Partner p) {

		Partner partner = partnerRepo.save(p);
		partner.setImageUrl("images/get/partners/jpg/" + p.getId());
		return partnerRepo.saveAndFlush(partner);

	}
	
	public void addPartnerImage(String id, String imgExtension, String type, byte[] bytes, int size) {

		try {
			Long idLong = Long.valueOf(id);
			byte[] resized = ie.resizeImg(bytes, size, imgExtension);
			datastore.writeContent(resized, id, imgExtension, type);
			Partner partner = partnerRepo.findOne(idLong);
			partner.setImageUrl("images/get/partners/jpg/" + id);			
			partnerRepo.save(partner);
			
		} catch (IOException e) {
			LOG.error(e.getMessage(), e);
		}
	}

	@Transactional
	public void deletePartner(String id, String imgExtension) {
		try {
			datastore.deleteContent(id, imgExtension, IDatastore.TYPE_PARTNERS);
		} catch (IOException e) {
			LOG.error(e.getMessage(), e);
		}
			partnerRepo.delete(Long.valueOf(id));
		

	}

}
