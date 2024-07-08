import React from 'react';
import logo from "../../assets/logo.svg"
import avatar from "../../assets/image-avatar.png";
import cartIcon from "../../assets/icon-cart.svg";
import "./navbar.css";

const Navbar = () => {
    return (
        <div className='h-[15vh] w-full flex items-center'>
            <div className='w-[85%] mx-auto flex justify-between items-center border-b border-gray-200 py-8'>
                <div className='flex gap-16 w-[65%]'>
                    <img className='cursor-pointer' src={logo} alt="Logo" />

                    <ul className='flex gap-8 items-center h-full'>
                        <li className='relative text-[#687078] cursor-pointer hover:text-black h-full flex items-center'>
                            Collections
                            <span className='hover-border'></span>
                        </li>
                        <li className='relative text-[#687078] cursor-pointer hover:text-black h-full flex items-center'>
                            Men
                            <span className='hover-border'></span>
                        </li>
                        <li className='relative text-[#687078] cursor-pointer hover:text-black h-full flex items-center'>
                            Women
                            <span className='hover-border'></span>
                        </li>
                        <li className='relative text-[#687078] cursor-pointer hover:text-black h-full flex items-center'>
                            About
                            <span className='hover-border'></span>
                        </li>
                        <li className='relative text-[#687078] cursor-pointer hover:text-black h-full flex items-center'>
                            Contact
                            <span className='hover-border'></span>
                        </li>
                    </ul>
                </div>

                <div className='flex justify-end w-[35%] items-center gap-8'>
                    <img className='cursor-pointer w-[25px]' src={cartIcon} alt="Cart Icon" />
                    <img className='cursor-pointer w-[40px] rounded-full hover:border-2 hover:border-[#E88030] transition-colors duration-200' src={avatar} alt="Avatar" />
                </div>
            </div>
        </div>
    );
};

export default Navbar;
