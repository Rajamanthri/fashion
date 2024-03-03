package com.Fashionbackend.Controller;

import com.Fashionbackend.DTO.OrderDTO;
import com.Fashionbackend.Service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "api/v1/order")
@CrossOrigin
public class OrderController {
    @Autowired
    private OrderService orderService;
    @PostMapping("/saveOrder")
    public String saveOrder(OrderDTO orderDTO){
        orderService.saveOrder(orderDTO);
        return "Saved";
    }

}
