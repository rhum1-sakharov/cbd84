package org.rvermorel.cbd.mvc;

import java.io.IOException;
import java.util.List;

import org.rvermorel.cbd.datastore.IDatastore;
import org.rvermorel.cbd.domain.Feed;
import org.rvermorel.cbd.domain.Partner;
import org.rvermorel.cbd.images.IImageEnhancement;
import org.rvermorel.cbd.jpa.PartnerRepositoryService;
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
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping(value = "/images")
public class ImageController {

	private static final Logger LOG = LoggerFactory.getLogger(ImageController.class);

	@Autowired
	private IDatastore idatastore;
	@Autowired
	private IImageEnhancement iImageEnhancement;

	@RequestMapping(value = "/get/{type}/{imgExtension}/{id}", method = { RequestMethod.GET })
	public ResponseEntity<byte[]> getImage(@PathVariable String id, @PathVariable String imgExtension,
			@PathVariable String type) {
		// http://localhost:8080/cbd/images/feeds/jpg/3
		byte[] img = null;
		HttpHeaders headers = new HttpHeaders();

		try {
			img = idatastore.getContent(id, imgExtension, type);
			if (imgExtension.equals("jpg")) {
				headers.set("Content-Type", "image/jpeg");
			}

		} catch (IOException e) {
			LOG.error(e.getMessage(), e);
		}

		return new ResponseEntity<byte[]>(img, headers, HttpStatus.OK);
	}

	@RequestMapping(value = "/add/{type}/{imgExtension}/{size}/{id}", method = { RequestMethod.POST })
	public ResponseEntity<String> addImage(@RequestParam("file") MultipartFile file, @PathVariable String imgExtension,
			@PathVariable String id, @PathVariable String type, @PathVariable int size) {
		String responseMessage = "";
		if (!file.isEmpty()) {
			try {

				byte[] resized = iImageEnhancement.resizeImg(file.getBytes(), size, imgExtension);
				idatastore.writeContent(resized, id, imgExtension, type);

			} catch (IOException e) {
				LOG.error(e.getMessage(), e);
				return new ResponseEntity<String>(e.getMessage(), null, HttpStatus.INTERNAL_SERVER_ERROR);
			}
		}

		return new ResponseEntity<String>(responseMessage, null, HttpStatus.OK);
	}

	

}
