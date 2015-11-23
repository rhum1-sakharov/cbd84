package org.rvermorel.cbd.jpa;

import java.util.List;

import org.rvermorel.cbd.domain.Contact;
import org.springframework.data.jpa.repository.Query;

public interface ContactRepository extends BaseRepository<Contact, Long> {

	@Query(value="SELECT * FROM contacts c ORDER BY c.position asc", nativeQuery=true)
	public List<Contact> findAllOrderByPosition();
	

}
