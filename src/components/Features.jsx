import React from 'react'; // Import React library
import thunder from '/images/thunder.png'; // Import thunder image
import like from '/images/like.png'; // Import like image
import moon from '/images/moon.png'; // Import moon image

// Features functional component
const Features = () => {

    // Array of feature data
    const features = [
        {
            icon: thunder,
            title: "Light Weight",
            description: "Motion Art for Elementor is designed to be lightweight."
        },
        {
            icon: like,
            title: "100% Responsive",
            description: "Create a consistent visual experience across all devices."
        },
        {
            icon: moon,
            title: "User Friendly Interface",
            description: "Ensure a smooth experience for both applicants and administrators."
        }
    ];

    return (
        <div className='text-white_primary md:py-[100px] py-[70px]'>
            {/* Introduction */}
            <div className="md:w-[680px] w-[90vw] text-center mx-auto">
                {/* Title */}
                <div className=' font-sora xl:text-[40px] text-[30px] xl:leading-[60px] leading-[50px] font-medium'>An All-Round Plugin With Powerful Features</div>
                {/* Description */}
                <div className=" font-outfit text-[18px] leading-[1.6em] text-white_secondary font-light py-4">
                    Whether you're a seasoned web designer or just starting out, Motion Art for Elementor seamlessly integrates with the Elementor platform, providing you with a seamless and intuitive experience.
                </div>
            </div>

            {/* Features */}
            <div className='md:flex block gap-5 justify-between md:pt-[50px] pt-[40px]'>
                {/* Map over features array and render each feature */}
                {features.map((feature, index) => (
                    <div key={index} className='bg-gradient-color-secondary md:w-[400px] w-[90vw] border-[2px] border-[#ffffff10] rounded-[20px] p-[30px] mx-auto mb-4'> {/* Feature card */}
                        {/* Feature icon */}
                        <img src={feature.icon} alt={`${feature.title} Icon`} className='mb-10' />
                        {/* Feature title */}
                        <div className='font-sora text-[25px] leading-[40px] font-medium my-4'>{feature.title}</div>
                        {/* Feature description */}
                        <div className="font-outfit text-[18px] leading-[1.6em] text-white_secondary font-light">{feature.description}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Features; // Export Features component