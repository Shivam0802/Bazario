import React from "react";
import { Link } from "react-router-dom";

const Registerpage = () => {

    const [formData, setFormData] = React.useState({
        name: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    const handleValidation = () => {
        const { name, email, phone, password, confirmPassword } = formData;
        
        if (!name || !email || !phone || !password || !confirmPassword) {
            return false;
        } else if (password !== confirmPassword) {
            return false;
        } else if (phone.length !== 10 && isNaN(phone) && !name.test(/^\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/) ) {
            return false;
        } else if (!email.includes('@') && !email.includes('.') && !email.test(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
            return false;
        } else if (password.length < 6 && !password.test(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)) {
            return false;
        } else if (confirmPassword.length < 6 && !confirmPassword.test(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/) && password !== confirmPassword) {
            return false;
        } else if (name.length < 3 && !name.test(/^[a-zA-Z]+$/) && name.length > 20) {
            return false;
        }

        return true;
    };
    return (
        <>
            <div className={`min-h-screen bg-gray-100 text-gray-900 flex justify-center items-center`}
                style={{
                    backgroundImage: 'url(/background.svg)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                }}
            >
                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-90"></div>
                <div className="absolute max-w-screen-xl h-fit m-0 sm:m-10 lg:my-28 bg-white shadow sm:rounded-lg flex justify-center">
                    <div className={`bg-gray-200 flex justify-center bg-slate-800`}>
                        <div className="bg-white p-6 shadow-lg w-full dark:bg-slate-100">
                            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                                <div className="text-2xl text-teal-800 font-semibold capitalize text-center mb-4">
                                    <h3>Welcome to Bazario!</h3>
                                    <p className="text-[1.12rem] font-normal text-gray-400">
                                        Register to your account
                                    </p>
                                </div>
                                <div>
                                    <div>
                                        <div className="capitalize mb-1">
                                            <label className='text-[1.12rem]'>name</label>
                                        </div>
                                        <div className="border-2 relative">
                                            <span className="absolute px-2 inset-y-0 left-0 flex items-center text-gray-400">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-5">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                                                </svg>
                                            </span>
                                            <input
                                                value={formData.name}
                                                onChange={handleChange}
                                                name="name"
                                                className="w-full placeholder:capitalize pl-8 pr-4 py-1.5 outline-blue-800 text-[1.2rem]" type="text" placeholder="enter name"
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="capitalize text-xl mb-1">
                                            <label className='text-[1.12rem]'>Email</label>
                                        </div>
                                        <div className="border-2 relative">
                                            <span className="absolute px-2 inset-y-0 left-0 flex items-center text-gray-400">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
                                            </span>
                                            <input
                                                value={formData.email}
                                                onChange={handleChange}
                                                name="email"
                                                className="w-full placeholder:capitalize pl-8 pr-4 py-1.5 outline-blue-800 text-[1.2rem]" type="text" placeholder="enter email"
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className='mt-4'>
                                        <div className="capitalize text-xl mb-1">
                                            <label className='text-[1.12rem]'>phone number</label>
                                        </div>
                                        <div className="border-2 relative">
                                            <span className="absolute px-2 inset-y-0 left-0 flex items-center text-gray-400">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                                            </span>
                                            <hr className="absolute inset-y-0 left-[2rem] border-gray-400" />
                                            <div className="text-gray-400 absolute inset-y-0 left-[2rem] flex items-center px-2 gap-2">
                                                <img src="/india.png" alt="india" className="w-5 h-5" />
                                                +91
                                            </div>
                                            <hr className="absolute inset-y-0 left-[8rem] border-gray-400" />
                                            <input
                                                value={formData.phone}
                                                onChange={handleChange}
                                                name="phone"
                                                className="w-full placeholder:capitalize pl-28 pr-4 py-1.5 outline-blue-800 text-[1.2rem]" type="text" placeholder="enter phone number"
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="mt-4">
                                        <div className="capitalize text-xl mb-1">
                                            <label className='text-[1.12rem]'>password</label>
                                        </div>
                                        <div className="border-2 relative">
                                            <span className="absolute px-2 inset-y-0 left-0 flex items-center text-gray-400">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-5">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
                                                </svg>
                                            </span>
                                            <input
                                                value={formData.password}
                                                onChange={handleChange}
                                                name="password"
                                                className="w-full placeholder:capitalize pl-8 pr-4 py-1.5 outline-blue-800 text-[1.2rem]" type="password" placeholder="enter password"
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="mt-4">
                                        <div className="capitalize text-xl mb-1">
                                            <label className='text-[1.12rem]'>confirm password</label>
                                        </div>
                                        <div className="border-2 relative">
                                            <span className="absolute px-2 inset-y-0 left-0 flex items-center text-gray-400">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-5">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
                                                </svg>
                                            </span>
                                            <input
                                                value={formData.confirmPassword}
                                                onChange={handleChange}
                                                name="confirmPassword"
                                                className="w-full placeholder:capitalize pl-8 pr-4 py-1.5 outline-blue-800 text-[1.2rem]" type="password" placeholder="confirm password"
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="sm:flex sm:justify-between flex-col inline-block my-4">
                                        <div className="flex">
                                            <input className="text-blue-800" type="checkbox" checked />
                                            <span className="pl-1">
                                                I agree to the
                                                <Link to="#" className="text-blue-800 hover:underline"> Terms & Conditions</Link>
                                            </span>
                                        </div>
                                        <div className="flex">
                                            <input className="text-blue-800" type="checkbox" checked />
                                            <span className="pl-1">
                                                I agree to the
                                                <Link to="#" className="text-blue-800 hover:underline"> Privacy Policy</Link>
                                            </span>
                                        </div>
                                    </div>
                                    <div>
                                        <button type="submit" className="bg-blue-800 text-xl text-white font-medium uppercase p-2 rounded-lg w-full opacity-90 hover:opacity-100">Sign Up</button>
                                    </div>
                                    <div className="text-[18px] text-center mt-4">
                                        <p>Already have an account? <Link className="capitalize text-blue-800 hover:underline cursor-pointer" to="/login">login</Link></p>
                                    </div>
                                </div>
                            </form>
                            <div className="flex items-center space-x-2 mt-4">
                                <hr className="flex-grow border-zinc-200 dark:border-zinc-700" />
                                <span className="text-zinc-400 dark:text-zinc-700 text-sm">OR</span>
                                <hr className="flex-grow border-zinc-200 dark:border-zinc-700" />
                            </div>
                            <div className="flex flex-col md:flex-row gap-4 mt-3">
                                <button
                                    className="relative inline-flex w-full items-center justify-center rounded-md border border-gray-400 bg-white px-3.5 py-2.5 font-semibold text-gray-700 transition-all duration-200 hover:bg-gray-100 hover:text-black focus:bg-gray-100 focus:text-black focus:outline-none"
                                    type="submit"
                                >
                                    <span className="mr-2 inline-block">
                                        <svg
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-6 w-6 text-rose-500"
                                        >
                                            <path
                                                d="M20.283 10.356h-8.327v3.451h4.792c-.446 2.193-2.313 3.453-4.792 3.453a5.27 5.27 0 0 1-5.279-5.28 5.27 5.27 0 0 1 5.279-5.279c1.259 0 2.397.447 3.29 1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233a8.908 8.908 0 0 0-8.934 8.934 8.907 8.907 0 0 0 8.934 8.934c4.467 0 8.529-3.249 8.529-8.934 0-.528-.081-1.097-.202-1.625z"
                                            ></path>
                                        </svg>
                                    </span>
                                    Sign in with Google
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Registerpage;