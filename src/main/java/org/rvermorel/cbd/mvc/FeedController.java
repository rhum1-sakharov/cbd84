package org.rvermorel.cbd.mvc;

import java.io.IOException;
import java.util.List;

import org.rvermorel.cbd.datastore.IDatastore;
import org.rvermorel.cbd.domain.Feed;
import org.rvermorel.cbd.images.IImageEnhancement;
import org.rvermorel.cbd.jpa.FeedRepository;
import org.rvermorel.cbd.repo.FeedDao;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping(value = "/feeds")
public class FeedController {

	private static final Logger LOG = LoggerFactory.getLogger(FeedController.class);

	@Autowired
	private IDatastore idatastore;

	@Autowired
	private IImageEnhancement iImageEnhancement;

	@Autowired
	private FeedDao feedDao;

	@Autowired
	private FeedRepository feedRepo;

	@RequestMapping(method = RequestMethod.GET)
	List<Feed>  displaySortedFeeds() {

		return feedRepo.findAllOrderedByCreationDateAndTop();

	}

	@RequestMapping(value = "/{feed_id}/image/{feed_extension}", method = { RequestMethod.GET })
	@ResponseBody
	public ResponseEntity<byte[]> image(@PathVariable String feed_id, @PathVariable String feed_extension) {
		// http://localhost:8080/cbd/feeds/3/1445961600000/image/jpg
		byte[] img = null;
		HttpHeaders headers = new HttpHeaders();

		try {
			img = idatastore.getContent(feed_id, feed_extension, IDatastore.TYPE_FEEDS);
			if (feed_extension.equals("jpg")) {
				headers.set("Content-Type", "image/jpeg");
			}

		} catch (IOException e) {
			LOG.error(e.getMessage(), e);
		}
		// byte[] img = null;
		return new ResponseEntity<byte[]>(img, headers, HttpStatus.OK);
	}

	@RequestMapping(value = "/update/image/{id}", method = RequestMethod.POST)
	@ResponseBody
	public ResponseEntity<String> updateImage(@RequestParam("file") MultipartFile file, @PathVariable String id) {
		String responseMessage = "";
		if (!file.isEmpty()) {
			try {
				byte[] bytes = file.getBytes();

				byte[] resized = iImageEnhancement.resizeImg(bytes, 256, "jpg");
				idatastore.writeContent(resized, id, "jpg", IDatastore.TYPE_FEEDS);
				Feed feed = feedDao.findById(Long.valueOf(id));
				feed.setImageUrl("feeds/" + id + "/image/jpg");
				feedDao.update(feed);

			} catch (IOException e) {
				LOG.error(e.getMessage(), e);
				return new ResponseEntity<String>(e.getMessage(), null, HttpStatus.INTERNAL_SERVER_ERROR);
			}
		}

		return new ResponseEntity<String>(responseMessage, null, HttpStatus.OK);
	}

	@RequestMapping(value = "/update", method = RequestMethod.POST)
	@ResponseBody
	public ResponseEntity<String> update(@RequestBody final Feed feed) {

		feedDao.update(feed);

		return new ResponseEntity<String>("feed updated", null, HttpStatus.OK);
	}

	@RequestMapping(value = "/add", method = RequestMethod.POST)
	@ResponseBody
	public ResponseEntity<Feed> add(@RequestBody final Feed feed) {

		feedDao.register(feed);
		feed.setImageUrl("feeds/" + feed.getId() + "/image/jpg");
		feedDao.update(feed);

		return new ResponseEntity<Feed>(feed, null, HttpStatus.OK);
	}

	@RequestMapping(value = "/delete/image/{id}", method = RequestMethod.GET)
	@ResponseBody
	public ResponseEntity<String> deleteImage(@PathVariable String id) {
		String responseMessage = "";
		try {
			Feed feed = feedDao.findById(Long.valueOf(id));
			feed.setImageUrl(null);
			feedDao.update(feed);
			idatastore.deleteContent(id, "jpg", IDatastore.TYPE_FEEDS);
		} catch (IOException e) {
			LOG.error(e.getMessage(), e);
			return new ResponseEntity<String>(e.getMessage(), null, HttpStatus.INTERNAL_SERVER_ERROR);
		}

		return new ResponseEntity<String>(responseMessage, null, HttpStatus.OK);
	}

	@ExceptionHandler(org.hibernate.PersistentObjectException.class)
	public ResponseEntity<String> handleSizeLimitExceededException(org.hibernate.PersistentObjectException ex) {

		return new ResponseEntity<String>(ex.getMessage(), null, HttpStatus.BANDWIDTH_LIMIT_EXCEEDED);
	}

}
