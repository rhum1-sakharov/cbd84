package org.rvermorel.cbd.datastore;

import java.io.IOException;

public interface IDatastore {
	
	public static final String TYPE_FEEDS = "feeds";
	public static final String TYPE_PARTNERS = "partners";
	public static final String TYPE_CONTACTS = "contacts";
	public static final String TYPE_CBDFILES = "cbdfiles";
	public static final String TYPE_RANKING = "ranking";

	public byte[] getContent( String id, String extension, String type) throws IOException;
	public void deleteContent( String id, String extension, String type) throws IOException;
	public void writeContent(byte[] bytes,  String id, String extension, String type) throws IOException ;
	
	public String getPath(  String id, String extension, String type);

}
