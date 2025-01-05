import React from 'react';
import Navbar from '../Components/navbar';
import Footer from '../Components/footer';

const PaymentInformation = [
    {
        id: 1,
        title: 'How do I pay for a Bazario purchase?',
        content: [
            'Bazario offers multiple payment methods. You can rest assured that our trusted payment gateway partners use secure encryption technology to keep your transaction details confidential at all times.',
            ' - **Internet Banking**',
            ' - **Gift Card**',
            ' - **Cash on Delivery**',
            ' - **Wallet**',
            'We also accept payments made using **Visa**, **MasterCard**, **Maestro**, and **American Express** credit/debit cards in India and 21 other countries.'
        ]
    },
    {
        id: 2,
        title: 'Are there any hidden charges?',
        content: [
            'There are no hidden charges when you make a purchase on Bazario. The prices listed for all items are final and all-inclusive. Delivery charges may be extra depending on the seller policy. Please check individual seller details.',
            'The price you see on the checkout page is the price you pay.'
        ]
    },
    {
        id: 3,
        title: 'What is Cash on Delivery?',
        content: [
            'If you are not comfortable making an online payment, you can opt for the **Cash on Delivery (C-o-D)** payment method. With C-o-D, you pay in cash at the time of actual delivery of the product at your doorstep.',
            'Maximum order value for C-o-D is ₹50,000. Only Indian Rupees accepted.'
        ]
    },
    {
        id: 4,
        title: 'How do I pay using a credit/debit card?',
        content: [
            'We accept payments made by credit/debit cards issued in India and 21 other countries.',
            '**Credit Cards**',
            'We accept **Visa**, **MasterCard**, and **American Express**. Enter your card details at checkout and follow the prompts to complete the payment.',
            '**Debit Cards**',
            'We accept **Visa**, **MasterCard**, and **Maestro**. Enter your card details and complete the payment through your bank\'s secure page.'
        ]
    },
    {
        id: 5,
        title: 'Is it safe to use my credit/debit card on Bazario?',
        content: [
            'Your online transaction on Bazario is secure with the highest levels of transaction security. We use 256-bit encryption technology to protect your card information.'
        ]
    },
    {
        id: 6,
        title: 'What steps does Bazario take to prevent card fraud?',
        content: [
            'We monitor transactions continuously for suspicious activity and flag potentially fraudulent transactions for manual verification. In rare cases, we may request identity documents for verification.'
        ]
    },
    {
        id: 7,
        title: 'What is a 3D Secure password?',
        content: [
            'The **3D Secure password** adds an additional layer of security for your online transactions. You can register for it through your bank\'s website.'
        ]
    },
    {
        id: 8,
        title: 'Can I use Internet Banking to make a payment?',
        content: [
            'Yes, you can use your bank\'s **Internet Banking** service to make a secure payment directly from your bank account.'
        ]
    },
    {
        id: 9,
        title: 'Can I make a payment through my mobile?',
        content: [
            'Yes, you can make payments through the Bazario mobile site and app with secure encryption technology.'
        ]
    },
    {
        id: 10,
        title: 'How does \'Instant Cashback\' work?',
        content: [
            '\'**Cashback**\' offers are instant and exclusive to Bazario. You only pay the final price displayed in your cart.'
        ]
    },
    {
        id: 11,
        title: 'How do I place a Cash on Delivery order?',
        content: [
            'Items with the "**Cash on Delivery Available**" icon are valid for C-o-D. Select "**Pay By Cash on Delivery**" at checkout, complete the CAPTCHA, and your order will be processed for shipment.'
        ]
    },
    {
        id: 12,
        title: 'What is Bazario\'s credit card EMI option?',
        content: [
            'With Bazario\'s credit card **EMI** option, you can pay in easy installments. Check with your bank for available plans and interest rates.'
        ]
    }
]

const PaymentInfo = () => {
    return (
        <>
            <Navbar />
            <section className="flex flex-col mx-auto my-16 p-6 w-2/3 bg-gray-100 shadow-slate-900 shadow-2xl">
               <h2 className="text-[4rem] font-semibold text-[#3E5879] mb-6 ml-6">Payment</h2>
                {PaymentInformation.map((post, index) => (
                        <div key={index} className="px-6 flex flex-col justify-between flex-grow">
                            <h2 className="text-[1.8rem] font-medium text-gray-800 mb-2 mt-4"><strong>➸</strong> {post.title}</h2>
                            <p className="text-[1.2rem] text-gray-700 leading-relaxed text-justify mb-6 ml-4 text-justify">
                                {post.content.map((content, idx) => (
                                    <span key={idx}>
                                        {content.split('**').map((part, i) => (
                                            i % 2 === 1 ? <strong key={i} className='text-[1.24rem] text-[#1B1833]' style={{fontWeight: '600'}}>{part}</strong> : part
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

export default PaymentInfo;
