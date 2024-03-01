package com.Fashionbackend.Service;

import com.Fashionbackend.DTO.ChechoutDTO;
import com.Fashionbackend.DTO.UserDTO;
import com.Fashionbackend.Entity.Checkout;
import com.Fashionbackend.Repo.CheckoutRepo;
import jakarta.transaction.Transactional;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@Transactional
public class CheckoutService {
    @Autowired
    private CheckoutRepo checkoutRepo;
    @Autowired
    private ModelMapper modelMapper;

    public ChechoutDTO savecheckout(ChechoutDTO chechoutDTO){
        checkoutRepo.save(modelMapper.map(chechoutDTO, Checkout.class));
        return chechoutDTO;
    }
}
