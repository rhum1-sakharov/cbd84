package org.rvermorel.cbd.repo;

import java.util.List;

import org.rvermorel.cbd.domain.Member;

@Deprecated
public interface MemberDao
{
    public Member findById(Long id);

    public Member findByEmail(String email);

    public List<Member> findAllOrderedByName();

    public void register(Member member);
}
