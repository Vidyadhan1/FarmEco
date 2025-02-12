package com.farmeco.marketplace.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.farmeco.marketplace.dto.SellWasteDto;
import com.farmeco.marketplace.entity.SellWaste;
import com.farmeco.marketplace.repository.SellWasteRepository;
import com.farmeco.marketplace.service.SellWasteService;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/marketplace")
public class MarketplaceController {
	
	@Autowired
    private SellWasteService sellWasteService;

    @PostMapping("/sell")
    public ResponseEntity<String> sellWaste(@RequestBody SellWasteDto sellWasteDto) {
        SellWaste savedWaste = sellWasteService.sellWaste(sellWasteDto);
        return ResponseEntity.ok("Waste details successfully saved with ID: " + savedWaste.getId());
    }
	
//	@Autowired
//	SellWasteRepository sellWasteRepo;
//	
//	@PostMapping("/sell")
//	public SellWaste  createSellWaste(@RequestBody SellWaste sellWaste) {
//		return sellWasteRepo.save(sellWaste);
//	}
//	
//	@GetMapping("/available")
//	public List<SellWaste> getAvailableWaste() {
//		return sellWasteRepo.findByIsSoldFalse();
//	}
//	
//
//    @PostMapping("/buy/{id}")
//    public ResponseEntity<?> buyWaste(@PathVariable Integer id) {
//        SellWaste waste = sellWasteRepo.findById(id)
//            .orElseThrow(() -> new RuntimeException("Waste not found"));
//        waste.setIsSold(true);
//        sellWasteRepo.save(waste);
//        return ResponseEntity.ok().build();
//    }
//	
	

}
