package com.dkitaw.backend.io.entity.repository;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

import com.dkitaw.backend.io.entity.CategoryEntity;

@Repository
public interface CategoryRepository extends PagingAndSortingRepository<CategoryEntity, Integer>{

	CategoryEntity findByName(String name);

}
