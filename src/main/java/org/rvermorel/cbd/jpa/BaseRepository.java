package org.rvermorel.cbd.jpa;

import java.io.Serializable;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.NoRepositoryBean;

@NoRepositoryBean
public interface BaseRepository<T, ID extends Serializable> extends JpaRepository<T, ID> {

	void delete(T deleted);

	List<T> findAll();

	T findOne(ID id);

	//T save(T persisted);
	
	//void update(T updated);

	void deleteById(ID id);

}
