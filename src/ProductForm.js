import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProductForm = () => {
    const [products, setProducts] = useState([]);
    const [newProduct, setNewProduct] = useState({
        name: '',
        quantity: 0,
        description: '',
        price: 0,
        category: ''
    });

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = () => {
        axios.get('http://localhost:8080/Ecommerce/product')
            .then(response => {
                setProducts(response.data);
            })
            .catch(error => {
                console.error('Error fetching products:', error);
            });
    };

    const addProduct = () => {
        axios.post('http://localhost:8080/Ecommerce/product/addnew', newProduct)
            .then(response => {
                fetchProducts();
                setNewProduct({
                    name: '',
                    quantity: 0,
                    description: '',
                    price: 0,
                    category: ''
                });
            })
            .catch(error => {
                console.error('Error adding product:', error);
            });
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewProduct(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    return (
        <div>
            <h3>Add Product</h3>
            <div>
                <label>Name:</label>
                <input type="text" name="name" value={newProduct.name} onChange={handleInputChange} />
            </div>
            <div>
                <label>Quantity:</label>
                <input type="number" name="quantity" value={newProduct.quantity} onChange={handleInputChange} />
            </div>
            <div>
                <label>Description:</label>
                <input type="text" name="description" value={newProduct.description} onChange={handleInputChange} />
            </div>
            <div>
                <label>Price:</label>
                <input type="number" name="price" value={newProduct.price} onChange={handleInputChange} />
            </div>
            <div>
                <label>Category:</label>
                <input type="text" name="category" value={newProduct.category} onChange={handleInputChange} />
            </div>
            <button onClick={addProduct}>Add Product</button>

            {/* Render table with products */}
            <h3>Products</h3>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Quantity</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th>Category</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map(product => (
                        <tr key={product.id}>
                            <td>{product.name}</td>
                            <td>{product.quantity}</td>
                            <td>{product.description}</td>
                            <td>{product.price}</td>
                            <td>{product.category}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ProductForm;
