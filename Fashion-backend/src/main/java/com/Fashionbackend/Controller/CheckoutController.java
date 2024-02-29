package com.Fashionbackend.Controller;

import com.Fashionbackend.DTO.ChechoutDTO;
import com.Fashionbackend.Service.CheckoutService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "/api/v1/checkout")
@CrossOrigin
public class CheckoutController {
    @Autowired
    private CheckoutService checkoutService;

    @PostMapping("/saveCheckout")
    public String saveCheckout(@RequestBody ChechoutDTO chechoutDTO){
        checkoutService.savecheckout(chechoutDTO);
        return "Saved";
    }

}
