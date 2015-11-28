package org.rvermorel.cbd.jpa;

import java.io.IOException;
import java.util.List;

import javax.transaction.Transactional;

import org.rvermorel.cbd.datastore.IDatastore;
import org.rvermorel.cbd.domain.Calendar;
import org.rvermorel.cbd.domain.Contact;
import org.rvermorel.cbd.images.IImageEnhancement;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CalendarRepositoryService {

	private static final Logger LOG = LoggerFactory.getLogger(CalendarRepositoryService.class);

	@Autowired
	private CalendarRepository calendarRepo;

	@Autowired
	private IDatastore datastore;

	public List<Calendar> findCalendarsOrderByCreationDate() {
		return calendarRepo.findCalendarsOrderByCreationDate();
	}

	public Calendar addOrUpdateCalendar(Calendar c) {		
	
		return calendarRepo.save(c);
	}

	public void addCalendarFile(String id, String imgExtension, byte[] bytes) {

		try {
			Long idLong = Long.valueOf(id);
			datastore.writeContent(bytes, id, imgExtension, IDatastore.TYPE_CALENDARS);
			Calendar c = calendarRepo.findOne(idLong);
			if(imgExtension.equalsIgnoreCase("xls")){
				c.setExcelUrl("images/get/calendars/xls/" + c.getId());
			}else if(imgExtension.equalsIgnoreCase("pdf")){
				c.setPdfUrl("images/get/calendars/pdf/" + c.getId());
			}
			
			calendarRepo.save(c);

		} catch (IOException e) {
			LOG.error(e.getMessage(), e);
		}
	}

	@Transactional
	public void deleteCalendar(String id) {
		try {
			datastore.deleteContent(id, "pdf", IDatastore.TYPE_CALENDARS);			
		} catch (IOException e) {
			LOG.error(e.getMessage());
		}try {
			
			datastore.deleteContent(id, "xls", IDatastore.TYPE_CALENDARS);
		} catch (IOException e) {
			LOG.error(e.getMessage());
		}
		calendarRepo.delete(Long.valueOf(id));

	}

}
