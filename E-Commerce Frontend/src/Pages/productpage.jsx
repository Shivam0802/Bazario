import React, { useState, useEffect } from 'react';
import Navbar from '../Components/navbar';
import Footer from '../Components/footer';
import ProductCard from '../Components/productCard';
import Axios from 'axios';

const ProductPage = () => {
     const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await Axios.get("https://fakestoreapi.com/products");
                setProducts(response.data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, []);
    return (
        <>
            <Navbar />
            <div className="my-8 mx-28 grid grid-cols-5 gap-8">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
            <Footer />
        </>
    );
};

export default ProductPage;