import React, { useState } from "react";
import Navbar from "../Components/navbar";
import Footer from "../Components/footer";
import { PhoneCall, Mails, MapPinHouse, AlarmClock, Plus, Minus, ArrowBigUpDash } from "lucide-react";

export const FAQ = [
    { id: 1, question: "What is Bazario?", answer: "Bazario is an online shopping platform designed to provide customers with a wide range of products, including electronics, fashion, home appliances, and more. Our aim is to deliver a seamless and enjoyable shopping experience by offering quality products, exciting deals, and exceptional service." },
    { id: 2, question: "How do I place an order?", answer: "Placing an order on Bazario is simple and convenient. You can browse through our extensive catalog, select the items you wish to purchase, and add them to your cart. Once you’ve finalized your selection, proceed to checkout, where you’ll need to provide your delivery address and payment details. After confirming the order, you’ll receive an email or SMS notification with all the relevant details." },
    { id: 3, question: "What payment methods are accepted on Bazario?", answer: "Bazario offers flexibility in payments by accepting various methods such as credit and debit cards, net banking, UPI options like Google Pay and PhonePe, and digital wallets. For those who prefer paying at the time of delivery, we also provide a Cash on Delivery (COD) option." },
    { id: 4, question: "How can I track my order?", answer: "Tracking your order on Bazario is effortless. Once your order is shipped, we’ll send you a tracking ID via email or SMS. You can use this ID in the 'Track Order' section of our website or app to get real-time updates on your package's delivery status." },
    { id: 5, question: "What is Bazario’s return policy?", answer: "We want you to be completely satisfied with your purchases. Most products on Bazario are eligible for a hassle-free 7-day return policy. If you’re unhappy with your purchase, you can initiate a return by visiting the 'My Orders' section of your account. Ensure that the product is in its original condition with all accessories and packaging intact before returning." },
    { id: 6, question: "How can I contact Bazario’s customer support?", answer: "Our customer support team is here to assist you with any queries or issues. You can contact us by calling our helpline at +91 988-709-3658 or emailing us at support@bazario.com. Additionally, a live chat option is available on our website for quick assistance." },
    { id: 7, question: "How can I sell my products on Bazario?", answer: "If you’re a seller looking to list your products on Bazario, you can register as a seller on our platform. Simply visit the 'Sell on Bazario' section and follow the steps to create your seller account. Once your account is verified, you can start listing your products and reaching a wider audience." },
    { id: 8, question: "Does Bazario offer discounts or promotions?", answer: "Yes, Bazario frequently runs discounts, seasonal sales, and promotional offers to ensure you get the best value for your money. To stay updated on the latest deals and exclusive offers, subscribe to our newsletter or follow us on our social media channels." },
    { id: 9, question: "Are there any shipping charges?", answer: "We offer free shipping for orders above ₹500. For orders below this amount, a minimal shipping fee will be added during checkout. This allows us to maintain competitive pricing and quality service." },
    { id: 10, question: "Can I cancel my order?", answer: "If you wish to cancel your order, you can do so before it is shipped. Visit the 'My Orders' section in your account, select the order you want to cancel, and confirm the cancellation. If the order has already been shipped, you will need to wait until it is delivered to initiate a return." },
    { id: 11, question: " Is it safe to shop on Bazario?", answer: "Yes, shopping on Bazario is completely safe. We use secure payment gateways and advanced encryption technology to ensure your personal and financial information is protected at all times. You can shop with confidence knowing that your privacy is our priority." }
]

