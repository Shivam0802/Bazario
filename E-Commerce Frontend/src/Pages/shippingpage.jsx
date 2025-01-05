import React from 'react';
import Navbar from '../Components/navbar';
import Footer from '../Components/footer';

const ShippingInformation = [
    {
        id: 1,
        title: 'What are the delivery charges?',
        content: [
            'Delivery charges are the costs undertaken by the seller to deliver your order. The delivery charges are calculated based on the weight of the product and the delivery location. To know the delivery charges, please add the product to the cart and proceed to checkout. The delivery charges will be displayed on the checkout page.',
            '**Note : ** For orders above a certain value, we offer free delivery. Please check the product page for more details.'
        ]
    },
    {
        id: 2,
        title: 'What is the estimated delivery time?',
        content: [
            'The estimated delivery time is the time taken for the product to be delivered to your doorstep after the product has been dispatched from our warehouse. The estimated delivery time varies from product to product. Please check the product page for more details.',
            '**Note :** The estimated delivery time is calculated based on business days (excluding Sundays and public holidays).'
        ]
    },
    {
        id: 3,
        title: 'What is the difference between delivery time and dispatch time?',
        content: [
            'Dispatch time is the time taken for the seller to hand over the product to the courier for delivery. The dispatch time varies from product to product. Please check the product page for more details.',
            'Delivery time is the time taken for the product to be delivered to your doorstep after the product has been dispatched from our warehouse. The delivery time varies from product to product. Please check the product page for more details.'
        ]
    },
    {
        id: 4,
        title: 'What should I do if my order is delayed?',
        content: [
            'If your order is delayed, please check the estimated delivery time on the product page. If the estimated delivery time has passed and you have not received the product, please contact us at bazarioinfo@yopmail.com or call us at +91-1234567890. Our customer support team will assist you in tracking your order.',
            '**Note : ** The estimated delivery time is calculated based on business days (excluding Sundays and public holidays).',
            '**Note : ** The estimated delivery time is the time taken for the product to be delivered to your doorstep after the product has been dispatched from our warehouse.'
        ]
    },
    {
        id: 5,
        title: 'What should I do if the product is damaged during delivery?',
        content: [
            'If the product is damaged during delivery, please contact us at bazarioinfo@yopmail.com or call us at +91-1234567890 within 24 hours of receiving the product. Our customer support team will assist you in processing your request for a replacement or refund. Please provide your order details and a photo of the damaged product for verification.',
            '**Note : ** Please do not accept the delivery if the product is damaged. Please check the product before accepting the delivery.'
        ]
    },
    {
        id: 6,
        title: 'What should I do if the product is missing from the delivery?',
        content: [
            'If the product is missing from the delivery, please contact us at bazarioinfo@yopmail.com or call us at +91-1234567890 within 24 hours of receiving the product. Our customer support team will assist you in processing your request for a replacement or refund. Please provide your order details for verification.',
            '**Note : ** Please check the package contents before accepting the delivery.'
        ]
    },
    {
        id: 7,
        title: 'Seller does not/cannot ship to my area. Why?',
        content: [
            "Please enter your pincode on the product page (you don't have to enter it every single time) to know whether the product can be delivered to your location.",
            "If you haven't provided your pincode until the checkout stage, the pincode in your shipping address will be used to check for serviceability.",
            "Whether your location can be serviced or not depends on:",
            " - Whether the seller ships to your location",
            " - Legal restrictions, if any, in shipping particular products to your location",
            " - The availability of reliable courier partners in your location"
        ],
    },
    {
        id: 8,
        title: 'Why is the COD option not available for my order?',
        content: [
            'The COD option may not be available for your order due to one or more of the following reasons:',
            ' - The product is not eligible for COD',
            ' - The COD option is not available for your location',
            ' - The COD option is not available for the product',
            ' - The order value exceeds the maximum COD limit'
        ]
    },
    {
        id: 9,
        title: 'What do the different tags like "In Stock", "Available" mean?',
        content: [
            '**In Stock**: The product is available in the seller’s warehouse and can be dispatched within the estimated delivery time.',
            '**Available**: The product is available in the seller’s warehouse and can be dispatched within the estimated delivery time.',
            '**Out of Stock**: The product is not available in the seller’s warehouse and cannot be dispatched. You can add the product to your wishlist and we will notify you when it is back in stock.',
            '**Preorder**: The product is available for preorder. You can place an order for the product and it will be dispatched once it is available in the seller’s warehouse.',
            '**Upcoming**: The product is not available in the seller’s warehouse and cannot be dispatched. You can add the product to your wishlist and we will notify you when it is back in stock.',
            '**Sold Out**: The product is not available in the seller’s warehouse and cannot be dispatched. You can add the product to your wishlist and we will notify you when it is back in stock.',
            '**Discontinued**: The product is no longer available for sale. You can add the product to your wishlist and we will notify you if it is back in stock.',
            '**Temporarily Unavailable**: The product is not available in the seller’s warehouse and cannot be dispatched. You can add the product to your wishlist and we will notify you when it is back in stock.',
            '**Back in Stock Soon**: The product is not available in the seller’s warehouse and cannot be dispatched. You can add the product to your wishlist and we will notify you when it is back in stock.'
        ]
    }
];

const ShippingInfo = () => {
    return (
        <>
            <Navbar />
            <section className="flex flex-col mx-auto my-16 p-6 w-2/3 bg-gray-100 shadow-slate-900 shadow-2xl">
                <h2 className="text-[4rem] font-semibold text-[#3E5879] mb-6 ml-6">Shipping</h2>
                {ShippingInformation.map((post, index) => (
                    <div key={index} className="px-6 flex flex-col justify-between flex-grow">
                        <h2 className="text-[1.8rem] font-medium text-gray-800 mb-2 mt-4"><strong>➸</strong> {post.title}</h2>
                        <p className="text-[1.2rem] text-gray-700 leading-relaxed text-justify mb-6 ml-4 text-justify">
                            {post.content.map((content, idx) => (
                                <span key={idx}>
                                    {content.split('**').map((part, i) => (
                                        i % 2 === 1 ? <strong key={i} className='text-[1.24rem] text-[#1B1833]' style={{ fontWeight: '600' }}>{part}</strong> : part
                                    ))}
                                    <br />
                                </span>
                            ))}
                        </p>
                    </div>
                ))}
            </section>
            <Footer />
        </>
    );
};

export default ShippingInfo;
