package org.rvermorel.cbd.repo;

import java.util.List;

import org.rvermorel.cbd.domain.Feed;

public interface FeedDao
{
    public Feed findById(Long id);
   
    public List<Feed> findAllOrderedByCreationDate();

    public void register(Feed news);
    
    public void update(Feed feed);
    
    public void deleteById(Long id);
}
