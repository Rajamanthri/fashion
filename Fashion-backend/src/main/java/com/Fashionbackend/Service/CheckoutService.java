package com.Fashionbackend.Service;

import com.Fashionbackend.DTO.CheckoutDTO;
import com.Fashionbackend.Entity.Checkout;
import com.Fashionbackend.Repo.CheckoutRepo;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CheckoutService {
    @Autowired
    private CheckoutRepo checkoutRepo;
    @Autowired
    private ModelMapper modelMapper;

    public CheckoutDTO savecheckout(CheckoutDTO checkoutDTO){
        checkoutRepo.save(modelMapper.map(checkoutDTO, Checkout.class));
        return checkoutDTO;
    }
    public List<CheckoutDTO> getAllCheckout(){
        List<Checkout>checkoutList=checkoutRepo.findAll();
        return modelMapper.map(checkoutList,new TypeToken<List<CheckoutDTO>>(){}.getType());
    }
    public CheckoutDTO updateCheckout(CheckoutDTO checkoutDTO){
        checkoutRepo.save(modelMapper.map(checkoutDTO,Checkout.class));
        return checkoutDTO;
    }
    public Boolean deleteCheckout(CheckoutDTO checkoutDTO){
        checkoutRepo.delete(modelMapper.map(checkoutDTO,Checkout.class));
        return true;
    }
}
