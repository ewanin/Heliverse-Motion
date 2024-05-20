import React, { useEffect } from 'react'; // Import React library
import logo from '/images/logo.png'; // Import logo image
import { gsap } from 'gsap'; //// Import GSAP library

// Heading functional component
const Heading = () => {

    //GSAP Animation
    useEffect(() => {
        gsap.fromTo('#leftInHead', {
            marginLeft: '-200%'
        }, {
            marginLeft: 0,
            duration: 1,
        });
        gsap.fromTo('#rightInHead', {
            marginTop: '-200%'
        }, {
            marginTop: 0,
            duration: 1,
        });
    }, []);
    return (
        <div className='flex items-center justify-between py-8 text-white_primary overflow-hidden'>
            <img id='leftInHead' src={logo} alt="Motion Art Effect Logo" className='cursor-pointer' />
            <div id='rightInHead' className='hidden xl:block font-outfit text-black_secondary bg-white px-9 py-3 rounded-md text-[18px] mr-1 cursor-pointer hover:text-white hover:bg-transparent hover:outline'>
                Purchase Now
            </div>
        </div>
    );
};

export default Heading; // Export Heading component