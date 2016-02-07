package org.rvermorel.cbd.reports;

import java.io.ByteArrayOutputStream;
import java.io.InputStream;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import net.sf.jasperreports.engine.JRDataSource;
import net.sf.jasperreports.engine.JRException;
import net.sf.jasperreports.engine.JasperFillManager;
import net.sf.jasperreports.engine.JasperPrint;
import net.sf.jasperreports.engine.export.JRPdfExporter;
import net.sf.jasperreports.export.SimpleExporterInput;
import net.sf.jasperreports.export.SimpleOutputStreamExporterOutput;
import net.sf.jasperreports.export.SimplePdfExporterConfiguration;
import net.sf.jasperreports.export.type.PdfVersionEnum;
import net.sf.jasperreports.export.type.PdfaConformanceEnum;

@Service
public class ReportServiceImpl implements IReportService {

	private static final Logger LOG = LoggerFactory.getLogger(ReportServiceImpl.class);
	
	@Override
	public byte[] createPDFA1(InputStream inJasper, JRDataSource dataSource) {
		long start = System.currentTimeMillis();
		ByteArrayOutputStream baos = new ByteArrayOutputStream();
		try {
			JasperPrint jp = JasperFillManager.fillReport(inJasper, null, dataSource);
		
			jp.setProperty("net.sf.jasperreports.export.pdf.exclude.key.TransparentImage", null);
			jp.setProperty("net.sf.jasperreports.export.pdfa.icc.profile.path", "AdobeRGB1998.icc");

			JRPdfExporter exporter = new JRPdfExporter();
			exporter.setExporterInput(new SimpleExporterInput(jp));
			exporter.setExporterOutput(new SimpleOutputStreamExporterOutput(baos));
			SimplePdfExporterConfiguration configuration = new SimplePdfExporterConfiguration();
			// Include structure tags for PDF/A-1a compliance; unnecessary for
			// // PDF/A-1b
			configuration.setTagged(true);
			configuration.setPdfaConformance(PdfaConformanceEnum.PDFA_1A);
			configuration.setPdfVersion(PdfVersionEnum.VERSION_1_4);			
			exporter.setConfiguration(configuration);
			exporter.exportReport();
		
			exporter.exportReport();

			LOG.debug("PDF creation time : " + (System.currentTimeMillis() - start) + "ms");

		} catch (JRException e) {
			LOG.error("Unable to create report !", e);
		}

		return baos.toByteArray();
	}

}
