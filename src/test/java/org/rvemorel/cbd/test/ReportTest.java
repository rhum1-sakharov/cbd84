package org.rvemorel.cbd.test;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.List;

import org.apache.commons.io.IOUtils;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.rvermorel.cbd.domain.Contact;
import org.rvermorel.cbd.jpa.ContactRepositoryService;
import org.rvermorel.cbd.jpa.PersistenceContext;
import org.rvermorel.cbd.reports.IReportService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.support.AnnotationConfigContextLoader;

import junit.framework.TestCase;
import net.sf.jasperreports.engine.data.JRBeanCollectionDataSource;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(classes = { AppTestConfig.class,
		PersistenceContext.class }, loader = AnnotationConfigContextLoader.class)
public class ReportTest {

	@Autowired
	private IReportService reportService;
	@Autowired
	private ContactRepositoryService contactRepoService;

	private static final String ASSOS = "./src/main/resources/reports/assos.jasper";

	@Test
	public void testReportPartners() throws FileNotFoundException, IOException {
		List<Contact> contacts = contactRepoService.findAssoMembersOrderByPosition();
		JRBeanCollectionDataSource ds = new JRBeanCollectionDataSource(contacts);
		InputStream in = new FileInputStream(new File(ASSOS));
		byte[] bytes = reportService.createPDFA1(in, null,ds);
		File tmpPdf = new File("/tmp/partners.pdf");
		IOUtils.write(bytes, new FileOutputStream(tmpPdf));

		TestCase.assertTrue(tmpPdf.length() > 0);
	}
}
