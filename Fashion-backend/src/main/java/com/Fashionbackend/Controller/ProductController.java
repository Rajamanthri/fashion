package com.Fashionbackend.Controller;

import com.Fashionbackend.DTO.ProductDTO;

import com.Fashionbackend.Service.ProductService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/api/v1/product")
@CrossOrigin
public class ProductController {
    @Autowired
    private ProductService productService;

    @GetMapping("/getProduct")
    public List<ProductDTO> getProduct() {
        return productService.getallProducts();
    }

    @PostMapping("/saveProduct")
    public String saveProduct(@RequestBody ProductDTO productDTO) {
        productService.saveProduct(productDTO);
        return "Product saved";
    }

    @PutMapping("/updateProduct")
    public String updateProduct(@RequestBody ProductDTO productDTO) {
        productService.updateProduct(productDTO);
        return "Product updated";
    }

    @DeleteMapping("/deleteProduct")
    public String deleteProduct(@RequestBody ProductDTO productDTO) {
        productService.deleteProduct(productDTO);
        return "deleted successfully";
    }

    @GetMapping("/searchProduct")
    public List<ProductDTO> searchProduct(@RequestParam String keyword) {
        return productService.searchProduct(keyword);
    }
}
