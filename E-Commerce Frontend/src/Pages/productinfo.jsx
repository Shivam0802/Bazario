import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Axios from "axios";
import Footer from "../Components/footer";
import Navbar from "../Components/navbar";

const ProductInfo = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await Axios.get(`https://fakestoreapi.com/products/${id}`);
                setProduct(response.data);
            } catch (error) {
                console.error("Error fetching product data:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchProduct();
    }, [id]);

    return (
        <>
            <Navbar />
            <section className="flex flex-col items-center justify-between m-6  rounded-[2.5rem] p-10">
                <div className="flex justify-between gap-16 mx-auto px-32">
                    {loading ? (
                        <div className="w-[30rem] h-[30rem] bg-gray-200 animate-pulse"></div>
                    ) : (
                        <img src={product.image} alt={product.title} className="w-[30rem] h-auto object-contain shadow-slate-900 shadow-2xl rounded-[1.5rem] p-10" />
                    )}
                    <div className=" flex flex-col justify-center gap-4 w-full overflow-y-auto bg-gradient-to-r from-[#ABBAAB] to-[#FFFFFF] px-28 shadow-zinc-900 shadow-2xl rounded-[1.5rem] overflow-x-hidden">
                        <h1 className={`text-[3rem] mt-16 text-gray-800 font-semibold ${loading ? 'bg-gray-200 animate-pulse w-3/4 h-10' : ''}`}>
                            {loading ? '' : product.title}
                        </h1>
                        <h2 className="text-[1.13rem] text-gray-500 flex items-center">
                            <strong className='font-semibold mr-2'>Rating: </strong>
                            {product.rating && product.rating.rate === 0 ? (
                                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="#CA7373" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-star">
                                    <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
                                </svg>
                            ) : (
                                Array.from({ length: Math.round(product.rating?.rate || 0) }, (_, i) => (
                                    <svg key={i} xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="#FAC67A" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-star">
                                        <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
                                    </svg>
                                ))
                            )}
                            <span className="text-gray-900 ml-2">
                                {product.rating && product.rating.rate} ({product.rating && product.rating.count}) Reviews
                            </span>
                        </h2>
                        <h3 className={`text-[2rem] font-medium text-green-900 ${loading ? 'bg-gray-200 animate-pulse w-1/4 h-8' : ''}`}>
                            &#8377; {loading ? '' : `${product.price}`}
                        </h3>
                        <h4 className={`text-xl font-semibold text-gray-900 ${loading ? 'bg-gray-200 animate-pulse w-1/2 h-6' : ''}`}>
                            {loading ? '' : `Category: ${product.category}`}
                        </h4>
                        
                        <h2 className={`text-[1.25rem] font-semibold text-gray-900 ${loading ? 'bg-gray-200 animate-pulse w-1/2 h-6' : ''}`}>
                            Select Quantity :
                            <select className="bg-gray-200 text-gray-900 rounded-md p-2 ml-2 w-[20%]">
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                        </h2>


                        <div className="flex flex-row gap-4">
                            <button className={`hover:bg-sky-800 text-gray-50 bg-sky-700 py-2 rounded-md w-full ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}>
                                Buy now
                            </button>
                            <button className={`hover:bg-sky-700 text-gray-50 bg-sky-800 py-2 rounded-md w-full ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}>
                                Add to cart
                            </button>
                        </div>
                        <h2 className={`flex flex-col my-10 text-[1.25rem] font-normal text-gray-900 ${loading ? 'bg-gray-200 animate-pulse w-full h-8' : ''}`}>
                            <strong className="font-semibold text-[1.58rem]">Description: </strong>
                            {loading ? '' : product.description}
                        </h2>
                    </div>
                </div>
            </section>
            <section className="flex flex-col items-center justify-between m-6  rounded-[2.5rem] p-10">
                <div className="flex justify-between gap-4 my-8">
                    <h2 className="text-[1.25rem] font-semibold text-gray-900">
                        Reveiws and Ratings
                    </h2>
                    <button className="hover:bg-sky-800 text-gray-50 bg-sky-700 py-2 px-4 rounded-md">
                        Write a review
                    </button>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default ProductInfo;
