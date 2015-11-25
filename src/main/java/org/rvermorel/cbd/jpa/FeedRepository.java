package org.rvermorel.cbd.jpa;

import java.util.List;

import org.rvermorel.cbd.domain.Feed;
import org.springframework.data.jpa.repository.Query;

public interface FeedRepository extends BaseRepository<Feed, Long> {

	@Query(value="SELECT * FROM feeds f WHERE f.type='actus' ORDER BY f.top desc, f.creationDate desc", nativeQuery=true)
	public List<Feed> findAllActusOrderedByCreationDateAndTop();
	
	@Query(value="SELECT * FROM feeds f WHERE f.type='results' ORDER BY f.top desc, f.creationDate desc", nativeQuery=true)
	public List<Feed> findAllResultsOrderedByCreationDateAndTop();
	

}
