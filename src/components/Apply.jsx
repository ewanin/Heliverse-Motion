import React, { useEffect } from 'react'; // Import React library
import { gsap } from 'gsap'; // Import GSAP library
import { ScrollTrigger } from 'gsap/ScrollTrigger'; // Import ScrollTrigger from gsap
import section from '/images/section.png'; // Import section image
import page from '/images/page.png'; // Import page image

// Register ScrollTrigger with gsap
gsap.registerPlugin(ScrollTrigger);

// Apply functional component
const Apply = () => {
    // Animate title
    useEffect(() => {
        gsap.fromTo(
            '#inApply',
            {
                scale: 0,
            },
            {
                scale: 1,
                duration: 1.5,
                delay: 0.5,
                stagger: 0.5,
                scrollTrigger: {
                    trigger: '#inApply',
                    start: 'center bottom',
                },
            }
        );
    }, []);

    return (
        <div className=' text-white_primary md:py-[100px] py-[70px] md:[text-align:left] [text-align:-webkit-center]'>
            {/* Title */}
            <div id='title' className=' font-sora xl:text-[40px] text-[30px] xl:leading-[60px] leading-[50px] font-medium text-center mx-auto xl:w-[690px] md:w-[500px] w-[90vw]'>Apply On Any Section Or Enable For Whole Page</div>

            {/* Content */}
            <div className='md:flex block justify-center gap-5 pt-[60px] overflow-hidden'>

                {/* Apply on Section */}
                <div id='inApply' className=' bg-gradient-color-secondary md:w-[600px] w-[90vw] border-[2px] border-[#ffffff10] rounded-[20px] p-[30px] h-fit'>
                    <div className=" font-sora text-[25px] leading-[45px] font-medium">Apply On Section</div>
                    <div className=" font-outfit text-[18px] leading-[1.6em] text-white_secondary font-light py-5">
                        Apply on section is a game-changer, offering an unparalleled way to manage applications directly from your website.
                    </div>
                    <img src={section} alt="Section Image" />
                </div>

                {/* Apply on Page */}
                <div id='inApply' className=' bg-gradient-color-secondary md:w-[600px] w-[90vw] border-[2px] border-[#ffffff10] rounded-[20px] p-[30px] md:mt-20 mt-5 h-fit'>
                    <div className=" font-sora text-[25px] leading-[45px] font-medium">Apply On Page</div>
                    <div className=" font-outfit text-[18px] leading-[1.6em] text-white_secondary font-light py-5">
                        Take your website to new heights with Motion Art for Elementor. Embrace the power of motion and animation.
                    </div>
                    <img src={page} alt="Page Image" />
                </div>
            </div>
        </div>
    )
}

export default Apply; // Export Apply component