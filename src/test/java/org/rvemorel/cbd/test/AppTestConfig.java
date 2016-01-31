package org.rvemorel.cbd.test;

import org.rvermorel.cbd.config.CbdConfig;
import org.rvermorel.cbd.datastore.DatastoreImpl;
import org.rvermorel.cbd.datastore.IDatastore;
import org.rvermorel.cbd.images.IImageEnhancement;
import org.rvermorel.cbd.images.ImageEnhancementImpl;
import org.rvermorel.cbd.jpa.ContactRepositoryService;
import org.rvermorel.cbd.reports.IReportService;
import org.rvermorel.cbd.reports.ReportServiceImpl;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class AppTestConfig {
	
	@Bean
	public IReportService getReportService() {
		return new ReportServiceImpl();
	}
	
	@Bean
	public ContactRepositoryService getContactRepositoryService() {
		return new ContactRepositoryService();
	}
	
	@Bean
	public IDatastore getDataStore() {
		return new DatastoreImpl();
	}
	

	@Bean
	public CbdConfig getCbdConfig() {
		return new CbdConfig();
	}
	
	@Bean
	public IImageEnhancement getIImageEnhancement() {
		return new ImageEnhancementImpl();
	}


}