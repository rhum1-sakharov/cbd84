package org.rvermorel.cbd.jpa;

import java.util.List;

import org.rvermorel.cbd.domain.Feed;

public interface FeedRepository extends BaseRepository<Feed, Long> {

	
	public List<Feed> findAllOrderedByCreationDate();
	

}
