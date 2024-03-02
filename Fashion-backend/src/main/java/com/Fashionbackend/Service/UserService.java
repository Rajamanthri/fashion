package com.Fashionbackend.Service;

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
        User user = User.builder()
                .f_Name(userDTO.getF_Name())
                .l_Name(userDTO.getL_Name())
                .email(userDTO.getEmail())
                .password(encryptedPassword)
                .role(userDTO.getRole())
                .build();
        userRepo.save(user);
        return userDTO;
    }
    public boolean isUserExists(String email) {
        return userRepo.existsByEmail(email);
    }

    public String authenticateUser(UserDTO userDTO){

        Optional<User> opUser = userRepo.findByEmail(userDTO.getEmail());
        BCryptPasswordEncoder bcrypt = new BCryptPasswordEncoder();
        if (opUser.isPresent()){
            User dbuser = opUser.get();
            if(bcrypt.matches(userDTO.getPassword(),dbuser.getPassword())){
                return "Authenticated user";
            }else{
                return "Incorrect Password";
            }
        }else{
            return "User not registered yet!!!";
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
