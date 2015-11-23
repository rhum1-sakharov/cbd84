package org.rvermorel.cbd.repo;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Root;

import org.rvermorel.cbd.domain.Contact;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Repository
@Transactional
public class MemberDaoImpl implements MemberDao
{
    @Autowired
    private EntityManager em;

    public Contact findById(Long id)
    {
        return em.find(Contact.class, id);
    }

    public Contact findByEmail(String email)
    {
        CriteriaBuilder builder = em.getCriteriaBuilder();
        CriteriaQuery<Contact> criteria = builder.createQuery(Contact.class);
        Root<Contact> member = criteria.from(Contact.class);

        /*
         * Swap criteria statements if you would like to try out type-safe criteria queries, a new
         * feature in JPA 2.0 criteria.select(member).orderBy(cb.asc(member.get(Member_.name)));
         */

        criteria.select(member).where(builder.equal(member.get("email"), email));
        return em.createQuery(criteria).getSingleResult();
    }

    public List<Contact> findAllOrderedByName()
    {
        CriteriaBuilder cb = em.getCriteriaBuilder();
        CriteriaQuery<Contact> criteria = cb.createQuery(Contact.class);
        Root<Contact> member = criteria.from(Contact.class);

        /*
         * Swap criteria statements if you would like to try out type-safe criteria queries, a new
         * feature in JPA 2.0 criteria.select(member).orderBy(cb.asc(member.get(Member_.name)));
         */

        criteria.select(member).orderBy(cb.asc(member.get("name")));
        return em.createQuery(criteria).getResultList();
    }

    public void register(Contact member)
    {
        em.persist(member);
        return;
    }
}
