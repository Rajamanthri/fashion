package com.Fashionbackend.Controller;

import com.Fashionbackend.DTO.UserDTO;
import com.Fashionbackend.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value="api/v1/user")
@CrossOrigin
public class UserController {

    @Autowired
    private UserService userService;
    @PostMapping("/saveUser")
    public String saveUser(@RequestBody UserDTO userDTO) {
         userService.saveUser(userDTO);
         return "User Saved";
    }
    @GetMapping("/getUser")
    public List<UserDTO> getUser() {
        return userService.getAllUsers();
    }
    @PutMapping("/updateUser")
    public String updateUsers(@RequestBody UserDTO userDTO){
        userService.updateUsers(userDTO);
        return "User Updated";
    }
    @DeleteMapping("/deleteUser")
    public String deleteUsers(@RequestBody UserDTO userDTO){
        userService.deleteUsers(userDTO);
        return "delete succesfully";

    }
}
