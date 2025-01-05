import React from 'react';
import Navbar from '../Components/navbar';
import Footer from '../Components/footer';

const CancellationInformation = [
    {
        id: 1,
        title: 'Can I modify/change the specification for the ordered product without cancelling it?',
        content: [
            'No, you cannot modify/change the specification for the ordered product without cancelling it. If you want to modify/change the specification for the ordered product, you need to cancel the order and place a new order with the desired specification.',
        ]
    },
    {
        id: 2,
        title: 'Can I cancel the order?',
        content: [
            'Yes, you can cancel the order. However, you can only cancel the order within 24 hours of placing the order. After 24 hours, you cannot cancel the order. If you want to cancel the order, you can contact our customer service team at ',
            '**bazarioinfo@yopmail.com**',
            '.', 'Our customer service team will help you cancel the order.',
            'If you want to cancel the order, you need to provide the order number. Our customer service team will help you cancel the order.'
        ]
    },
    {
        id: 3,
        title: 'Can I reinsate a cancel order?',
        content: [
            "No, you cannot reinstate a cancel order. Once you cancel the order, it cannot be reinstated. If you want to order the product again, you need to place a new order.",
            "If you want to order the product again, you can visit our website and place a new order."
        ]
    },
    {
        id: 4,
        title: 'Why i am getting charged for cancellation? / What is cancellation Fee?',
        content: [
            'Cancellation fee is a charge that is applied when you cancel the order. The cancellation fee is applied to cover the cost of processing the order and the cost of shipping the product..',
            'If you cancel the order within 24 hours, you will be charged a cancellation fee. The cancellation fee is applied to cover the cost of processing the order and the cost of shipping the product.',
            'The reason is to compensate for the time and effort incurred in processing the order by the seller. Also, to compensate our logistics partner for incurring a cost when they ship the order, if the order is shipped.',
        ]
    },
    {
        id: 5,
        title: 'How long does it take to cancel an order?',
        content: [
            'If the seller hasn’t shipped the order, it will be cancelled immediately. If already shipped, cancellation occurs once the courier confirms the return.',
            'In some cases, a cancellation fee may apply if cancelled after the specified time. Cancellation windows vary by category, and doorstep cancellations may also incur fees. Please check the product page for details.'
        ]
    }
];

const CancellationInfo = () => {
    return (
        <>
            <Navbar />
            <section className="flex flex-col mx-auto my-16 p-6 w-2/3 bg-gray-100 shadow-slate-900 shadow-2xl">
                <h2 className="text-[4rem] font-semibold text-[#3E5879] mb-6 ml-6">Cancellation and Return</h2>
                {CancellationInformation.map((post, index) => (
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

export default CancellationInfo;
