import React from 'react'; // Import React library

const Hero = () => {

    return (
        <div className=' text-white_primary md:flex block xl:gap-[190px] lg:gap-[100px] gap-[100px] md:py-[68px] py-[50px] md:text-left [text-align:-webkit-center]'>
            {/* Left column */}
            <div className='font-sora text-[18px] leading-[1.6em] flex flex-col gap-2 md:items-start items-center'>
                {/* Title */}
                <div className="bg-gradient-color-primary bg-clip-text text-transparent font-medium w-fit md:max-w-[16ch] max-w-[22ch]">Transform Your Website</div>
                {/* Subtitle */}
                <div className='font-light font-outfit w-fit md:max-w-[14ch] max-w-[19ch]'>With Motion Art Effect</div>
            </div>

            {/* Right column */}
            <div className=' lg:w-[596px] md:w-[400px] w-[90vw] md:mx-0 mx-auto md:mt-0 mt-5'>
                {/* Main headline */}
                <div className=' font-sora xl:text-[65px] md:text-[40px] text-[35px] xl:leading-[85px] md:leading-[60px] leading-[45px] font-medium'>Attract Your Visitors Attention With Colorful</div>
                {/* Secondary headline */}
                <div className='bg-gradient-color-primary bg-clip-text text-transparent w-fit font-sora xl:text-[65px] md:text-[40px] text-[35px] xl:leading-[85px] md:leading-[60px] leading-[45px] font-medium'>Motion Art Effect</div>
                {/* Description */}
                <div className=" font-outfit text-[18px] leading-[1.6em] text-white_secondary font-light py-6">
                    the power of creativity with Motion Art for Elementor - your ultimate solution for seamlessly integrating captivating animations into your website.
                </div>
            </div>
        </div>
    )
}

export default Hero;
