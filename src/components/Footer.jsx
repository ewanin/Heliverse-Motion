import React from 'react'; // Import React library

// Footer functional component
const Footer = () => {
    return (
        <div className='font-outfit text-white_secondary text-[14px] bg-gradient-color-primary flex flex-wrap gap-2 md:justify-between justify-center text-center py-[15px] 2xl:px-[600px] xl:px-[135px] lg:px-[40px] md:px-[20px] px-[10px]'>
            {/* Copyright */}
            <div className='md:order-1 order-2'>© 2024 Copyright. All rights reserved by QodeMatrix</div>

            {/* Links */}
            <div className='flex gap-4 md:order-2 order-1 lg:place-content-start place-content-center'>
                <div className='cursor-pointer'>Documentation</div>
                <div className='cursor-pointer'>Support</div>
            </div>
        </div>
    );
};

export default Footer; // Export Footer component