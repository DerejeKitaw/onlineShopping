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
		
		category.setId(2);
		category.setName("Phone");
		category.setDescription("New Phone Apple");
		category.setImageURL("PHON_1.png");
		
		categories.add(category);
		
	}

	@Override
	public List<CategoryDTO> list() {
		// TODO Auto-generated method stub
		return categories;
	}

}
