package org.rvemorel.cbd.test;

import java.sql.Timestamp;
import java.util.Date;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.rvemorel.cbd.domain.Feed;
import org.rvemorel.cbd.repo.FeedDao;
import org.rvemorel.cbd.repo.MemberDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.transaction.TransactionConfiguration;
import org.springframework.transaction.annotation.Transactional;

import junit.framework.Assert;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(locations = { "classpath:test-context.xml", "classpath:/META-INF/spring/applicationContext.xml" })
@Transactional
@TransactionConfiguration(defaultRollback = true)
public class NewsDaoTest {
	@Autowired
	private FeedDao newsDao;

	@Autowired
	private MemberDao memberDao;

	@Test
	public void testRegister() {
		

		Feed news = new Feed();
		
		news.setCreationDate(new Timestamp(System.currentTimeMillis()));
		news.setContent("Bonjour, voici le mot du président");
		
		news.setAuthor("Jane Doe");
		news.setTitle("le mot du président");

		newsDao.register(news);
		Long id = news.getId();
		Assert.assertNotNull(id);

		// Assert.assertEquals(2, newsDao.findAllOrderedByName().size());
		Feed newNews = newsDao.findById(id);

		Assert.assertEquals("Bonjour, voici le mot du président", newNews.getContent());
		Assert.assertEquals("le mot du président", newNews.getTitle());
		Assert.assertEquals("Jane Doe", newNews.getAuthor());
		//Assert.assertEquals("2125552121", newNews.getCreationDate());
		return;
	}

}
