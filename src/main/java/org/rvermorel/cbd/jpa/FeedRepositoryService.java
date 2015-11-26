package org.rvermorel.cbd.jpa;

import java.io.IOException;
import java.util.List;

import javax.transaction.Transactional;

import org.rvermorel.cbd.datastore.IDatastore;
import org.rvermorel.cbd.domain.Feed;
import org.rvermorel.cbd.images.IImageEnhancement;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public class FeedRepositoryService {

	private static final Logger LOG = LoggerFactory.getLogger(FeedRepositoryService.class);

	public static final String FEED_TYPE_ACTUS = "actus";
	public static final String FEED_TYPE_RESULTS = "results";

	@Autowired
	private FeedRepository feedRepo;

	@Autowired
	private IImageEnhancement ie;

	@Autowired
	private IDatastore datastore;

	public List<Feed> findAllActusOrderedByCreationDateAndTop() {
		return feedRepo.findAllActusOrderedByCreationDateAndTop();
	}

	public List<Feed> findAllResultsOrderedByCreationDateAndTop() {
		return feedRepo.findAllResultsOrderedByCreationDateAndTop();
	}

	public void addFeedImage(String id, String imgExtension, String type, byte[] bytes, int size) {

		try {
			Long idLong = Long.valueOf(id);
			byte[] resized = ie.resizeImg(bytes, size, imgExtension);
			datastore.writeContent(resized, id, imgExtension, type);
			Feed feed = feedRepo.findOne(idLong);
			feed.setImageUrl("images/get/feeds/jpg/" + id);
			feed.setImageExtension(imgExtension);
			feedRepo.save(feed);
		} catch (IOException e) {
			LOG.error(e.getMessage(), e);
		}
	}

	public Feed addOrUpdateFeed(Feed f, String type) {
		f.setType(type);
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
