package com.Fashionbackend.Controller;

import com.Fashionbackend.DTO.CheckoutDTO;
import com.Fashionbackend.Service.CheckoutService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/api/v1/checkout")
@CrossOrigin
public class CheckoutController {
    @Autowired
    private CheckoutService checkoutService;

    @PostMapping("/saveCheckout")
    public String saveCheckout(@RequestBody CheckoutDTO checkoutDTO){
        checkoutService.savecheckout(checkoutDTO);
        return "Saved";
    }
    @GetMapping("/getCheckout")
    public List<CheckoutDTO> getallCheckout(){
     return checkoutService.getAllCheckout();
    }
    @PutMapping("/updateCheckout")
    public String updateCheckout( CheckoutDTO chechoutDTO){
        checkoutService.updateCheckout(chechoutDTO);
        return  "updated";
    }
    @DeleteMapping("/deleteCheckout")
    public String deleteCheckout(CheckoutDTO checkoutDTO){
     checkoutService.deleteCheckout(checkoutDTO);
     return "deleted";
    }

}
