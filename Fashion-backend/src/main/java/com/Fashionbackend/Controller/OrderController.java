package com.Fashionbackend.Controller;

import com.Fashionbackend.DTO.OrderDTO;
import com.Fashionbackend.DTO.UserDTO;
import com.Fashionbackend.Service.OrderService;
import com.Fashionbackend.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value="api/v1/user")
@CrossOrigin
public class OrderController {
    @Autowired
    private OrderService orderService;
    @PostMapping("/saveOrder")
    public String saveOrder(@RequestBody OrderDTO orderDTO) {
        orderService.saveOrder(orderDTO);
        return "Order Saved";
    }
    @GetMapping("/getOrders")
    public List<OrderDTO> getOrders() {

        return orderService.getAllOrders();
    }
    @PutMapping("/updateOrder")
    public String updateOrder(@RequestBody OrderDTO orderDTO){
        orderService.updateOrders(orderDTO);
        return "Order Updated";
    }
    @DeleteMapping("/deleteOrder")
    public String deleteOrder(@RequestBody OrderDTO orderDTO){
        orderService.deleteOrders(orderDTO);
        return "delete succesfully";

    }
}
