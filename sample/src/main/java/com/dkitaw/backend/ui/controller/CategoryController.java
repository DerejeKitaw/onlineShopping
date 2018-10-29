package com.dkitaw.backend.ui.controller;

import java.lang.reflect.Type;
import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.dkitaw.backend.service.CategoryService;
import com.dkitaw.backend.shared.dto.CategoryDTO;
import com.dkitaw.backend.ui.model.response.CategoryRest;

import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;

@RestController 
@RequestMapping("category")
public class CategoryController {
	
	CategoryService categoryService;
	public CategoryController(CategoryService categoryService) {
		this.categoryService=categoryService;
	}
	
	@GetMapping(path="all")
	public List<CategoryRest> getCategories() {
		List<CategoryRest> returnValue = new ArrayList<>();
		List<CategoryDTO>categoryies=categoryService.list();
		Type listType = new TypeToken<List<CategoryRest>>() {
	    }.getType();
	    returnValue = new ModelMapper().map(categoryies, listType);

	    return returnValue;
	}
	

}
