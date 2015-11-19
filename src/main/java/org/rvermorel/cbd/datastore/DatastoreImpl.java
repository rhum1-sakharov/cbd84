package org.rvermorel.cbd.datastore;

import java.io.File;
import java.io.IOException;

import org.apache.commons.io.FileUtils;
import org.apache.commons.io.FilenameUtils;
import org.rvermorel.cbd.config.CbdConfig;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DatastoreImpl implements IDatastore {

	@Autowired
	private CbdConfig cbdConfig;

	public  String getFeedPath( String id, String extension) {
		String datastorePath = cbdConfig.getDatastorePath();
		String rootPath = FilenameUtils.concat(datastorePath, IDatastore.TYPE_FEEDS);
		return FilenameUtils.concat(rootPath, id + "." + extension);
	}

	@Override
	public byte[] getFeedContent( String id, String extension) throws IOException {

		String path = getFeedPath(id, extension);
		File file = new File(path);
		return FileUtils.readFileToByteArray(file);
	}

	@Override
	public void writeFeedContent(byte[] bytes,  String id, String extension) throws IOException {
		String path = getFeedPath( id, extension);
		File file = new File(path);
		FileUtils.writeByteArrayToFile(file, bytes);

	}

	@Override
	public void deleteFeedContent(String id, String extension) throws IOException {
		String path = getFeedPath( id, extension);
		File file = new File(path);
		FileUtils.forceDelete(file);
	}

}
