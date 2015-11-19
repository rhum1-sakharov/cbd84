package org.rvermorel.cbd.datastore;

import java.io.IOException;

public interface IDatastore {
	
	public static final String TYPE_FEEDS = "feeds";

	public byte[] getFeedContent( String id, String extension) throws IOException;
	public void writeFeedContent(byte[] bytes,  String id, String extension) throws IOException ;
	public String getFeedPath(  String id, String extension);

}
