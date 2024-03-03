package com.Fashionbackend.Controller;

import com.Fashionbackend.DTO.AuthDTO;
import com.Fashionbackend.DTO.UserDTO;
import com.Fashionbackend.Entity.User;
import com.Fashionbackend.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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
        try {

            if (userDTO.getF_Name() == null || userDTO.getF_Name().isEmpty()
                    || userDTO.getL_Name() == null || userDTO.getL_Name().isEmpty()
                    || userDTO.getEmail() == null || userDTO.getEmail().isEmpty()
                    || userDTO.getPassword() == null || userDTO.getPassword().isEmpty()) {
                return "Please provide all required fields.";
            }


            if (userService.isUserExists(userDTO.getEmail())) {
                return "User with this email already exists.";
            }


            userService.saveUser(userDTO);

            return "User created successfully.";
        } catch (Exception e) {
            return "Error while processing the request.";
        }
    }
    @PostMapping("/authenticateUsers")
    public AuthDTO authenticateUser(@RequestBody UserDTO userDTO){
        return userService.authenticateUser(userDTO);
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

