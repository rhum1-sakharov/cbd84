package org.rvermorel.cbd.jpa;

import java.io.Serializable;
import java.util.List;

import org.springframework.data.repository.NoRepositoryBean;
import org.springframework.data.repository.Repository;

@NoRepositoryBean
public interface BaseRepository<T, ID extends Serializable> extends Repository<T, ID> {

	void delete(T deleted);

	List<T> findAll();

	T findOne(ID id);

	T save(T persisted);
	
	void update(T updated);

	void deleteById(ID id);

}
