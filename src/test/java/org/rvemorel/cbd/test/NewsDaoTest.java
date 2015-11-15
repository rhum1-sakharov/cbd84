package org.rvemorel.cbd.test;

import java.sql.Timestamp;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.rvemorel.cbd.domain.Member;
import org.rvemorel.cbd.domain.Feed;
import org.rvemorel.cbd.repo.MemberDao;
import org.rvemorel.cbd.repo.FeedDao;
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
		Member member = new Member();
		member.setEmail("jane.doe@mailinator.com");
		member.setName("Jane Doe");
		member.setPhoneNumber("2125552121");
		memberDao.register(member);

		Feed news = new Feed();
		Timestamp ts = new Timestamp(System.currentTimeMillis());
		news.setCreationDate(ts);
		news.setContent("Bonjour, voici le mot du président");
		
		news.setMember(member);
		news.setTitle("le mot du président");

		newsDao.register(news);
		Long id = news.getId();
		Assert.assertNotNull(id);

		// Assert.assertEquals(2, newsDao.findAllOrderedByName().size());
		Feed newNews = newsDao.findById(id);

		Assert.assertEquals("Bonjour, voici le mot du président", newNews.getContent());
		Assert.assertEquals("le mot du président", newNews.getTitle());
		Assert.assertEquals("Jane Doe", newNews.getMember().getName());
		//Assert.assertEquals("2125552121", newNews.getCreationDate());
		return;
	}

}
