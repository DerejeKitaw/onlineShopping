package com.dkitaw.backend.service.impl;

import java.util.ArrayList;
import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.BeanUtils;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.dkitaw.backend.exception.CategoryServiceException;
import com.dkitaw.backend.io.entity.CategoryEntity;
import com.dkitaw.backend.io.entity.repository.CategoryRepository;
import com.dkitaw.backend.io.entity.repository.ProductRepository;
import com.dkitaw.backend.service.CategoryService;
import com.dkitaw.backend.service.ProductService;
import com.dkitaw.backend.shared.Utils;
import com.dkitaw.backend.shared.dto.CategoryDTO;
import com.dkitaw.backend.shared.dto.ProductDTO;

@Service
public class ProductServiceImpl implements ProductService {
	
	ProductRepository productRepository;
	Utils utils;
	@Override
	public ProductDTO get(int productId) {
		// TODO Auto-generated method stub
		return null;
	}
	@Override
	public List<ProductDTO> list() {
		// TODO Auto-generated method stub
		return null;
	}
	@Override
	public boolean add(ProductDTO product) {
		// TODO Auto-generated method stub
		return false;
	}
	@Override
	public boolean update(ProductDTO product) {
		// TODO Auto-generated method stub
		return false;
	}
	@Override
	public boolean delete(ProductDTO product) {
		// TODO Auto-generated method stub
		return false;
	}
	@Override
	public List<ProductDTO> getProductsByParam(String param, int count) {
		// TODO Auto-generated method stub
		return null;
	}
	@Override
	public List<ProductDTO> listActiveProducts() {
		// TODO Auto-generated method stub
		return null;
	}
	@Override
	public List<ProductDTO> listActiveProductsByCategory(int categoryId) {
		// TODO Auto-generated method stub
		return null;
	}
	@Override
	public List<ProductDTO> getLatestActiveProducts(int count) {
		// TODO Auto-generated method stub
		return null;
	}
	
	
}
