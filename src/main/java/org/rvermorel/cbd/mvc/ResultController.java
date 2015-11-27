package org.rvermorel.cbd.mvc;

import java.io.IOException;
import java.util.List;

import org.rvermorel.cbd.datastore.IDatastore;
import org.rvermorel.cbd.domain.Feed;
import org.rvermorel.cbd.jpa.FeedRepositoryService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping(value = "/results")
public class ResultController {

	private static final Logger LOG = LoggerFactory.getLogger(ResultController.class);

	@Autowired
	private FeedRepositoryService feedRepoService;

	@RequestMapping(method = RequestMethod.GET)
	List<Feed> displaySortedFeedsResult() {
		return feedRepoService.findAllResultsOrderedByCreationDateAndTop();
	}

	

	@RequestMapping(value = "/add", method = RequestMethod.POST)
	Feed addFeedResults(@RequestBody final Feed f) {
		return feedRepoService.addOrUpdateFeed(f, FeedRepositoryService.FEED_TYPE_RESULTS);
	}

	// /add/image/jpg/256/27
	@RequestMapping(value = "/add/image/{imgExtension}/{size}/{id}", method = RequestMethod.POST)
	void addImage(@RequestParam("file") MultipartFile file, @PathVariable String imgExtension, @PathVariable String id,
			@PathVariable int size) {

		try {
			feedRepoService.addFeedImage(id, imgExtension, IDatastore.TYPE_FEEDS, file.getBytes(), size);
		} catch (IOException e) {
			LOG.error(e.getMessage());
		}

	}

	// /delete/image/jpg/27
	@RequestMapping(value = "/delete/image/{imgExtension}/{id}", method = RequestMethod.GET)
	void deleteImage(@PathVariable String imgExtension, @PathVariable String id) {

		feedRepoService.deleteFeedImage(id, imgExtension, IDatastore.TYPE_FEEDS);
	}

	

	@RequestMapping(value = "/delete/{id}/{imgExtension}", method = RequestMethod.GET)
	void deleteFeedResult(@PathVariable String id, @PathVariable String imgExtension) {
		feedRepoService.deleteFeed(id, imgExtension);
	}

}
