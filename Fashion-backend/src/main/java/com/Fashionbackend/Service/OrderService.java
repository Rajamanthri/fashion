package com.Fashionbackend.Service;

import com.Fashionbackend.DTO.OrderDTO;
import com.Fashionbackend.Entity.Order;
import com.Fashionbackend.Repo.OrderRepo;
import jakarta.transaction.Transactional;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@Transactional
public class OrderService {
    @Autowired
    private OrderRepo orderRepo;
    @Autowired
    private ModelMapper modelMapper;
    public OrderDTO saveOrder(OrderDTO orderDTO){
        orderRepo.save(modelMapper.map(orderDTO, Order.class));
        return orderDTO;
    }
}
