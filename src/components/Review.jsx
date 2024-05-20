import React, { useEffect } from 'react'; // Import React library
import { gsap } from 'gsap'; // Import GSAP library
import { ScrollTrigger } from 'gsap/ScrollTrigger'; // Import ScrollTrigger from gsap
import envato from '/images/envato.png'; // Import Envato logo
import g2 from '/images/g2.png'; // Import G2 logo
import wordpress from '/images/wordpress.png'; // Import Wordpress logo

import star from '/images/star.png'; // Import star icon

// Register ScrollTrigger with gsap
gsap.registerPlugin(ScrollTrigger);

const Test = () => {

    //GSAP Animation
    useEffect(() => {
        gsap.fromTo(
            '.inReview',
            {
                scale: 0,
            },
            {
                scale: 1,
                duration: 1,
                delay: 0.5,
                stagger: 0.5,
                scrollTrigger: {
                    trigger: '.inReview',
                    start: 'top bottom',
                },
            }
        );
        const title = document.querySelector('.title');
        const text = title.textContent;
        title.textContent = '';
    
        const tl = gsap.timeline();
        tl.delay(2);
        for (let i = 0; i < text.length; i++) {
            const newText = text.substring(0, i + 1);
            tl.to(title, { textContent: newText, duration: 0.05, ease: 'none' });
        }
    }, []);

    const reviews = [
        { logo: envato, score: '4.5', reviews: 9 },
        { logo: g2, score: '4.5', reviews: 9 },
        { logo: wordpress, score: '4.5', reviews: 9 },
    ];

    return (
        <div className='text-white_primary'>
            <div className='title font-outfit text-[22px] text-center'>Trusted by thousands of users around the world</div>
            <div className='flex flex-wrap lg:justify-between justify-center md:py-16 py-10 gap-10 overflow-hidden'>
                {reviews.map((review, index) => (
                    <div key={index} className='inReview flex items-end gap-2'>
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