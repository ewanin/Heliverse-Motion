import React from 'react'; // Import React library
import browser from '/images/browser.png'; // Import browser image

// Browser functional component
const Browser = () => {
    return (
        // Container
        <div className=' text-white_primary py-5'>
            <div className=' bg-gradient-color-secondary xl:w-[1100px] w-[90vw] border-[2px] border-[#ffffff10] rounded-[20px] py-[50px] mx-auto'>
                <div className=" lg:w-[460px] w-[75vw] mx-auto text-center">
                    {/* Title */}
                    <div className=" font-sora text-[25px] font-medium">Supported by All Popular Browsers</div>
                    {/* Description */}
                    <div className=" font-outfit text-[18px] leading-[1.6em] text-white_secondary font-light py-5">
                        Rest assured, Motion Art is designed to be compatible with all major web browsers.
                    </div>
                    {/* Image */}
                    <img src={browser} alt="Browser images" className=' mx-auto' />
                </div>
            </div>
        </div>
    )
}

export default Browser; // Export Browser component