package org.rvermorel.cbd.mvc;

import java.io.IOException;
import java.util.List;

import org.rvermorel.cbd.datastore.IDatastore;
import org.rvermorel.cbd.domain.Contact;
import org.rvermorel.cbd.domain.Feed;
import org.rvermorel.cbd.jpa.ContactRepositoryService;
import org.rvermorel.cbd.jpa.FeedRepositoryService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping(value = "/feeds")
public class FeedController {

	private static final Logger LOG = LoggerFactory.getLogger(FeedController.class);

	@Autowired
	private FeedRepositoryService feedRepoService;

	@RequestMapping(method = RequestMethod.GET)
	List<Feed> displaySortedFeeds() {
		return feedRepoService.findAllActusOrderedByCreationDateAndTop();
	}

	@RequestMapping(value = "/add", method = RequestMethod.POST)
	Feed addFeed(@RequestBody final Feed f) {
		return feedRepoService.addOrUpdateFeed(f, FeedRepositoryService.FEED_TYPE_ACTUS);
	}

	// /add/image/jpg/256/27
	@RequestMapping(value = "/add/image/{imgExtension}/{size}/{id}", method =  RequestMethod.POST )
	void addImage(@RequestParam("file") MultipartFile file, @PathVariable String imgExtension, @PathVariable String id,
			 @PathVariable int size) {

		try {
			feedRepoService.addFeedImage(id, imgExtension, IDatastore.TYPE_FEEDS, file.getBytes(), size);
		} catch (IOException e) {
			LOG.error(e.getMessage());
		}

	}

	@RequestMapping(value = "/update", method = RequestMethod.POST)
	Feed updateFeed(@RequestBody final Feed f) {
		return feedRepoService.addOrUpdateFeed(f, FeedRepositoryService.FEED_TYPE_ACTUS);
	}

	@RequestMapping(value = "/delete/{id}/{imgExtension}", method = RequestMethod.GET)
	void deleteFeed(@PathVariable String id, @PathVariable String imgExtension) {
		feedRepoService.deleteFeed(id, imgExtension);
	}

}
