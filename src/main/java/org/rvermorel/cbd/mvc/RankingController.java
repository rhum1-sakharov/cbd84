package org.rvermorel.cbd.mvc;

import java.io.ByteArrayInputStream;
import java.io.File;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.List;

import org.apache.commons.io.FileUtils;
import org.rvermorel.cbd.datastore.IDatastore;
import org.rvermorel.cbd.domain.xml.Joueur;
import org.rvermorel.cbd.domain.xml.Resultat;
import org.rvermorel.tools.XmlUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping(value = "/rankings")
public class RankingController {

	private static final Logger LOG = LoggerFactory.getLogger(RankingController.class);

	@Autowired
	private IDatastore datastore;

	@RequestMapping(method = RequestMethod.GET)
	List<Joueur> displaySortedPartners() throws IOException {

		ByteArrayInputStream bais = new ByteArrayInputStream(
				datastore.getContent("ranking", "xml", IDatastore.TYPE_RANKING));
		Resultat res = XmlUtils.unmarshall(Resultat.class, bais);

		return res.getJoueur();
	}

	@RequestMapping(value = "/date", method = RequestMethod.GET)
	String getDate() throws IOException {

		File f = new File(datastore.getPath("ranking", "xml", IDatastore.TYPE_RANKING));
		SimpleDateFormat sdf = new SimpleDateFormat("dd/MM/yyyy");

		return sdf.format(f.lastModified());
	}

	@RequestMapping(value = "/add/xml", method = RequestMethod.POST)
	public ResponseEntity<String> addXml(@RequestParam("file") MultipartFile file) {
		String responseMessage = "";
		try {
			datastore.writeContent(file.getBytes(), "ranking", "xml", IDatastore.TYPE_RANKING);
			String str = FileUtils.readFileToString(new File(datastore.getPath("ranking", "xml", IDatastore.TYPE_RANKING)), "ISO-8859-1");
			str =  str.replace("<!DOCTYPE resultat PUBLIC \"Bouly\" \"http://www.ffsb.asso.fr/public/xml-dtd/export_joueur.dtd\">", "");
			datastore.writeContent(str.getBytes("ISO-8859-1"), "ranking", "xml", IDatastore.TYPE_RANKING);
		} catch (IOException e) {
			return new ResponseEntity<String>(e.getMessage(), null, HttpStatus.INTERNAL_SERVER_ERROR);
		}

		return new ResponseEntity<String>(responseMessage, null, HttpStatus.OK);
	}

}
