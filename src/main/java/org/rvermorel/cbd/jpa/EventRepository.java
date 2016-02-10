package org.rvermorel.cbd.jpa;

import java.util.List;

import org.rvermorel.cbd.domain.Event;
import org.springframework.data.jpa.repository.Query;

public interface EventRepository extends BaseRepository<Event, Long> {

	@Query(value="SELECT * FROM events e  ORDER BY e.creationDate desc", nativeQuery=true)
	public List<Event> findEventsOrderByCreationDate();


}
