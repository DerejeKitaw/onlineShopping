package com.dkitaw.backend.service.impl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import com.dkitaw.backend.service.CategoryService;
import com.dkitaw.backend.shared.dto.CategoryDTO;

@Service
public class CategoryServiceImpl implements CategoryService {
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
	}

	@Override
	public List<CategoryDTO> list() {
		// TODO Auto-generated method stub
		return categories;
	}

}
