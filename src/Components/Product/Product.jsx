import React, { useState } from 'react';
import minusIcon from "../../assets/icon-minus.svg";
import plusIcon from "../../assets/icon-plus.svg";
import cartIcon from "../../assets/icon-cart.svg";
import image1 from "../../assets/image-product-1.jpg";
import image2 from "../../assets/image-product-2.jpg";
import image3 from "../../assets/image-product-3.jpg";
import image4 from "../../assets/image-product-4.jpg";
import thumbnailImage1 from "../../assets/image-product-1-thumbnail.jpg";
import thumbnailImage2 from "../../assets/image-product-2-thumbnail.jpg";
import thumbnailImage3 from "../../assets/image-product-3-thumbnail.jpg";
import thumbnailImage4 from "../../assets/image-product-4-thumbnail.jpg";
import nextIcon from "../../assets/icon-next.svg";
import previousIcon from "../../assets/icon-previous.svg";

const images = [image1, image2, image3, image4];
const thumbnails = [thumbnailImage1, thumbnailImage2, thumbnailImage3, thumbnailImage4];

const Product = ({ setQuantity }) => {
    const [productImage, setProductImage] = useState(image1);
    const [quantity, localSetQuantity] = useState(0);
    const [showPopup, setShowPopup] = useState(false);
    const [lightboxVisible, setLightboxVisible] = useState(false);

    const handleImageChange = (image) => {
        setProductImage(image);
    };

    const handleQuantityIncrement = () => {
        localSetQuantity(quantity + 1);
    };

    const handleQuantityDecrement = () => {
        if (quantity > 0) {
            localSetQuantity(quantity - 1);
        }
    };

    const handleAddToCart = () => {
        if (quantity === 0) {
            setShowPopup(true);
        } else {
            setQuantity((prevQuantity) => prevQuantity + quantity);
            localSetQuantity(0);
        }
    };

    const closePopup = () => {
        setShowPopup(false);
    };

    const openLightbox = () => {
        setLightboxVisible(true);
    };

    const closeLightbox = () => {
        setLightboxVisible(false);
    };

    const handleNextImage = () => {
        const currentIndex = images.indexOf(productImage);
        const nextIndex = (currentIndex + 1) % images.length;
        setProductImage(images[nextIndex]);
    };

    const handlePreviousImage = () => {
        const currentIndex = images.indexOf(productImage);
        const previousIndex = (currentIndex - 1 + images.length) % images.length;
        setProductImage(images[previousIndex]);
    };

    return (
        <div>
            <div className='w-[75%] mx-auto py-12 flex flex-col lg:flex-row justify-between items-center gap-32'>
                <div className='imgDiv flex-1'>
                    <img
                        key={productImage}
                        className='rounded-2xl transition-opacity duration-300 opacity-0 cursor-pointer'
                        onLoad={(e) => (e.target.style.opacity = 1)}
                        src={productImage}
                        alt="Product"
                        onClick={openLightbox}
                    />
                    <div className='grid grid-cols-4 gap-6 w-full mt-8'>
                        {thumbnails.map((thumbnail, index) => (
                            <img
                                key={index}
                                onClick={() => handleImageChange(images[index])}
                                className={`rounded-2xl cursor-pointer hover:opacity-60 ${
                                    productImage === images[index] ? 'opacity-60 border-2 border-[#FF7D1A]' : ''
                                }`}
                                src={thumbnail}
                                alt={`Thumbnail ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>

                <div className='textDiv flex-1 space-y-6'>
                    <p className='text-[#E88030] font-bold text-[18px]'>SNEAKER COMPANY</p>
                    <h1 className='text-[44px] text-[#1d2025] font-bold leading-[48px]'>Fall Limited Edition Sneakers</h1>
                    <p className='text-[#687078] text-[18px]'>
                        These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.
                    </p>

                    <div className='flex flex-row lg:flex-col gap-8 lg:gap-0'>
                        <div className='flex gap-4 items-center'>
                            <p className='text-[28px] text-[#1d2025] font-bold leading-[48px]'>$125.00</p>
                            <p className='py-1 px-3 rounded-lg text-white text-[18px] bg-[#1d2025]'>50%</p>
                        </div>
                        <p className='line-through text-[#687078] text-[18px] font-bold opacity-45'>$250.00</p>
                    </div>

                    <div className='flex lg:flex-row flex-col justify-between gap-4'>
                        <div className='flex justify-between bg-[#F7F8FD] w-full lg:w-[40%] px-4 rounded-lg'>
                            <button>
                                <img onClick={handleQuantityDecrement} src={minusIcon} alt="Minus Icon" />
                            </button>
                            <p className='text-[18px] text-[#1d2025] font-bold leading-[48px]'>{quantity}</p>
                            <button>
                                <img onClick={handleQuantityIncrement} src={plusIcon} alt="Plus Icon" />
                            </button>
                        </div>

                        <div onClick={handleAddToCart} className='flex justify-center text-[#1d2025] font-bold cursor-pointer hover:opacity-60 items-center gap-4 py-4 rounded-lg px-8 bg-[#FF7D1A] w-full lg:w-[60%]'>
                            <img className='w-[24px] text-black fill-black' src={cartIcon} alt="Cart Icon" />
                            Add To Cart
                        </div>
                    </div>
                </div>
            </div>

            {showPopup && (
                <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'>
                    <div className='bg-white p-8 rounded-lg'>
                        <p className='text-[#1d2025] text-[18px] font-bold text-center'>Please add a quantity before adding to the cart.</p>
                        <div className='flex justify-center'>
                            <button onClick={closePopup} className='mt-4 px-4 py-2 bg-[#FF7D1A] text-white rounded-lg flex justify-center'>Close</button>
                        </div>
                    </div>
                </div>
            )}

            {lightboxVisible && (
                <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50'>
                    <div className='flex justify-center items-center flex-col relative'>
                        <img className='rounded-2xl transition-opacity duration-300 opacity-100 cursor-pointer max-h-[70vh] max-w-[90vw]' src={productImage} alt="Lightbox Product" />
                        <div className='grid grid-cols-4 gap-6 w-[50%] mt-8'>
                            {thumbnails.map((thumbnail, index) => (
                                <img
                                    key={index}
                                    onClick={() => handleImageChange(images[index])}
                                    className={`rounded-2xl cursor-pointer hover:opacity-60 ${
                                        productImage === images[index] ? 'opacity-60 border-2 border-[#FF7D1A]' : ''
                                    }`}
                                    src={thumbnail}
                                    alt={`Thumbnail ${index + 1}`}
                                />
                            ))}
                        </div>
                        <button onClick={handlePreviousImage} className='absolute top-1/2 left-2 text-white text-xl font-bold hover:text-[#FF7D1A]'>
                            <img className='bg-white py-4 px-5 rounded-full' src={previousIcon} alt="Previous Icon" />
                        </button>
                        <button onClick={handleNextImage} className='absolute top-1/2 right-2 text-white text-xl font-bold hover:text-[#FF7D1A]'>
                            <img className='bg-white py-4 px-5 rounded-full' src={nextIcon} alt="Next Icon" />
                        </button>
                        <button onClick={closeLightbox} className='absolute -top-10 right-44 text-white text-4xl font-bold hover:text-[#FF7D1A]'>
                            ×
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Product;
