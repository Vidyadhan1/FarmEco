package com.farmeco.marketplace.service;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.farmeco.marketplace.dto.SellWasteDto;
import com.farmeco.marketplace.entity.SellWaste;
import com.farmeco.marketplace.repository.SellWasteRepository;

@Service
public class SellWasteService {

	
	@Autowired
	private ModelMapper mapper;
	
	 @Autowired
	    private SellWasteRepository sellWasteRepo;

	    public SellWaste sellWaste(SellWasteDto sellWasteDto) {
	        SellWaste waste = mapper.map(sellWasteDto, SellWaste.class);
	        
	        return sellWasteRepo.save(waste);
	    }
}
