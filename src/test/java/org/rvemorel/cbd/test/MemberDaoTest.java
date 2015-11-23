package org.rvemorel.cbd.test;

import java.util.List;

import junit.framework.Assert;

import org.rvermorel.cbd.domain.Contact;
import org.rvermorel.cbd.repo.MemberDao;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.transaction.TransactionConfiguration;
import org.springframework.transaction.annotation.Transactional;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(locations={"classpath:test-context.xml",
"classpath:/META-INF/spring/applicationContext.xml"})
@Transactional
@TransactionConfiguration(defaultRollback=true)
public class MemberDaoTest
{
    @Autowired
    private MemberDao memberDao;

    @Test
    public void testFindById()
    {
        Contact member = memberDao.findById(0l);

        Assert.assertEquals("John Smith", member.getName());
        Assert.assertEquals("john.smith@mailinator.com", member.getEmail());
        Assert.assertEquals("2125551212", member.getPhoneNumber());
        return;
    }

    @Test
    public void testFindByEmail()
    {
        Contact member = memberDao.findByEmail("john.smith@mailinator.com");

        Assert.assertEquals("John Smith", member.getName());
        Assert.assertEquals("john.smith@mailinator.com", member.getEmail());
        Assert.assertEquals("2125551212", member.getPhoneNumber());
        return;
    }

    @Test
    public void testRegister()
    {
        Contact member = new Contact();
        member.setEmail("jane.doe@mailinator.com");
        member.setName("Jane Doe");
        member.setPhoneNumber("2125552121");

        memberDao.register(member);
        Long id = member.getId();
        Assert.assertNotNull(id);
        
        Assert.assertEquals(2, memberDao.findAllOrderedByName().size());
        Contact newMember = memberDao.findById(id);

        Assert.assertEquals("Jane Doe", newMember.getName());
        Assert.assertEquals("jane.doe@mailinator.com", newMember.getEmail());
        Assert.assertEquals("2125552121", newMember.getPhoneNumber());
        return;
    }

    @Test
    public void testFindAllOrderedByName()
    {
        Contact member = new Contact();
        member.setEmail("jane.doe@mailinator.com");
        member.setName("Jane Doe");
        member.setPhoneNumber("2125552121");
        memberDao.register(member);

        List<Contact> members = memberDao.findAllOrderedByName();
        Assert.assertEquals(2, members.size());
        Contact newMember = members.get(0);

        Assert.assertEquals("Jane Doe", newMember.getName());
        Assert.assertEquals("jane.doe@mailinator.com", newMember.getEmail());
        Assert.assertEquals("2125552121", newMember.getPhoneNumber());
        return;
    }
}
