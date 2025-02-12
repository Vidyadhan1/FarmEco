package com.farmeco.marketplace.service;


import java.nio.file.Path;
import java.util.Collection;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.farmeco.marketplace.entity.SellWaste;
import com.farmeco.marketplace.repository.SellWasteRepository;

@Service
public class SellWasteService1 {

	 @Autowired
	    private SellWasteRepository sellWasteRepo;

	    public void saveWasteDetails(String name, String email, String wasteType, Long mobileNo, String address, Double price,
	                                 String imagePath, Integer farmerid) {
	        SellWaste sellWaste = new SellWaste(name, email, wasteType, mobileNo, address, price, imagePath, farmerid);
	        sellWasteRepo.save(sellWaste);
	    }
   
    
    public List<SellWaste> getAllRequests() {
        return sellWasteRepo.findAll();
    }

    public SellWaste updateStatus(int id, SellWaste details) {
    	SellWaste existingDetails = sellWasteRepo.findById(id)
            .orElseThrow(() -> new RuntimeException("WasteDetails not found for id: " + id));

        existingDetails.setIsSold(true);
        return sellWasteRepo.save(existingDetails);
    }



    

}
