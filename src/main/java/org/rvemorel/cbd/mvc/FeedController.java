package org.rvemorel.cbd.mvc;

import java.util.List;

import org.rvemorel.cbd.domain.Feed;
import org.rvemorel.cbd.repo.FeedDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping(value = "/feeds")
public class FeedController {
	@Autowired
	private FeedDao feedDao;

	@RequestMapping(method = RequestMethod.GET, produces = { MediaType.APPLICATION_JSON_VALUE })
	public  @ResponseBody List<Feed> displaySortedFeeds() {

		
		
		return feedDao.findAllOrderedByCreationDate();
		
	}

}
