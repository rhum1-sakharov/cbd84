package org.rvemorel.cbd.repo;

import java.util.List;

import org.rvemorel.cbd.domain.Feed;

public interface FeedDao
{
    public Feed findById(Long id);
   
    public List<Feed> findAllOrderedByCreationDate();

    public void register(Feed news);
}