const ContactPage = () => {

    const [accordian, setAccordian] = useState(false);

    const handleAccordion = (id) => {
        setAccordian(prevState => (prevState === id ? null : id));
    };

    const scrollToTopButton = document.getElementById('scrollToTopButton');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 200) {
            scrollToTopButton.classList.remove('opacity-0');
            scrollToTopButton.classList.add('opacity-100');
        } else {
            scrollToTopButton.classList.remove('opacity-100');
            scrollToTopButton.classList.add('opacity-0');
        }
    });

    return (
        <>
            <Navbar />
            <section className="flex flex-col items-center justify-between m-6 bg-gradient-to-r from-[#93A5CF] to-[#F5F7FA] rounded-[2.5rem] p-10 pb-20">
                <div className="flex flex-col items-center justify-center">
                    <h1 className="text-[4rem] font-semibold text-black font-manrope">Contact Us</h1>
                    <p className="text-lg font-normal text-gray-900 text-center mt-10 mb-16 mx-40">
                        Get in touch with us for any queries, feedback, or support. We are here to assist you and ensure you have the best experience possible.
                        Feel free to reach out to us through the contact form below, or via the provided phone number and email address. We look forward to hearing from you!
                    </p>
                </div>
                <section class="rounded-[2rem] p-10 lg:px-20 w-full">
                    <div class="mx-auto max-w-[85rem]">
                        <div class="flex lg:flex-row flex-col lg:gap-0 gap-10 shadow-slate-900 shadow-2xl rounded-[2rem]">
                            <div class="lg:mb-0 mb-10 w-full">
                                <div class="group w-full h-full">
                                    <div class="relative h-full">
                                        <img src="/contact.webp" alt="ContactUs" class="w-full h-[40rem] rounded-l-[2rem] bg-blend-multiply bg-indigo-700" />
                                        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-80 rounded-l-[2rem]"></div>
                                        <div class="absolute bottom-0 w-full lg:p-9 p-5 grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div class="bg-[#F8FAFC] rounded-lg p-6 flex items-center h-[6.5rem]">
                                                <PhoneCall color="#3C3D37" size={30} />
                                                <div class="flex flex-col ml-5">
                                                    <h5 class="text-[#677D6A] text-base font-medium leading-6">Call Us</h5>
                                                    <a href="tel: +91 788 779 3648" class="text-black text-[1.2rem] font-semibold leading-6 "> +91 988-709-3658</a>
                                                </div>
                                            </div>
                                            <div class="bg-white rounded-lg p-6 flex items-center h-[6.5rem]">
                                                <Mails color="#3C3D37" size={30} />
                                                <div class="flex flex-col ml-5">
                                                    <h5 class="text-[#677D6A] text-base font-medium leading-6">Email Us</h5>
                                                    <a href="mailto: bazario@yopmail.com" class="text-black text-[1.2rem] font-semibold leading-6 ">
                                                        bazario@yopmail.com
                                                    </a>
                                                </div>
                                            </div>
                                            <div class="bg-white rounded-lg p-6 flex items-center h-[6.5rem]">
                                                <AlarmClock color="#3C3D37" size={30} />
                                                <div class="flex flex-col ml-5">
                                                    <h5 class="text-[#677D6A] text-base font-medium leading-6">Open Hours</h5>
                                                    <h5 class="text-black text-[1.2rem] font-semibold leading-6 ">Monday - Friday</h5>
                                                    <h5 class="text-black text-[1.2rem] font-semibold leading-6 ">9:00 AM - 6:00 PM</h5>
                                                </div>
                                            </div>
                                            <div class="bg-white rounded-lg p-6 flex items-center h-[6.5rem]">
                                                <MapPinHouse color="#3C3D37" size={48} />
                                                <div class="flex flex-col ml-5">
                                                    <h5 class="text-[#677D6A] text-base font-medium leading-6">Visit Us</h5>
                                                    <h5 class="text-black text-[1.2rem] font-semibold leading-6">C 8/7, Vasant Vihar, Delhi 110057, India</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="bg-gray-50 p-5 lg:p-11 rounded-r-[2rem] w-full">
                                <h2 class="text-[#3C3D37] text-[3rem] font-semibold leading-10 mb-11 ml-6">
                                    Contact Us Now !
                                </h2>
                                <form class="px-7 grid items-center">
                                    <div class="grid gap-6" id="form">
                                        <div class="w-full flex gap-3">
                                            <input class="capitalize shadow-2xl p-3 ex w-full outline-none focus:border-solid focus:border-[1px] border-[#035ec5] placeholder:text-gray-600" type="text" placeholder="First Name" id="First-Name" name="First-Name" required="" />
                                            <input class="p-3 capitalize shadow-2xl glass w-full placeholder:text-gray-600 outline-none focus:border-solid focus:border-[1px] border-[#035ec5]" type="text" placeholder="Last Name" id="Last-Name" name="Last-Name" />
                                        </div>
                                        <div class="grid gap-6 w-full">
                                            <input class="p-3 shadow-2xl glass w-full placeholder:text-gray-600 outline-none focus:border-solid border-[#035ec5] focus:border-[1px]" type="Email" placeholder="Email" id="Email" name="email" />
                                            <input class="p-3 shadow-2xl glass w-full text-black outline-none focus:border-solid focus:border-[1px]border-[#035ec5]" type="date" required="" />
                                        </div>
                                        <textarea placeholder="Message" id="Message" class="p-3 glass shadow-2xl w-full h-[10rem] placeholder:text-gray-600 outline-none focus:border-solid focus:border-[1px] border-[#035ec5]" />
                                        <button class="relative px-10 py-3.5 overflow-hidden group bg-gradient-to-r from-gray-700 to-black relative hover:bg-gradient-to-r hover:from-gray-600 hover:to-black text-white transition-all ease-out duration-300">
                                            <span class="absolute right-0 w-10 h-full top-0 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 -skew-x-12 group-hover:-translate-x-36 ease"></span>
                                            <span class="relative text-[1.25rem] font-medium uppercase tracking-widest">Submit</span>
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section >
            </section >
            <section className="flex items-center justify-between m-6 bg-gradient-to-r from-[#f4f4f4] via-[#f4f4f4] to-[#304352] rounded-[2.5rem] p-10 pb-20">
                <img src="/faq.webp" alt="FAQ" className="w-[40%] h-auto" />
                <div className="flex flex-col items-center justify-around w-full">
                    <h1 className="text-[4rem] font-semibold text-black font-manrope">Frequently asked question</h1>
                    <p className="text-lg font-normal text-gray-900 text-center mt-10 mb-16 mx-40">
                        Here are some of the most frequently asked questions.
                    </p>
                    <div className="flex flex-col items-center justify-center w-[90%] pl-20">
                        {
                            FAQ.slice(0, 5).map((item) => (
                                <div key={item.id} className="flex flex-col items-start justify-center w-full bg-white shadow-slate-900 shadow-2xl mb-5">
                                    <div className="flex items-center justify-between w-full py-3 px-5">
                                        <h1 className="text-[1.25rem] font-medium text-[#3C3D37] pl-2">{item.question}</h1>
                                        {
                                            accordian === item.id ? <Minus color="#3C3D37" size={24} onClick={() => handleAccordion(item.id)} className="cursor-pointer" /> : <Plus color="#3C3D37" size={24} onClick={() => handleAccordion(item.id)} className="cursor-pointer" />
                                        }
                                    </div>
                                    <div className={`bg-[#CADCD9]  transition-all duration-300 ease-in-out overflow-hidden ${accordian === item.id ? 'max-h-[200px] opacity-100' : 'max-h-0 opacity-0'}`}>
                                        <p className="text-[1.10rem] font-normal text-[#3C3D37] pl-2 m-6">{item.answer}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>
            <button id="scrollToTopButton" className="bg-[#3C3D37] rounded-full w-12 h-12 flex justify-center items-center fixed bottom-10 right-10 cursor-pointer hover:shadow-2xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
                <ArrowBigUpDash size="28" className="text-white" />
            </button>
            <Footer />
        </>
    );
};

export default ContactPage;