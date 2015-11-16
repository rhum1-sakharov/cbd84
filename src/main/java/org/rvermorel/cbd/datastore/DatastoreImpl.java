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

	@Override
	public byte[] getFeedContent(String type,  String id, String extension) throws IOException {
		String datastorePath = cbdConfig.getDatastorePath();
		String rootPath = FilenameUtils.concat(datastorePath, type);
		String path = FilenameUtils.concat(rootPath, id + "." + extension);
		File file = new File(path);
		return FileUtils.readFileToByteArray(file);
	}

}
