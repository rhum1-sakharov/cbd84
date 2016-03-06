package org.rvermorel.cbd.mvc;

import java.io.ByteArrayInputStream;
import java.io.IOException;
import java.util.List;

import org.rvermorel.cbd.datastore.IDatastore;
import org.rvermorel.cbd.domain.xml.Joueur;
import org.rvermorel.cbd.domain.xml.Resultat;
import org.rvermorel.tools.XmlUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
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
	List<Joueur> displaySortedPartners() throws IOException  {		
		
		ByteArrayInputStream bais = new ByteArrayInputStream(datastore.getContent("ranking", "xml", IDatastore.TYPE_RANKING));	
		Resultat res= XmlUtils.unmarshall(Resultat.class, bais);		
		return res.getJoueur();
	}
	
	@RequestMapping(value = "/add/xml", method =  RequestMethod.POST )
	public ResponseEntity<String> addXml(@RequestParam("file") MultipartFile file,
			@PathVariable String id) {
		String responseMessage = "";
		try {
			datastore.writeContent(file.getBytes(), "ranking", "xml", IDatastore.TYPE_RANKING);			
		} catch (IOException e) {
			return new ResponseEntity<String>(e.getMessage(), null, HttpStatus.INTERNAL_SERVER_ERROR);
		}

		return new ResponseEntity<String>(responseMessage, null, HttpStatus.OK);
	}

	
	

}
