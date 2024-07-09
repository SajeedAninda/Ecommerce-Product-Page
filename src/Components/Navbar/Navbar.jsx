import React from 'react';
import logo from "../../assets/logo.svg"
import avatar from "../../assets/image-avatar.png";
import cartIcon from "../../assets/icon-cart.svg";
import "./navbar.css";
import thumbnailImage1 from "../../assets/image-product-1-thumbnail.jpg";
import deleteIcon from "../../assets/icon-delete.svg"

const Navbar = () => {
    return (
        <div className='h-[15vh] w-full flex items-center relative'>
            <div className='w-[85%] mx-auto flex justify-between items-center border-b border-gray-200 py-8'>
                <div className='flex gap-16 w-[65%]'>
                    <img className='cursor-pointer' src={logo} alt="Logo" />

                    <ul className='flex gap-8 items-center h-full'>
                        <li className='relative text-[#687078] cursor-pointer hover:text-[#1d2025] h-full flex items-center'>
                            Collections
                            <span className='hover-border'></span>
                        </li>
                        <li className='relative text-[#687078] cursor-pointer hover:text-[#1d2025] h-full flex items-center'>
                            Men
                            <span className='hover-border'></span>
                        </li>
                        <li className='relative text-[#687078] cursor-pointer hover:text-[#1d2025] h-full flex items-center'>
                            Women
                            <span className='hover-border'></span>
                        </li>
                        <li className='relative text-[#687078] cursor-pointer hover:text-[#1d2025] h-full flex items-center'>
                            About
                            <span className='hover-border'></span>
                        </li>
                        <li className='relative text-[#687078] cursor-pointer hover:text-[#1d2025] h-full flex items-center'>
                            Contact
                            <span className='hover-border'></span>
                        </li>
                    </ul>
                </div>

                <div className='flex justify-end w-[35%] items-center gap-8'>
                    <div className=''>
                        <img className='cursor-pointer w-[25px]' src={cartIcon} alt="Cart Icon" />
                        <div className='bg-white w-[400px] h-fit  absolute top-20 right-10 rounded-xl cartDetails'>
                            <div className='border-b border-gray-300'>
                                <p className='text-[#1d2025] p-8 font-bold'>Cart</p>
                            </div>

                            <div className='flex gap-3 items-center p-8'>
                                <img className='w-[65px] rounded-lg' src={thumbnailImage1} alt="" />
                                <div className='flex flex-col'>
                                    <p className='text-[#687078]'>Fall Limited Edition Sneakers</p>
                                    <div className='flex gap-3'>
                                        <p className='text-[#687078]'>$125.00 X 1</p>
                                        <p className='text-[#1d2025] font-bold'>$125.00</p>
                                    </div>
                                </div>
                                <img className='ml-4 w-[15px] cursor-pointer' src={deleteIcon} alt="" />
                            </div>
                        </div>
                    </div>
                    <img className='cursor-pointer w-[40px] rounded-full hover:border-2 hover:border-[#E88030] transition-colors duration-200' src={avatar} alt="Avatar" />
                </div>
            </div>
        </div>
    );
};

export default Navbar;
