package org.rvemorel.cbd.repo;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Root;

import org.rvemorel.cbd.domain.Feed;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Repository
@Transactional
public class FeedDaoImpl implements FeedDao {
	@Autowired
	private EntityManager em;

	@Override
	public Feed findById(Long id) {
		return em.find(Feed.class, id);
	}

	@Override
	public List<Feed> findAllOrderedByCreationDate() {
		CriteriaBuilder cb = em.getCriteriaBuilder();
		CriteriaQuery<Feed> criteria = cb.createQuery(Feed.class);
		Root<Feed> news = criteria.from(Feed.class);

		/*
		 * Swap criteria statements if you would like to try out type-safe
		 * criteria queries, a new feature in JPA 2.0
		 * criteria.select(member).orderBy(cb.asc(member.get(Member_.name)));
		 */
		
		criteria.select(news).orderBy(cb.desc(news.get("top")),cb.desc(news.get("creationDate")));
		return em.createQuery(criteria).getResultList();
	}

	@Override
	public void register(Feed news) {
		em.persist(news);
		return;
	}
}
