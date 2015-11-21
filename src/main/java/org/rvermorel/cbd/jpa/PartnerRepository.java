package org.rvermorel.cbd.jpa;

import java.util.List;

import org.rvermorel.cbd.domain.Partner;
import org.springframework.data.jpa.repository.Query;

public interface PartnerRepository extends BaseRepository<Partner, Long> {

	@Query(value="SELECT * FROM partners p ORDER BY p.position asc", nativeQuery=true)
	public List<Partner> findAllOrderByPosition();
	

}
