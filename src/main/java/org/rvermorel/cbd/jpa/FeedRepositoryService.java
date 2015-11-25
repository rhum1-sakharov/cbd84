package org.rvermorel.cbd.jpa;

import java.io.IOException;
import java.util.List;

import javax.transaction.Transactional;

import org.rvermorel.cbd.datastore.IDatastore;
import org.rvermorel.cbd.domain.Feed;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class FeedRepositoryService {

	private static final Logger LOG = LoggerFactory.getLogger(FeedRepositoryService.class);

	public static final String FEED_TYPE_ACTUS = "actus";
	public static final String FEED_TYPE_RESULTS = "results";
	
	@Autowired
	private FeedRepository feedRepo;

	@Autowired
	private IDatastore datastore;

	public List<Feed> findAllActusOrderedByCreationDateAndTop() {
		return feedRepo.findAllActusOrderedByCreationDateAndTop();
	}
	
	public List<Feed> findAllResultsOrderedByCreationDateAndTop() {
		return feedRepo.findAllResultsOrderedByCreationDateAndTop();
	}

	public Feed addOrUpdateFeed(Feed f, String type) {

		Feed feed = feedRepo.save(f);
		feed.setType(type);
		feed.setImageUrl("images/get/contacts/jpg/" + f.getId());
		return feedRepo.save(f);

	}

	@Transactional
	public void deleteFeed(String id, String imgExtension) {
		try {
			datastore.deleteContent(id, imgExtension, IDatastore.TYPE_FEEDS);
			feedRepo.delete(Long.valueOf(id));	
		} catch (IOException e) {
			LOG.error(e.getMessage());
		}
	}

}
