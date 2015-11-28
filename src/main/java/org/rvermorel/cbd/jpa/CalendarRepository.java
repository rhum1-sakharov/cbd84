package org.rvermorel.cbd.jpa;

import java.util.List;

import org.rvermorel.cbd.domain.Calendar;
import org.springframework.data.jpa.repository.Query;

public interface CalendarRepository extends BaseRepository<Calendar, Long> {

	@Query(value="SELECT * FROM calendars c  ORDER BY c.creationDate desc", nativeQuery=true)
	public List<Calendar> findCalendarsOrderByCreationDate();


}
