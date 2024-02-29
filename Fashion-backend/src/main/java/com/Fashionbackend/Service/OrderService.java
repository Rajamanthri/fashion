package com.Fashionbackend.Service;

import com.Fashionbackend.DTO.OrderDTO;
import com.Fashionbackend.DTO.UserDTO;
import com.Fashionbackend.Entity.Order;
import com.Fashionbackend.Entity.User;
import com.Fashionbackend.Repo.OrderRepo;
import com.Fashionbackend.Repo.UserRepo;
import jakarta.transaction.Transactional;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

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
    public List<OrderDTO> getAllOrders(){
        List<Order>orderList=orderRepo.findAll();
        return modelMapper.map(orderList,new TypeToken<List<OrderDTO>>(){}.getType());

    }
    public OrderDTO updateOrders(OrderDTO orderDTO){
        orderRepo.save(modelMapper.map(orderDTO,Order.class));
        return orderDTO;
    }

    public boolean deleteOrders(OrderDTO orderDTO){
        orderRepo.delete(modelMapper.map(orderDTO,Order.class));
        return true;
    }
}
