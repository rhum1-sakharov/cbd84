package org.rvermorel.cbd.jpa;

import java.util.List;

import org.rvermorel.cbd.domain.Contact;
import org.springframework.data.jpa.repository.Query;

public interface ContactRepository extends BaseRepository<Contact, Long> {

	@Query(value="SELECT * FROM contacts c WHERE c.type='person' ORDER BY c.position asc, c.lastname asc", nativeQuery=true)
	public List<Contact> findPersonMembersOrderByPosition();
	
	@Query(value="SELECT * FROM contacts c WHERE c.type='asso' ORDER BY c.position asc, c.assoName asc", nativeQuery=true)
	public List<Contact> findAssoMembersOrderByPosition();	
	
	

}
