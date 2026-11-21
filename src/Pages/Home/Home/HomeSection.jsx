import React from 'react';
import { HiArrowUpRight, HiArrowRight } from 'react-icons/hi2';
import { FaWhatsapp } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { TypeAnimation } from 'react-type-animation';
import bannerVideo from '../../../video/banner-video-1.mp4';

const HomeSection = () => {
    // Email click handler
    const handleEmailClick = (e) => {
        e.preventDefault();

        const email = 'solutionliftguard@gmail.com';
        const subject = 'Inquiry About LiftGuard Solution';
        const body = `Hello Team,

I would like to know more about your services.`;

        const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

        const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

        const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

        if (isMobile) {
            window.location.href = mailtoUrl;
        } else {
            const newWindow = window.open(gmailUrl, '_blank');

            if (!newWindow || newWindow.closed || typeof newWindow.closed === 'undefined') {
                window.location.href = mailtoUrl;
            }
        }
    };

    return (
        <div className="mb-20 mx-auto font-sans">
            <div className="relative h-screen w-full">

                {/* Background Video */}
                <video
                    className="absolute inset-0 h-full w-full object-cover"
                    src={bannerVideo}
                    autoPlay
                    loop
                    muted
                    playsInline
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-b from-black/10 via-black/30 to-black/60 px-4 text-center text-white">

                    {/* Heading */}
                    <h1 className="mx-auto mb-4 w-5/6 text-xl font-extrabold uppercase leading-tight drop-shadow-lg md:text-5xl lg:w-11/12 lg:text-6xl">
                        <TypeAnimation
                            sequence={[
                                'Welcome To LiftGuard Solution',
                                1500,
                                'Your Safety, Our Priority',
                                1500,
                                'Industrial Safety Experts',
                                1500,
                                'Reliable LiftGuard Solution',
                                1500
                            ]}
                            wrapper="span"
                            speed={50}
                            style={{ display: 'inline-block' }}
                            repeat={Infinity}
                            cursor={true}
                        />
                    </h1>

                    {/* Subheading */}
                    <p
                        data-aos="zoom-in"
                        className="mx-auto mt-3 w-5/6 text-sm leading-relaxed text-gray-100 drop-shadow-md md:w-2/3 md:text-2xl"
                    >
                        Your trusted partner for innovative safety solutions in lifting gear and heavy equipment.
                        We prioritize accident prevention and workplace safety, offering reliable services to secure industrial operations.
                    </p>

                    {/* Action Buttons */}
                    <div
                        data-aos="zoom-in"
                        className="mt-6 flex flex-col gap-4 md:flex-row"
                    >

                        {/* WhatsApp Button */}
                        <a
                            href="https://wa.me/8801321229107?text=Hello%20LiftGuard%20Solution!"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 rounded-lg border border-amber-400 bg-[#0F766E] px-5 py-2 text-center text-sm font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-[#0d5c58] hover:shadow-lg md:text-base"
                        >
                            <FaWhatsapp className="text-lg" />
                            +88 01321229107
                        </a>

                        {/* Email Button */}
                        <button
                            onClick={handleEmailClick}
                            className="flex items-center justify-center gap-2 rounded-lg border border-amber-400 bg-transparent px-5 py-2 text-sm font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-[#0F766E] hover:shadow-lg md:text-base"
                        >
                            <MdEmail className="text-lg" />
                            solutionliftguard@gmail.com
                        </button>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeSection;