package org.rvermorel.cbd.jpa;

import java.util.List;

import org.rvermorel.cbd.domain.CbdFiles;
import org.springframework.data.jpa.repository.Query;

public interface CbdFileRepository extends BaseRepository<CbdFiles, Long> {

	@Query(value="SELECT * FROM cbdfiles c  ORDER BY c.position, c.creationDate desc", nativeQuery=true)
	public List<CbdFiles> findCbdFilesOrderByOrderAndCreationDate();


}
