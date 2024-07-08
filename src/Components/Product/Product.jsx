import React from 'react';
import image1 from "../../assets/image-product-1.jpg";
import minusIcon from "../../assets/icon-minus.svg";
import plusIcon from "../../assets/icon-plus.svg";
import cartIcon from "../../assets/icon-cart.svg";
import thumbnailImage1 from "../../assets/image-product-1-thumbnail.jpg";
import thumbnailImage2 from "../../assets/image-product-2-thumbnail.jpg";
import thumbnailImage3 from "../../assets/image-product-3-thumbnail.jpg";
import thumbnailImage4 from "../../assets/image-product-4-thumbnail.jpg";

const Product = () => {
    return (
        <div>
            <div className='w-[75%] mx-auto py-12 flex justify-between items-center gap-32'>
                <div className='imgDiv flex-1'>
                    <img className='rounded-2xl' src={image1} alt="" />
                    <div className='grid grid-cols-4 gap-6 w-full mt-8'>
                        <img className='rounded-2xl  cursor-pointer hover:opacity-70' src={thumbnailImage1} alt="" />
                        <img className='rounded-2xl  cursor-pointer hover:opacity-70' src={thumbnailImage2} alt="" />
                        <img className='rounded-2xl  cursor-pointer hover:opacity-70' src={thumbnailImage3} alt="" />
                        <img className='rounded-2xl  cursor-pointer hover:opacity-70' src={thumbnailImage4} alt="" />
                    </div>
                    <div>

                    </div>
                </div>

                <div className='textDiv flex-1 space-y-6'>
                    <p className='text-[#E88030] font-bold text-[18px]'>SNEAKER COMPANY</p>
                    <h1 className='text-[44px] text-[#1d2025] font-bold leading-[48px]'>Fall Limited Edition Sneakers</h1>
                    <p className='text-[#687078] text-[18px]'>These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.</p>

                    <div>
                        <div className='flex gap-4 items-center'>
                            <p className='text-[28px] text-[#1d2025] font-bold leading-[48px]'>$125.00</p>
                            <p className='py-1 px-3 rounded-lg text-white text-[18px] bg-[#1d2025]'>50%</p>
                        </div>
                        <p className='line-through text-[#687078] text-[18px] font-bold opacity-45'>
                            $250.00
                        </p>
                    </div>

                    <div className='flex justify-between gap-4'>
                        <div className='flex justify-between bg-[#F7F8FD] w-[40%] px-4 rounded-lg'>
                            <button>
                                <img src={minusIcon} alt="" />
                            </button>
                            <p className='text-[18px] text-[#1d2025] font-bold leading-[48px]'>{0}</p>
                            <button>
                                <img src={plusIcon} alt="" />
                            </button>
                        </div>

                        <div className='flex justify-center text-[#1d2025] font-bold cursor-pointer hover:opacity-70 items-center gap-4 py-4 rounded-lg px-8 bg-[#FF7D1A] w-[60%]'>
                            <img className='w-[24px]' src={cartIcon} alt="" />
                            Add To Cart
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Product;