package org.rvermorel.cbd.reports;

import java.io.InputStream;
import java.util.Map;

import net.sf.jasperreports.engine.JRDataSource;

public interface IReportService {

	public byte[] createPDFA1(InputStream inJasper, Map<String, Object> params, JRDataSource dataSource);

}
