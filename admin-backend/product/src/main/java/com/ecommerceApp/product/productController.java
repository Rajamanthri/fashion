package com.ecommerceApp.product;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;





@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("Ecommerce")
public class productController {
    
    @Autowired
    private productService service;

  

    @GetMapping("/product")
    public List<product> getProducts(){
      return service.getProducts();

    }
    @PostMapping("/product/addnew")
    public void addProducts(@RequestBody product product){
     service.addProducts( product);

    }

    @PutMapping("/product/{id}/edit")
    public void updateProduct(@PathVariable("id") Integer id, @RequestBody product product) {
        service.updateProducts(id, product);
    }

    @DeleteMapping("/product/{id}/delete")
    public void deleteProducts(@PathVariable("id") Integer id){
     service.deleteProducts(id);

    }
    public productService getService() {
        return service;
    }
    public void setService(productService service) {
        this.service = service;
    }

    
}
