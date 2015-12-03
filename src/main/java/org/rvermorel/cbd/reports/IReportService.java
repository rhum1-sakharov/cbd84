package org.rvermorel.cbd.reports;

import java.io.InputStream;

import net.sf.jasperreports.engine.JRDataSource;

public interface IReportService {

	public byte[] createPDFA1(InputStream inJasper, JRDataSource dataSource) ;
	
}
