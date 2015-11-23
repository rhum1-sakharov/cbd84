package org.rvermorel.cbd.repo;

import java.util.List;

import org.rvermorel.cbd.domain.Contact;

@Deprecated
public interface MemberDao
{
    public Contact findById(Long id);

    public Contact findByEmail(String email);

    public List<Contact> findAllOrderedByName();

    public void register(Contact member);
}
