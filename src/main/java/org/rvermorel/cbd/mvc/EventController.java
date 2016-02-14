package org.rvermorel.cbd.mvc;

import java.util.List;

import org.rvermorel.cbd.domain.Event;
import org.rvermorel.cbd.jpa.EventRepositoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/events")
public class EventController {

	
	@Autowired
	private EventRepositoryService eventRepoService;

	@RequestMapping(method = RequestMethod.GET)
	List<Event> displaySortedEvents() {
		return eventRepoService.findEventsOrderByCreationDate();
	}

	@RequestMapping(value = "/add", method = RequestMethod.POST)
	Event addEvent(@RequestBody final Event e) {
		return eventRepoService.addOrUpdateEvent(e);
	}
	
	@RequestMapping(value = "/update", method = RequestMethod.POST)
	Event updatepdatEvent(@RequestBody final Event e) {
		return eventRepoService.addOrUpdateEvent(e);
	}


	
	@RequestMapping(value = "/delete/{id}", method = RequestMethod.GET)
	void deleteEvent(@PathVariable String id) {
		eventRepoService.deleteEvent(id);
	}

}
