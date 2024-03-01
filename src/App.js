import React from 'react';
import ProductForm from './ProductForm'; // Import ProductForm component
import './product.css'; // Import product.css for styling
import axios from 'axios'; // Import Axios library

const App = () => {
  // Define a function to handle adding a new product
  const addProduct = (newProduct) => {
    // Make a POST request to your Spring Boot backend to add the new product
    axios.post('http://localhost:8080/Ecommerce/product/addnew', newProduct)
      .then(response => {
        // Handle success response if needed
        console.log('Product added successfully:', response.data);
      })
      .catch(error => {
        // Handle error response if needed
        console.error('Error adding product:', error);
      });
  };

  return (
    <div className="App">
      <header className="App-header">
        <ProductForm addProduct={addProduct} /> {/* Pass the addProduct function as a prop to ProductForm component */}
      </header>
    </div>
  );
}

export default App;

