import React from 'react';
import { Link } from 'react-router-dom';
import { PhoneForwarded, BadgeIndianRupee, Truck, TicketXIcon, TableOfContents, Store } from 'lucide-react';

const Footer = () => {
    return (
        <>
            <footer className="bg-[#EBEAE1F0] m-6 rounded-[2rem]">
                <div className='flex items-center justify-between gap-4 py-4 pl-16 pr-24'>
                    <div className='flex items-center gap-4'>
                        <img src="/logo.svg" alt="logo" className='w-[20rem]' />
                    </div>
                    <div className="flex items-center gap-2">
                        <Link to="/" className="cursor-pointer bg-white relative inline-flex items-center justify-center gap-2 rounded-md text-[1rem] font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:text-[#8D0B41] hover:underline h-9 rounded-md px-3">
                            <svg className="lucide lucide-rocket text-cyan-500 dark:text-cyan-400" stroke-linejoin="round" stroke-linecap="round" stroke-width="2" stroke="#8D0B41" fill="none" viewBox="0 0 24 24" height="22" width="22" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path>
                                <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path>
                                <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path>
                                <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path>
                            </svg>
                            Home
                        </Link>
                        <Link to="/about" className="cursor-pointer bg-white relative inline-flex items-center justify-center gap-2 rounded-md text-[1rem] font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:text-[#60A5FA] hover:underline h-9 rounded-md px-3">
                            <svg className="lucide lucide-newspaper text-blue-400 dark:text-blue-600" stroke-linejoin="round" stroke-linecap="round" stroke-width="2" stroke="#60A5FA" fill="none" viewBox="0 0 24 24" height="22" width="22" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2"></path>
                                <path d="M18 14h-8"></path>
                                <path d="M15 18h-5"></path>
                                <path d="M10 6h8v4h-8V6Z"></path>
                            </svg>
                            About us
                        </Link>
                        <Link to="/blog" className="cursor-pointer bg-white relative inline-flex items-center justify-center gap-2 rounded-md text-[1rem] font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:text-[#578E7E] hover:underline h-9 rounded-md px-3">
                            <svg className="lucide lucide-sticky-note text-yellow-400 dark:text-yellow-600" stroke-linejoin="round" stroke-linecap="round" stroke-width="2" stroke="#578E7E" fill="none" viewBox="0 0 24 24" height="22" width="22" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15.5 3H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2V8.5L15.5 3Z"></path>
                                <path d="M15 3v6h6"></path>
                            </svg>
                            Blogs
                        </Link>
                        <Link to="/contact" className="cursor-pointer bg-white relative inline-flex items-center justify-center gap-2 rounded-md text-[1rem] font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:text-[#FB923C] hover:underline h-9 rounded-md px-3">
                            <PhoneForwarded size="22" stroke="#FB923C" />
                            Contact Us
                        </Link>
                    </div>
                </div>
                <div className='flex flex-col justify-between gap-4 py-4 px-24'>
                    <p className='text-[1rem] font-medium text-gray-800 dark:text-gray-900 text-justify ml-2'>
                        Bazario is a one-stop destination for all your shopping needs. With our fast and reliable delivery service, seamless online shopping experience, offering a wide range of products to cater to your every need. From fashion and electronics to home essentials, we bring you quality and affordability at your fingertips. Enjoy secure payments, fast delivery, and exceptional customer service every step of the way. At Bazario, we make shopping effortless and enjoyable, so you can focus on what matters most!
                    </p>
                    <div className='flex justify-between items-center gap-2 mt-4'>
                        <div className="flex items-center gap-2">
                            <Link className="cursor-pointer bg-white relative inline-flex items-center justify-center gap-2 rounded-md text-[1rem] font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:text-[#8D0B41] hover:underline h-9 rounded-md px-3">
                                <BadgeIndianRupee size="22" stroke="#8D0B41" />
                                Payments
                            </Link>
                            <Link className="cursor-pointer bg-white relative inline-flex items-center justify-center gap-2 rounded-md text-[1rem] font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:text-[#60A5FA] hover:underline h-9 rounded-md px-3">
                                <Truck size="22" stroke="#60A5FA" />
                                Shipping
                            </Link>
                            <Link className="cursor-pointer bg-white relative inline-flex items-center justify-center gap-2 rounded-md text-[1rem] font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:text-[#578E7E] hover:underline h-9 rounded-md px-3">
                                <TicketXIcon size="22" stroke="#578E7E" />
                                Cancellation & Returns
                            </Link>
                            <Link to="/faq" className="cursor-pointer bg-white relative inline-flex items-center justify-center gap-2 rounded-md text-[1rem] font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:text-[#FB923C] hover:underline h-9 rounded-md px-3">
                                <TableOfContents size="22" stroke="#FB923C" />
                                FAQ
                            </Link>
                        </div>
                        <div class="flex items-center gap-4">
                            <h1 className='text-[1rem] font-normal text-[#658DA6EB]'>Follow Us : </h1>
                            <div class="flex items-center gap-2">
                                <Link class="cursor-pointer bg-white relative inline-flex items-center justify-center gap-2 rounded-md text-[1rem] font-medium hover:text-[#8D0B41] h-9 rounded-md px-3">
                                    <img src="/facebook.svg" alt="facebook" className='w-6' />
                                    Facebook
                                </Link>
                                <Link class="cursor-pointer bg-white relative inline-flex items-center justify-center gap-2 rounded-md text-[1rem] font-medium hover:text-[#60A5FA] h-9 rounded-md px-3">
                                    <img src="/twitter.svg" alt="twitter" className='w-6' />
                                    Twitter
                                </Link>
                                <Link class="cursor-pointer bg-white relative inline-flex items-center justify-center gap-2 rounded-md text-[1rem] font-medium hover:text-[#578E7E] h-9 rounded-md px-3">
                                    <img src="/instagram.svg" alt="instagram" className='w-6' />
                                    Instagram
                                </Link>
                                <Link class="cursor-pointer bg-white relative inline-flex items-center justify-center gap-2 rounded-md text-[1rem] font-medium hover:text-[#FB923C] h-9 rounded-md px-3">
                                    <img src="/whatsapp.svg" alt="whatsapp" className='w-6' />
                                    Contact Us
                                </Link>
                                <Link class="cursor-pointer bg-white relative inline-flex items-center justify-center gap-2 rounded-md text-[1rem] font-medium hover:text-[#3E5879] h-9 rounded-md px-3">
                                    <img src="/youtube.svg" alt="youtube" className='w-6' />
                                    Youtube
                                </Link>
                                <Link class="cursor-pointer bg-white relative inline-flex items-center justify-center gap-2 rounded-md text-[1rem] font-medium hover:text-[#6A669D] h-9 rounded-md px-3">
                                    <img src="/thread.svg" alt="thread" className='w-6' />
                                    Thread
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex justify-between gap-4 py-4 px-24'>
                    <div className='flex flex-col gap-2 px-4 py-2'>
                        <h1 className='text-[1.5rem] font-semibold text-[#658DA6EB]'>FASHION</h1>
                        <ul className='flex flex-col gap-2'>
                            <li className='cursor-pointer hover:text-[#8D0B41] text-[1rem] font-medium text-gray-800 dark:text-gray-900 transition duration-300'>
                                Men's Fashion
                            </li>
                            <li className='cursor-pointer hover:text-[#8D0B41] text-[1rem] font-medium text-gray-800 dark:text-gray-900 transition duration-300'>
                                Women's Fashion
                            </li>
                            <li className='cursor-pointer hover:text-[#8D0B41] text-[1rem] font-medium text-gray-800 dark:text-gray-900 transition duration-300'>
                                Kid's Fashion
                            </li>
                            <li className='cursor-pointer hover:text-[#8D0B41] text-[1rem] font-medium text-gray-800 dark:text-gray-900 transition duration-300'>
                                Footwear
                            </li>
                            <li className='cursor-pointer hover:text-[#8D0B41] text-[1rem] font-medium text-gray-800 dark:text-gray-900 transition duration-300'>
                                Watches
                            </li>
                            <li className='cursor-pointer hover:text-[#8D0B41] text-[1rem] font-medium text-gray-800 dark:text-gray-900 transition duration-300'>
                                Fashion Assessories
                            </li>
                        </ul>
                    </div>
                    <div className='flex flex-col gap-2 px-4 py-2'>
                        <h1 className='text-[1.5rem] font-semibold text-[#658DA6EB]'>ELECTRONICS</h1>
                        <ul className='flex flex-col gap-2'>
                            <li className='cursor-pointer hover:text-[#8D0B41] text-[1rem] font-medium text-gray-800 dark:text-gray-900 transition duration-300'>
                                Mobiles
                            </li>
                            <li className='cursor-pointer hover:text-[#8D0B41] text-[1rem] font-medium text-gray-800 dark:text-gray-900 transition duration-300'>
                                Laptops
                            </li>
                            <li className='cursor-pointer hover:text-[#8D0B41] text-[1rem] font-medium text-gray-800 dark:text-gray-900 transition duration-300'>
                                Cameras
                            </li>
                            <li className='cursor-pointer hover:text-[#8D0B41] text-[1rem] font-medium text-gray-800 dark:text-gray-900 transition duration-300'>
                                Home Appliances
                            </li>
                            <li className='cursor-pointer hover:text-[#8D0B41] text-[1rem] font-medium text-gray-800 dark:text-gray-900 transition duration-300'>
                                Kitchen Appliances
                            </li>
                            <li className='cursor-pointer hover:text-[#8D0B41] text-[1rem] font-medium text-gray-800 dark:text-gray-900 transition duration-300'>
                                Assessories
                            </li>
                        </ul>
                    </div>
                    <div className='flex flex-col gap-2 px-4 py-2'>
                        <h1 className='text-[1.5rem] font-semibold text-[#658DA6EB]'>HOME & FURNITURE</h1>
                        <ul className='flex flex-col gap-2'>
                            <li className='cursor-pointer hover:text-[#8D0B41] text-[1rem] font-medium text-gray-800 dark:text-gray-900 transition duration-300'>
                                Kitchen & Dining
                            </li>
                            <li className='cursor-pointer hover:text-[#8D0B41] text-[1rem] font-medium text-gray-800 dark:text-gray-900 transition duration-300'>
                                Furniture
                            </li>
                            <li className='cursor-pointer hover:text-[#8D0B41] text-[1rem] font-medium text-gray-800 dark:text-gray-900 transition duration-300'>
                                Home Decor
                            </li>
                            <li className='cursor-pointer hover:text-[#8D0B41] text-[1rem] font-medium text-gray-800 dark:text-gray-900 transition duration-300'>
                                Furnishing
                            </li>
                            <li className='cursor-pointer hover:text-[#8D0B41] text-[1rem] font-medium text-gray-800 dark:text-gray-900 transition duration-300'>
                                Lamps & Lightings
                            </li>
                            <li className='cursor-pointer hover:text-[#8D0B41] text-[1rem] font-medium text-gray-800 dark:text-gray-900 transition duration-300'>
                                Home Improvement Tools
                            </li>
                            <li className='cursor-pointer hover:text-[#8D0B41] text-[1rem] font-medium text-gray-800 dark:text-gray-900 transition duration-300'>
                                Pet Supplies
                            </li>
                        </ul>
                    </div>
                    <div className='flex flex-col gap-2 px-4 py-2'>
                        <h1 className='text-[1.5rem] font-semibold text-[#658DA6EB]'>BEAUTY & HEALTH</h1>
                        <ul className='flex flex-col gap-2'>
                            <li className='cursor-pointer hover:text-[#8D0B41] text-[1rem] font-medium text-gray-800 dark:text-gray-900 transition duration-300'>
                                Makeup & Beauty Products
                            </li>
                            <li className='cursor-pointer hover:text-[#8D0B41] text-[1rem] font-medium text-gray-800 dark:text-gray-900 transition duration-300'>
                                Skincare & Haircare
                            </li>
                            <li className='cursor-pointer hover:text-[#8D0B41] text-[1rem] font-medium text-gray-800 dark:text-gray-900 transition duration-300'>
                                Fragrances & Deodorants
                            </li>
                            <li className='cursor-pointer hover:text-[#8D0B41] text-[1rem] font-medium text-gray-800 dark:text-gray-900 transition duration-300'>
                                Health & Wellness
                            </li>
                        </ul>
                    </div>
                    <div className='flex flex-col gap-2 px-4 py-2'>
                        <h1 className='text-[1.5rem] font-semibold text-[#658DA6EB]'>SPORTS & BOOKS</h1>
                        <ul className='flex flex-col gap-2'>
                            <li className='cursor-pointer hover:text-[#8D0B41] text-[1rem] font-medium text-gray-800 dark:text-gray-900 transition duration-300'>
                                Sports Equipments
                            </li>
                            <li className='cursor-pointer hover:text-[#8D0B41] text-[1rem] font-medium text-gray-800 dark:text-gray-900 transition duration-300'>
                                Books
                            </li>
                            <li className='cursor-pointer hover:text-[#8D0B41] text-[1rem] font-medium text-gray-800 dark:text-gray-900 transition duration-300'>
                                Stationary & Office Supplies
                            </li>
                            <li className='cursor-pointer hover:text-[#8D0B41] text-[1rem] font-medium text-gray-800 dark:text-gray-900 transition duration-300'>
                                Musical Instruments & Accessories
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='flex justify-between items-start py-4 px-24 mt-10'>
                    <p className='text-[1.15rem] font-normal text-gray-500 w-[50%] text-justify pr-28'>
                        Explore the best deals and latest trends at Bazario, your one-stop shop for quality products and seamless shopping. Shop smarter, live better with <strong className='text-[1.2rem] tracking-wide'>Bazario</strong>!
                    </p>
                    <div className='flex items-center gap-4 w-[50%]'>
                        <Link className="cursor-pointer bg-white relative inline-flex items-center justify-start gap-5 rounded-[1rem] text-[1rem] font-medium ring-offset-background transition-colors rounded-md p-3 w-[15rem] shadow-lg shadow-slate-500">
                            <img src="/playstore.svg" alt="facebook" className='w-9' />
                            <div className='flex flex-col gap-1 text-left'>
                                <p className='font-light text-[0.89rem] uppercase leading-3'>Get It On</p>
                                <p className='font-medium text-[1.70rem] leading-5'>Google play</p>
                            </div>
                        </Link>
                        <Link className="cursor-pointer bg-white relative inline-flex items-center justify-start gap-5 rounded-[1rem] text-[1rem] font-medium ring-offset-background transition-colors rounded-md p-3 w-[15rem] shadow-lg shadow-slate-500">
                            <img src="/apple.svg" alt="facebook" className='w-10' />
                            <div className='flex flex-col gap-1 text-left'>
                                <p className='font-light text-[0.89rem] uppercase leading-3'>Download on the</p>
                                <p className='font-medium text-[1.70rem] leading-5'>App Store</p>
                            </div>
                        </Link>
                        <Link className="cursor-pointer bg-white relative inline-flex items-center justify-start gap-5 rounded-[1rem] text-[1rem] font-medium ring-offset-background transition-colors rounded-md p-3 w-[15rem] shadow-lg shadow-slate-500">
                            <img src="/huawei.svg" alt="facebook" className='w-10' />
                            <div className='flex flex-col gap-1 text-left'>
                                <p className='font-light text-[0.89rem] uppercase leading-3'>Available on</p>
                                <p className='font-medium text-[1.70rem] leading-5'>App Gallery</p>
                            </div>
                        </Link>
                    </div>
                </div>
                <hr className='border-1 border-gray-200 mt-12 mx-32' />
                <div className="flex justify-between items-center text-gray-800 text-center py-4 px-24 my-10">
                    <Link className="cursor-pointer bg-white relative inline-flex items-center justify-center gap-2 rounded-md text-[1rem] font-medium hover:text-[#608BC1] h-9 rounded-md px-3">
                        <Store size="22" stroke="#133E87" />
                        Become a Seller
                    </Link>
                    <p className='text-[1.3rem] font-medium'><strong className='text-[1.5rem]'>©</strong> 2025 BAZARIO -- All right reserved.</p>
                    <div className='flex items-center justify-center gap-4'>
                        <Link className="cursor-pointer bg-white relative inline-flex items-center justify-center gap-2 rounded-md text-[1rem] font-medium hover:text-[#8D0B41] h-9 rounded-md px-3">
                            Privacy Policy
                        </Link>
                        <Link className="cursor-pointer bg-white relative inline-flex items-center justify-center gap-2 rounded-md text-[1rem] font-medium hover:text-[#60A5FA] h-9 rounded-md px-3">
                            Terms & Conditions
                        </Link>
                        <Link className="cursor-pointer bg-white relative inline-flex items-center justify-center gap-2 rounded-md text-[1rem] font-medium hover:text-[#578E7E] h-9 rounded-md px-3">
                            Refund Policy
                        </Link>
                        <Link className="cursor-pointer bg-white relative inline-flex items-center justify-center gap-2 rounded-md text-[1rem] font-medium hover:text-[#FB923C] h-9 rounded-md px-3">
                            Shipping Policy
                        </Link>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;