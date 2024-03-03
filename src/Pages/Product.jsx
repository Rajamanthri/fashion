import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Product.css';

const ProductForm = () => {
  const [products, setProducts] = useState([]);
  const [formData, setFormData] = useState({
      name: '',
      quantity: 0,
      description: '',
      price: 0,
      category: '1', // Default category
      image: null,
  });

  useEffect(() => {
      fetchProducts();
  }, []);

  const fetchProducts = async () => {
      try {
          const response = await axios.get('/api/v1/product/getProduct');
          setProducts(response.data);
      } catch (error) {
          console.error('Error fetching products:', error);
      }
  };

  const handleChange = (event) => {
      const { name, value } = event.target;
      setFormData({
          ...formData,
          [name]: value,
      });
  };

  const handleImageChange = (event) => {
      setFormData({
          ...formData,
          image: event.target.files[0],
      });
  };

  const addProduct = async () => {
      try {
          const productData = new FormData();
          for (const key in formData) {
              productData.append(key, formData[key]);
          }
          await axios.post('/api/v1/product/saveProduct', productData);
          fetchProducts(); // Refresh product list
      } catch (error) {
          console.error('Error adding product:', error);
      }
  };

  const updateProduct = async (productId, updatedData) => {
      try {
          await axios.put(`/api/v1/product/updateProduct?id=${productId}`, updatedData);
          fetchProducts(); // Refresh product list
      } catch (error) {
          console.error('Error updating product:', error);
      }
  };

  const deleteProduct = async (productId) => {
      try {
          await axios.delete(`/api/v1/product/deleteProduct?id=${productId}`);
          fetchProducts(); // Refresh product list
      } catch (error) {
          console.error('Error deleting product:', error);
      }
  };

  const handleSubmit = (event) => {
      event.preventDefault();
      addProduct();
  };

  return (
      <div className="product-container">
        <h3>Add Product</h3>
          <div className="add-product-form">
              
              <form class ="form" onSubmit={handleSubmit} encType="multipart/form-data">
                  <div className="indiv">
                      <label htmlFor="productName">Product Name:</label>
                      <input type="text" name="name" value={formData.name} onChange={handleChange} id="productName" placeholder="Enter product name" required />
                      <label htmlFor="quantity">Quantity:</label>
                      <input type="number" min="0" name="quantity" value={formData.quantity} onChange={handleChange} id="quantity" placeholder="Enter quantity" required />
                      <label htmlFor="description">Description:</label>
                      <input type="text" name="description" value={formData.description} onChange={handleChange} id="description" placeholder="Enter description" required />
                  </div>
                  <div className="indiv">
                      <label htmlFor="price">Price:</label>
                      <input type="number" min="0" name="price" value={formData.price} onChange={handleChange} id="price" placeholder="Enter price" required />
                      <label htmlFor="category">Category:</label>
                      <select class="box" name="category" value={formData.category} onChange={handleChange} id="category" title="Select the category" required>
                          <option value="1">Men</option>
                          <option value="2">Women</option>
                          <option value="3">Kids</option>
                      </select>
                      <label htmlFor="p_image">Image:</label>
                      <input type="file" name="p_image" onChange={handleImageChange} id="p_image" accept="image/png, image/jpg, image/jpeg" required />
                  </div>
                  <input type="submit" value="Add" class="btn" />
              </form>
          </div>

          <section id="products" className="display-product-table">
              <h3>Product List</h3>
              <table id="productsTable" className="display-product-table">
                  <thead>
                      <tr>
                          <th>Name</th>
                          <th>Quantity</th>
                          <th>Description</th>
                          <th>Price</th>
                          <th>Category</th>
                          <th>Image</th>
                          <th>Action</th>
                      </tr>
                  </thead>
                  <tbody>
                      {products.map((product) => (
                          <tr key={product.id}>
                              <td>{product.name}</td>
                              <td>{product.quantity}</td>
                              <td>{product.description}</td>
                              <td>{product.price}</td>
                              <td>{product.category}</td>
                              <td>
                                  <img src={product.image} alt={product.name} />
                              </td>
                              <td>
                                  <button onClick={() => updateProduct(product.id, { name: 'Updated Name' })}>Update</button>
                                  <button onClick={() => deleteProduct(product.id)}>Delete</button>
                              </td>
                          </tr>
                      ))}
                  </tbody>
              </table>
          </section>
      </div>
  );
};

export default ProductForm;
