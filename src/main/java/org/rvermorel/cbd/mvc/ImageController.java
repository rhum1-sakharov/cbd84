package org.rvermorel.cbd.mvc;

import java.io.IOException;

import org.rvermorel.cbd.datastore.IDatastore;
import org.rvermorel.cbd.domain.CbdFiles;
import org.rvermorel.cbd.jpa.CbdFileRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/images")
public class ImageController {

	private static final Logger LOG = LoggerFactory.getLogger(ImageController.class);

	@Autowired
	private IDatastore idatastore;

	@Autowired
	private CbdFileRepository cbdFilesRepo;

	@RequestMapping(value = "/get/{type}/{imgExtension}/{id}", method = { RequestMethod.GET })
	public ResponseEntity<byte[]> getImage(@PathVariable String id, @PathVariable String imgExtension,
			@PathVariable String type) {
		// http://localhost:8080/cbd/images/feeds/jpg/3
		byte[] img = null;
		HttpHeaders headers = new HttpHeaders();
		String filename = type;
		if (type.equals(IDatastore.TYPE_CBDFILES)) {
			CbdFiles c = cbdFilesRepo.findOne(Long.valueOf(id));
			filename = c.getLabel();
		}
		try {
			img = idatastore.getContent(id, imgExtension, type);
			if (imgExtension.equals("jpg")) {
				headers.set("Content-Type", "image/jpeg");
			} else if (imgExtension.equals("pdf")) {
				headers.set("Content-Type", "application/pdf");

				headers.set("Content-Disposition", String.format("attachment; \"filename=%s.pdf\"", filename));
			}
			else if (imgExtension.equals("xls")) {
				headers.set("Content-Type", "application/vnd.ms-excel");
				headers.set("Content-Disposition", String.format("attachment; filename=\"%s.xls\"", filename));

			}

		} catch (IOException e) {
			LOG.error(e.getMessage());
		}

		return new ResponseEntity<byte[]>(img, headers, HttpStatus.OK);
	}

}
