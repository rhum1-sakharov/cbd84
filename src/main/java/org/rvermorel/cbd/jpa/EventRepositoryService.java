package org.rvermorel.cbd.jpa;

import java.util.List;

import javax.transaction.Transactional;

import org.rvermorel.cbd.domain.Event;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class EventRepositoryService {

	@Autowired
	private EventRepository eventRepo;	

	public List<Event> findEventsOrderByCreationDate() {
		return eventRepo.findEventsOrderByCreationDate();
	}

	public Event addOrUpdateEvent(Event e) {		
	
		return eventRepo.save(e);
	}
	
	@Transactional
	public void deleteEvent(String id) {	
		eventRepo.delete(Long.valueOf(id));
	}

}
