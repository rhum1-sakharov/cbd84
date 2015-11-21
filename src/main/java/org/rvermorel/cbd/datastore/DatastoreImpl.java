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

	public  String getPath( String id, String extension, String type) {
		String datastorePath = cbdConfig.getDatastorePath();
		String rootPath = FilenameUtils.concat(datastorePath, type);
		return FilenameUtils.concat(rootPath, id + "." + extension);
	}

	@Override
	public byte[] getContent( String id, String extension, String type) throws IOException {

		String path = getPath(id, extension, type);
		File file = new File(path);
		return FileUtils.readFileToByteArray(file);
	}

	@Override
	public void writeContent(byte[] bytes,  String id, String extension, String type) throws IOException {
		String path = getPath(id, extension, type);
		File file = new File(path);
		FileUtils.writeByteArrayToFile(file, bytes);

	}

	@Override
	public void deleteContent(String id, String extension, String type) throws IOException {
		String path = getPath(id, extension, type);
		File file = new File(path);
		FileUtils.forceDelete(file);
	}

}
