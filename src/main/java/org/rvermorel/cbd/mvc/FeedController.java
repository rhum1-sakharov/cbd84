package org.rvermorel.cbd.mvc;

import java.io.IOException;
import java.util.List;

import org.rvermorel.cbd.datastore.IDatastore;
import org.rvermorel.cbd.domain.Feed;
import org.rvermorel.cbd.repo.FeedDao;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping(value = "/feeds")

public class FeedController {

	private static final Logger LOG = LoggerFactory.getLogger(FeedController.class);

	@Autowired
	private IDatastore idatastore;

	@Autowired
	private FeedDao feedDao;

	@RequestMapping(method = RequestMethod.GET, produces = { MediaType.APPLICATION_JSON_VALUE })
	public @ResponseBody List<Feed> displaySortedFeeds() {

		return feedDao.findAllOrderedByCreationDate();

	}

	@RequestMapping(value = "/{feed_id}/image/{feed_extension}", method = { RequestMethod.GET })
	@ResponseBody
	public ResponseEntity<byte[]> image(@PathVariable String feed_id, 
			@PathVariable String feed_extension) {
		// http://localhost:8080/cbd/feeds/3/1445961600000/image/jpg
		byte[] img = null;
		HttpHeaders headers = new HttpHeaders();

		try {
			img = idatastore.getFeedContent("feeds", feed_id, feed_extension);
			if (feed_extension.equals("jpg")) {
				headers.set("Content-Type", "image/jpeg");
			}
			
		} catch (IOException e) {
			LOG.error(e.getMessage(), e);
		}
		// byte[] img = null;
		return new ResponseEntity<byte[]>(img, headers, HttpStatus.OK);
	}

}
