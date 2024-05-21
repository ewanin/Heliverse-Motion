import React from 'react'; // Import React library
import { BsArrowRight } from "react-icons/bs"; // Import ArrowRight icon from react-icons
import stick from '/images/stick.png'; // Import stick image

// Wand functional component
const Wand = () => {

    return (
        <div className='text-white_primary md:flex justify-between items-center md:pt-[100px] pt-[70px] md:text-left [text-align:-webkit-center;]'>
            {/* Left column */}
            <div className='md:w-[400px] lg:w-[550px] xl:w-[750px] w-[90vw]'>
                {/* Title */}
                <div className='font-sora xl:text-[40px] text-[30px] xl:leading-[60px] leading-[50px] font-medium'>Turn Your Cursor Into A Colorful Magic Wand & Charm Your Visitors</div>
                {/* Description */}
                <div className="font-outfit text-[18px] leading-[1.6em] text-white_secondary font-light py-6">
                    Motion Art for Elementor is a groundbreaking plugin that empowers you to effortlessly infuse your website with visually stunning motion art elements.
                </div>
                {/* Button */}
                <div className='font-sora text-white bg-gradient-color-primary rotate-180 px-[36px] py-[16px] rounded-[20px] text-[20px] font-light w-fit cursor-pointer'>
                    <div className="flex items-center gap-5 rotate-180 pointer-events-auto">
                        <div>Purchase From Envato</div>
                        <BsArrowRight className='text-[25px]' />
                    </div>
                </div>
            </div>

            {/* Right column */}
            <div className='md:mt-0 mt-8'>
                <img src={stick} alt="Stick Image" />
            </div>
        </div>
    );
};

export default Wand; // Export Wand component