import React from 'react'; // Import React library
import envato from '/images/envato.png'; // Import Envato logo
import g2 from '/images/g2.png'; // Import G2 logo
import wordpress from '/images/wordpress.png'; // Import Wordpress logo
import star from '/images/star.png'; // Import star icon

const Test = () => {

    const reviews = [
        { logo: envato, score: '4.5', reviews: 9 },
        { logo: g2, score: '4.5', reviews: 9 },
        { logo: wordpress, score: '4.5', reviews: 9 },
    ];

    return (
        <div className='text-white_primary'>
            <div className='font-outfit text-[22px] text-center'>Trusted by thousands of users around the world</div>
            <div className='flex flex-wrap lg:justify-between justify-center md:py-16 py-10 gap-10'>
                {reviews.map((review, index) => (
                    <div key={index} className='flex items-end gap-2'>
                        <img src={review.logo} alt='Review logo' />
                        <div className='flex flex-col gap-5'>
                            <img src={star} alt='star ratings' />
                            <div className='font-sora text-sm text-white_secondary'>
                                <b>{review.score}</b> Score, {review.reviews} Reviews
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Test;