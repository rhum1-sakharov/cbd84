package org.rvermorel.cbd.mvc;

import java.util.List;

import org.rvermorel.cbd.domain.Contact;
import org.rvermorel.cbd.domain.Feed;
import org.rvermorel.cbd.jpa.ContactRepositoryService;
import org.rvermorel.cbd.jpa.FeedRepositoryService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/feeds")
public class FeedController {

	private static final Logger LOG = LoggerFactory.getLogger(FeedController.class);

	@Autowired
	private FeedRepositoryService feedRepoService;

	@RequestMapping(method = RequestMethod.GET)
	List<Feed>  displaySortedFeeds() {
		return feedRepoService.findAllActusOrderedByCreationDateAndTop();
	}
	
	@RequestMapping(value="/add",method = RequestMethod.POST)	
	Feed  addFeed(@RequestBody final Feed f) {
		return feedRepoService.addOrUpdateFeed(f, FeedRepositoryService.FEED_TYPE_ACTUS);
	}
	
	@RequestMapping(value="/update",method = RequestMethod.POST)	
	Feed  updateFeed(@RequestBody final Feed f) {
		return feedRepoService.addOrUpdateFeed(f, FeedRepositoryService.FEED_TYPE_ACTUS);
	}
	
	@RequestMapping(value="/delete/{id}/{imgExtension}",method = RequestMethod.GET)	
	void  deleteFeed(@PathVariable String id,@PathVariable String imgExtension) {
		feedRepoService.deleteFeed(id, imgExtension);
	}

}
