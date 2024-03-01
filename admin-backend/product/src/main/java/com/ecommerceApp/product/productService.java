package com.ecommerceApp.product;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class productService {
    
    @Autowired
    private productRepository repository;

    public List<product> getProducts() {
        return repository.findAll();
    }

    @SuppressWarnings("null")
    public void addProducts(product product) {
        repository.save(product);
    }

    public void updateProducts(Integer id, product updatedProduct) {
        @SuppressWarnings("null")
        Optional<product> optionalProduct = repository.findById(id);
        if (optionalProduct.isPresent()) {
            product existingProduct = optionalProduct.get();
            existingProduct.setName(updatedProduct.getName());
            existingProduct.setQuantity(updatedProduct.getQuantity());
            existingProduct.setDescription(updatedProduct.getDescription());
            existingProduct.setPrice(updatedProduct.getPrice());
            existingProduct.setCategory(updatedProduct.getCategory());
            // Set other properties as needed
            
            repository.save(existingProduct);
        } else {
            // Handle the case where the product with the given ID is not found
            // This could involve throwing an exception or returning an error response
        }
    }

    @SuppressWarnings("null")
    public void deleteProducts(Integer id) {
        repository.deleteById(id);
    }
}
