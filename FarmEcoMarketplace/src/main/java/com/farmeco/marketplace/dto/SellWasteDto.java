package com.farmeco.marketplace.dto;

import java.util.List;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class SellWasteDto {

	private String name;
    private String email;
    private String wasteType;
    private Long mobileNo;
    private String address;
    private Double price;
    private String imagePath;

}
