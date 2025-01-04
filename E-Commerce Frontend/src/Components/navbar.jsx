import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, LogIn, Search, Text, ChevronDown } from "lucide-react";
import Select from "react-select";
import Axios from "axios";

const categoryList = [
  { id: 1, label: "Fashion", image: "/brand.svg" },
  { id: 2, label: "Electronics", image: "/electronics.svg" },
  { id: 3, label: "Bags", image: "/bag.svg" },
  { id: 4, label: "Footwear", image: "/sneakers.svg" },
  { id: 5, label: "Groceries", image: "/groceries.svg" },
  { id: 6, label: "Wellness", image: "/wellness.svg" },
  { id: 7, label: "Jewellery", image: "/jewelry.svg" },
  { id: 8, label: "Furniture", image: "/furniture.svg" },
  { id: 9, label: "Stationary", image: "/stationary.svg" },
];

 const navigationList = [
     { id: 1, label: "Fashion", image: "/brand.svg" , subCategories: [
         { id: 1, label: "Men's Fashion", image: "/menfashion.svg" },
         { id: 2, label: "Women's Fashion", image: "/womanfashion.svg" },
         { id: 3, label: "Kid's Fashion", image: "/kidfashion.svg" },
     ]},
     { id: 2, label: "Bags", image: "/bag.svg", subCategories: [
         { id: 1, label: "Backpacks", image: "/backpack.webp" },
         { id: 2, label: "Handbags", image: "/handbag.webp" },
         { id: 3, label: "Luggage", image: "/suitcase.webp" },
     ]},
     { id: 3, label: "Groceries", image: "/groceries.svg" },
     { id: 4, label: "Wellness", image: "/wellness.svg" },
     { id: 5, label: "Electronics", image: "/electronics.svg", subCategories: [
         { id: 1, label: "Mobiles", image: "/mobile-app.svg" },
         { id: 2, label: "Laptops", image: "/laptop-screen.svg" },
         { id: 3, label: "Smart Watches", image: "/digital-watch.svg" },
         { id: 4, label: "Cameras", image: "/camera.svg" },
         { id: 5, label: "Assessories", image: "/earphones.svg" },
     ]},
     { id: 6, label: "Furniture", image: "/furniture.svg" },
     { id: 7, label: "Stationary", image: "/stationary.svg" },
 ];

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isNavDropdownOpen, setIsNavDropdownOpen] = useState(null);
  const [countries, setCountries] = useState([]);
  const cartItems = [1, 2, 3, 4, 5];

  const handleDropdown = () => {
    setIsNavDropdownOpen(null);
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleNavDropdown = (id) => {
    setIsNavDropdownOpen(id);
};

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await Axios.get("https://restcountries.com/v3.1/all");
        const commonNames = response.data.map((country) => country.name.common);
        setCountries(commonNames);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <section className="bg-[#EBEAE1F0] text-gray-900 p-4 m-6 rounded-[2rem]">
        <header className="flex justify-between items-center container mx-auto my-2 px-10">
          <h1 className="text-2xl font-bold w-[15%]">
            <img src="/logo.svg" alt="logo" />
          </h1>
          <div className="bg-white flex flex-col justify-start w-[17%] rounded-[0.75rem] mt-6 border border-gray-300">
            <h2 className="text-[1rem] px-3 pt-1 text-gray-400 font-light">
              Your Location
            </h2>
            <Select
              options={[{ value: "all", label: "All" }, ...countries.sort().map((country) => ({ value: country, label: country })),]}
              placeholder="Select Location"
              className="w-full"
              styles={{control: (styles) => ({...styles,backgroundColor: "transparent", border: "none", boxShadow: "none",}),
                option: (styles, { isFocused, isSelected }) => ({
                  ...styles,backgroundColor: isSelected ? "#AB4459" : isFocused? "#F1F1F1" : "transparent",
                  color: isSelected ? "white" : "inherit",
                  fontSize: "1rem",
                }),
                menu: (styles) => ({ ...styles, backgroundColor: "white" }),
                menuList: (styles) => ({...styles, overflowY: "auto", scrollbarWidth: "none", msOverflowStyle: "none", }),
                placeholder: (styles) => ({...styles, color: "#AB4459", fontSize: "1.3rem"}),
                singleValue: (styles) => ({...styles, color: "#AB4459",fontSize: "1.3rem",}),
              }}
            />
          </div>
          <div className="flex items-center bg-white px-4 py-2 w-[40%] mx-10 rounded-[0.75rem] border border-gray-300">
            <input
              type="text"
              placeholder="Search"
              className="bg-transparent outline-none w-full placeholder-gray-500 text-black text-[1.15rem]"
            />
            <button className="bg-white rounded-full ml-2">
              <Search size={22} />
            </button>
          </div>
          <div className="flex justify-end items-center w-[15%]">
            <Link to="/login" className="flex gap-[0.5rem] items-center bg-[#8D0B41] text-white text-[1.15rem] px-4 py-2 rounded-full mr-4">
              <span className="ml-2">Sign In</span>
              <LogIn size={20} />
            </Link>
            <div className="relative inline-block">
              <button className="bg-[#FFCBCBA8] rounded-full p-3 ml-2">
                <ShoppingCart size={22} />
              </button>
              {cartItems.length > 0 && (
                <div className="absolute -top-1 -right-1 bg-red-600 text-white text-md font-normal w-5 h-5 flex items-center justify-center rounded-full">
                  {cartItems.length}
                </div>
              )}
            </div>
          </div>
        </header>
        <nav className="container mx-auto flex justify-between items-center mt-6 pl-12">
          <button
            onClick={handleDropdown}
            className={`relative flex gap-[0.5rem] items-center font-semibold text-white text-[0.93rem] tracking-wider uppercase px-4 py-2 rounded-full ${
              isDropdownOpen ? "bg-[#2C5127]" : "bg-[#829B68]"
            }`}
          >
            <Text size={17} className="inline-block" />
            All Categories
            <ChevronDown size={20} className="inline-block" />
          </button>
          {isDropdownOpen && (
            <div className="absolute top-[12.9rem] mt-2 bg-white w-[10%] min-w-[200px] rounded-md shadow-lg border border-gray-200">
              <ul className="flex flex-col py-2">
                {categoryList.map((category) => (
                  <Link to={`/category/${category.id}`} key={category.id}>
                    <li className="flex gap-[0.7rem] items-center block py-2 px-4 hover:bg-[#F1F1F1] hover:text-[#AB4459] text-[1.15rem] transition-colors">
                      <img src={category.image} alt={category.label} className="w-6 h-6 inline-block"/>
                      {category.label}
                    </li>
                  </Link>
                ))}
              </ul>
            </div>
          )}
          <ul className="flex">
            {navigationList.map((nav) => {
                return (
                    <li key={nav.id} className="mx-4 text-[1.15rem] text-gray-900 ">
                    <Link to="/" className="flex gap-[0.7rem] items-center font-semibold uppercase block py-2 px-4 hover:bg-[#F1F1F1] hover:text-[#AB4459] transition-colors rounded-lg" onMouseOver={() => handleNavDropdown(nav.id)}>
                        <img src={nav.image} alt={nav.label} className="w-6 h-6 inline-block"/>
                        {nav.label}
                    </Link>
                    {isNavDropdownOpen === nav.id && nav.subCategories && (
                        <div className="absolute top-[12.9rem] mt-2 bg-white w-[10%] min-w-[200px] rounded-md rounded-b-[1rem] shadow-lg border border-gray-200">
                        <ul className="flex flex-col py-2">
                            {nav.subCategories.map((subCategory) => (
                            <Link to={`/category/${subCategory.id}`} key={subCategory.id}>
                                <li className="flex gap-[0.7rem] items-center block py-2 px-4 hover:bg-[#F1F1F1] hover:text-[#AB4459] text-[1.10rem] font-normal transition-colors">
                                <img src={subCategory.image} alt={subCategory.label} className="w-6 h-6 inline-block"/>
                                {subCategory.label}
                                </li>
                            </Link>
                            ))}
                        </ul>
                        </div>
                    )}
                    </li>
                );
            })}
          </ul>
        </nav>
      </section>
    </>
  );
};

export default Navbar;
