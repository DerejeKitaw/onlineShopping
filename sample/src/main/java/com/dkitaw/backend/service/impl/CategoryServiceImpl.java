package com.dkitaw.backend.service.impl;

import java.util.ArrayList;
import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.BeanUtils;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.dkitaw.backend.io.entity.CategoryEntity;
import com.dkitaw.backend.io.entity.repository.CategoryRepository;
import com.dkitaw.backend.service.CategoryService;
import com.dkitaw.backend.shared.Utils;
import com.dkitaw.backend.shared.dto.CategoryDTO;

@Service
public class CategoryServiceImpl implements CategoryService {
	
	CategoryRepository categoryRepository;
	Utils utils;
	public CategoryServiceImpl(CategoryRepository categoryRepository, Utils utils) {
		this.categoryRepository = categoryRepository;
		this.utils= utils;
	}

	private static List<CategoryDTO> categories = new ArrayList<>();
	static {
		CategoryDTO category = new CategoryDTO();
		category.setId(1);
		category.setName("Radio");
		category.setDescription("New radio shake radio");
		category.setImageURL("RAD_1.png");
		
		categories.add(category);
		
		CategoryDTO category2 = new CategoryDTO();
		category2.setId(2);
		category2.setName("Phone");
		category2.setDescription("New Phone Apple");
		category2.setImageURL("PHON_1.png");
		
		categories.add(category2);	
		
		CategoryDTO category3 = new CategoryDTO();
		category3.setId(3);
		category3.setName("Table");
		category3.setDescription("Compputer desk");
		category3.setImageURL("TABLE_1.png");
		
		categories.add(category3);
	}

	@Override
	public List<CategoryDTO> getCategories(int page, int limit) {
		
		List<CategoryDTO> returnValue = new ArrayList<>();

	    if (page > 0)
	      page = page - 1; // avoid page=0

	    Pageable pageableRequest = PageRequest.of(page, limit);

	    Page<CategoryEntity> categoryPage = categoryRepository.findAll(pageableRequest);
	    List<CategoryEntity> categories = categoryPage.getContent();

	    for (CategoryEntity categoryEntity : categories) {
	    	CategoryDTO categoryDTO = new CategoryDTO();
	      BeanUtils.copyProperties(categoryEntity, categoryDTO);
	      returnValue.add(categoryDTO);
	    }
	    return returnValue;
	}

	@Override
	public CategoryDTO createCategory(CategoryDTO category) {
		if(categoryRepository.findByName(category.getName())!= null) throw new RuntimeException("Category name exists");
		ModelMapper modelMapper = new ModelMapper();
		CategoryEntity categoryEntity = modelMapper.map(category, CategoryEntity.class);

	    String publicCategoryId = utils.generateCategoryId(30);
	    categoryEntity.setCategoryId(publicCategoryId);

	    CategoryEntity storedCategoryDetails = categoryRepository.save(categoryEntity);

	    // BeanUtils.copyProperties(storedUserDetails, returnValue);// copy storedUserDetails to returnValue
	    CategoryDTO returnValue = modelMapper.map(storedCategoryDetails, CategoryDTO.class);
	    return returnValue;
	}


}
