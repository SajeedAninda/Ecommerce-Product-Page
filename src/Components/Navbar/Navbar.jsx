import React, { useState } from 'react';
import logo from "../../assets/logo.svg"
import avatar from "../../assets/image-avatar.png";
import cartIcon from "../../assets/icon-cart.svg";
import "./navbar.css";
import thumbnailImage1 from "../../assets/image-product-1-thumbnail.jpg";
import deleteIcon from "../../assets/icon-delete.svg"
import menuBar from "../../assets/icon-menu.svg"
import iconClose from "../../assets/icon-close.svg"

const Navbar = ({ quantity, setQuantity }) => {
    let [openCart, setOpenCart] = useState(false);
    let [menuOpen, setMenuOpen] = useState(false);

    let handleOpenCart = () => {
        setOpenCart(!openCart);
    }

    let handleMenuOpen = () => {
        setMenuOpen(true);
    }

    let handleMenuClose = () => {
        setMenuOpen(false);
    }

    let deleteCart = () => {
        setQuantity(0);
    }

    return (
        <div className='h-[15vh] w-full flex items-center relative'>
            <div className='w-full lg:w-[85%] mx-auto flex justify-between items-center border-b border-gray-200 py-8 px-8 lg:px-0'>
                <div className='flex flex-row-reverse items-center lg:flex-row gap-4 lg:gap-16 lg:w-[65%]'>
                    <img className='cursor-pointer' src={logo} alt="Logo" />

                    <div>
                        <img onClick={handleMenuOpen} className='block lg:hidden' src={menuBar} alt="" />

                        <div>
                            {
                                menuOpen ?
                                    <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 h-screen'>
                                        <ul onClick={handleMenuClose} className='flex absolute top-0 left-0 flex-col bg-white z-20 h-screen w-[60vw] lg:hidden items-start justify-start px-6 py-12'>
                                            <img className='w-[20px]' src={iconClose} alt="" />

                                            <li className='relative text-[#1d2025] font-bold cursor-pointer hover:text-[#1d2025] h-full flex items-center'>
                                                Collections
                                                <span className='hover-border'></span>
                                            </li>
                                            <li className='relative text-[#1d2025] font-bold cursor-pointer hover:text-[#1d2025] h-full flex items-center'>
                                                Men
                                                <span className='hover-border'></span>
                                            </li>
                                            <li className='relative text-[#1d2025] font-bold cursor-pointer hover:text-[#1d2025] h-full flex items-center'>
                                                Women
                                                <span className='hover-border'></span>
                                            </li>
                                            <li className='relative text-[#1d2025] font-bold cursor-pointer hover:text-[#1d2025] h-full flex items-center'>
                                                About
                                                <span className='hover-border'></span>
                                            </li>
                                            <li className='relative text-[#1d2025] font-bold cursor-pointer hover:text-[#1d2025] h-full flex items-center'>
                                                Contact
                                                <span className='hover-border'></span>
                                            </li>
                                        </ul>
                                    </div>

                                    :
                                    <ul className='hidden lg:flex gap-8 items-center h-full'>
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
                            }




                        </div>
                    </div>
                </div>

                <div className='flex justify-end w-[35%] items-center gap-8'>
                    <div className=''>
                        {
                            quantity > 0 &&
                            <p className='bg-[#FF7D1A] px-2 font-bold rounded-full flex justify-center items-center text-white text-[10px] absolute right-[165px] top-7'>{quantity}</p>
                        }
                        <img onClick={handleOpenCart} className='cursor-pointer w-[25px]' src={cartIcon} alt="Cart Icon" />
                        {
                            openCart &&
                            <div className='bg-white w-[400px] h-fit  absolute top-20 right-10 rounded-xl cartDetails'>
                                <div className='border-b border-gray-300'>
                                    <p className='text-[#1d2025] p-8 font-bold'>Cart</p>
                                </div>

                                {
                                    quantity ?
                                        <div>
                                            <div className='flex gap-3 items-center p-8'>
                                                <img className='w-[65px] rounded-lg' src={thumbnailImage1} alt="" />
                                                <div className='flex flex-col'>
                                                    <p className='text-[#687078]'>Fall Limited Edition Sneakers</p>
                                                    <div className='flex gap-3'>
                                                        <p className='text-[#687078]'>$125.00 X {quantity}</p>
                                                        <p className='text-[#1d2025] font-bold'>${125.00 * quantity}.00</p>
                                                    </div>
                                                </div>
                                                <img onClick={deleteCart} className='ml-4 w-[15px] cursor-pointer' src={deleteIcon} alt="" />
                                            </div>
                                        </div>
                                        :
                                        <div className='flex justify-center items-center py-20'>
                                            <p className='text-[#687078] text-[18px] font-bold'>Your Cart is Empty</p>
                                        </div>
                                }
                            </div>
                        }
                    </div>
                    <img className='cursor-pointer w-[40px] rounded-full hover:border-2 hover:border-[#E88030] transition-colors duration-200' src={avatar} alt="Avatar" />
                </div>
            </div>
        </div>
    );
};

export default Navbar;
