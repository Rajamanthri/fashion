package com.Fashionbackend.Service;

import com.Fashionbackend.DTO.AuthDTO;
import com.Fashionbackend.DTO.UserDTO;
import com.Fashionbackend.Entity.User;
import com.Fashionbackend.Repo.UserRepo;
import jakarta.transaction.Transactional;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.nio.file.attribute.UserPrincipalNotFoundException;
import java.util.List;
import java.util.Optional;

@Service
@Transactional

public class UserService {
    @Autowired
    private UserRepo userRepo;
    @Autowired
    private ModelMapper modelMapper;
    @Autowired
    private BCryptPasswordEncoder passwordEncoder;

    public UserDTO saveUser(UserDTO userDTO) {
        String encryptedPassword =  passwordEncoder.encode(userDTO.getPassword());
        User user = new User();
        user.setF_Name(userDTO.getF_Name());
        user.setL_Name(userDTO.getL_Name());
        user.setEmail(userDTO.getEmail());
        user.setPassword(encryptedPassword);
        user.setRole(userDTO.getRole());

        userRepo.save(user);

        return userDTO;

    }
    public boolean isUserExists(String email) {
        return userRepo.existsByEmail(email);
    }

    public AuthDTO authenticateUser(UserDTO userDTO){

        Optional<User> opUser = userRepo.findByEmail(userDTO.getEmail());
        BCryptPasswordEncoder bcrypt = new BCryptPasswordEncoder();
        AuthDTO authDTO = new AuthDTO();
        if (opUser.isPresent()){
            User dbuser = opUser.get();
            if(bcrypt.matches(userDTO.getPassword(),dbuser.getPassword())){
                //return "Authenticated user";
                  authDTO.setRole((dbuser.getRole()));
                  authDTO.setEmail(dbuser.getEmail());
        authDTO.setStatus("Authenticated user");
        return authDTO;
            }else{
                // return "Incorrect Password";

        authDTO.setStatus("Incorrect Password");
        return authDTO;
            }
        }else{
           // return "User not registered yet!!!";
            
    authDTO.setStatus("User not registered yet!!!");
    return authDTO;
        }

    }

    public List<UserDTO> getAllUsers() {
        List<User> userList = userRepo.findAll();
        return modelMapper.map(userList, new TypeToken<List<UserDTO>>() {
        }.getType());

    }

    public UserDTO updateUsers(UserDTO userDTO) {
        userRepo.save(modelMapper.map(userDTO, User.class));
        return userDTO;
    }

    public boolean deleteUsers(UserDTO userDTO) {
        userRepo.delete(modelMapper.map(userDTO, User.class));
        return true;
    }
}
