package org.rvermorel.cbd.mvc;

import java.io.IOException;
import java.util.List;

import org.rvermorel.cbd.domain.Calendar;
import org.rvermorel.cbd.jpa.CalendarRepositoryService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping(value = "/calendars")
public class CalendarController {

	private static final Logger LOG = LoggerFactory.getLogger(CalendarController.class);

	@Autowired
	private CalendarRepositoryService calendarRepoService;

	@RequestMapping(method = RequestMethod.GET)
	List<Calendar>  displaySortedCalendars() {
		return calendarRepoService.findCalendarsOrderByCreationDate();
	}
	
	@RequestMapping(value="/add",method = RequestMethod.POST)	
	Calendar  addCalendar(@RequestBody final Calendar c) {
		return calendarRepoService.addOrUpdateCalendar(c);
	}
	
	@RequestMapping(value = "/add/file/{imgExtension}/{id}", method = { RequestMethod.POST })
	public ResponseEntity<String> addFile(@RequestParam("file") MultipartFile file, @PathVariable String imgExtension,
			@PathVariable String id) {
		String responseMessage = "";
		try {
			calendarRepoService.addCalendarFile(id, imgExtension, file.getBytes());			
		} catch (IOException e) {
			return new ResponseEntity<String>(e.getMessage(), null, HttpStatus.INTERNAL_SERVER_ERROR);
		}

		return new ResponseEntity<String>(responseMessage, null, HttpStatus.OK);
	}
	
	@RequestMapping(value="/update",method = RequestMethod.POST)	
	Calendar  updateCalendar(@RequestBody final Calendar c) {
		return calendarRepoService.addOrUpdateCalendar(c);
	}
	
	@RequestMapping(value="/delete/{id}",method = RequestMethod.GET)	
	void  deleteCalendar(@PathVariable String id) {
		calendarRepoService.deleteCalendar(id);
	}


}
