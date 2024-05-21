import React from 'react'; // Import React library
import logo from '/images/logo.png'; // Import logo image

// Heading functional component
const Heading = () => {
    return (
        <div className='flex items-center justify-between py-8 text-white_primary'>
            <img src={logo} alt="Motion Art Effect Logo" className='cursor-pointer' />
            <div className='hidden xl:block font-outfit text-black_secondary bg-white px-9 py-3 rounded-md text-[18px] mr-1 cursor-pointer hover:text-white hover:bg-transparent hover:outline pointer-events-auto'>
                Purchase Now
            </div>
        </div>
    );
};

export default Heading; // Export Heading component