package org.rvermorel.cbd.datastore;

import java.io.IOException;

public interface IDatastore {

	public byte[] getFeedContent(String type, String id, String extension) throws IOException;

}
