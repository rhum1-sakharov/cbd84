package org.rvermorel.cbd.jpa;

import java.io.IOException;
import java.util.List;

import javax.transaction.Transactional;

import org.rvermorel.cbd.datastore.IDatastore;
import org.rvermorel.cbd.domain.CbdFiles;
import org.rvermorel.cbd.domain.Contact;
import org.rvermorel.cbd.domain.Feed;
import org.rvermorel.cbd.images.IImageEnhancement;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CbdFileRepositoryService {

	private static final Logger LOG = LoggerFactory.getLogger(CbdFileRepositoryService.class);

	@Autowired
	private CbdFileRepository cbdFilesRepo;

	@Autowired
	private IDatastore datastore;

	public List<CbdFiles> findCbdFilesOrderByOrderAndCreationDate() {
		return cbdFilesRepo.findCbdFilesOrderByOrderAndCreationDate();
	}

	public CbdFiles addOrUpdateCbdFile(CbdFiles c) {		
		
		return cbdFilesRepo.save(c);
	}

	public void addCbdFileToDatastore(String id, String imgExtension, byte[] bytes) {

		try {
			Long idLong = Long.valueOf(id);			
			CbdFiles c = cbdFilesRepo.findOne(idLong);
			c.setUrl("images/get/cbdfiles/pdf/" + id);
			datastore.writeContent(bytes, id, imgExtension, IDatastore.TYPE_CBDFILES);	
			cbdFilesRepo.save(c);

		} catch (IOException e) {
			LOG.error(e.getMessage(), e);
		}
	}

	@Transactional
	public void deleteCbdFile(String id) {
		try {
			datastore.deleteContent(id, "pdf", IDatastore.TYPE_CBDFILES);			
		} catch (IOException e) {
			LOG.warn(e.getMessage());
		}try {
			
			datastore.deleteContent(id, "xls", IDatastore.TYPE_CBDFILES);
		} catch (IOException e) {
			LOG.warn(e.getMessage());
		}try {
			
			datastore.deleteContent(id, "jpg", IDatastore.TYPE_CBDFILES);
		} catch (IOException e) {
			LOG.warn(e.getMessage());
		}
		cbdFilesRepo.delete(Long.valueOf(id));

	}

}
