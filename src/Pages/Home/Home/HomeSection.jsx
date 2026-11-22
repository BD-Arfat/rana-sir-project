import React from 'react';
import { HiArrowUpRight } from 'react-icons/hi2';
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
        <div className="mx-auto mb-20 font-sans">

            <div className="relative h-screen w-full overflow-hidden">

                {/* Background Video */}
                <video
                    className="absolute inset-0 h-full w-full object-cover"
                    src={bannerVideo}
                    autoPlay
                    loop
                    muted
                    playsInline
                />

                {/* Light Dark Green Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#1B2B27]/20 via-[#1B2B27]/35 to-[#1B2B27]/60" />

                {/* Main Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center text-white">

                    {/* Small Badge */}
                    <div
                        data-aos="fade-down"
                        className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#C5F36B]/50 bg-[#1B2B27]/50 px-5 py-2 backdrop-blur-sm"
                    >
                        <span className="h-2 w-2 animate-pulse rounded-full bg-[#C5F36B]" />

                        <span className="text-xs font-bold uppercase tracking-[2px] text-[#C5F36B] md:text-sm">
                            Your Trusted Safety Partner
                        </span>
                    </div>

                    {/* Heading */}
                    <h1 className="mx-auto mb-4 w-5/6 text-xl font-extrabold uppercase leading-tight text-white drop-shadow-[0_3px_8px_rgba(0,0,0,0.8)] md:text-5xl lg:w-11/12 lg:text-6xl">

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

                    {/* Accent Line */}
                    <div
                        data-aos="zoom-in"
                        className="mb-4 mt-3 h-1 w-20 rounded-full bg-[#C5F36B]"
                    />

                    {/* Subheading */}
                    <p
                        data-aos="zoom-in"
                        className="mx-auto mt-3 w-5/6 text-sm leading-relaxed text-white drop-shadow-[0_2px_5px_rgba(0,0,0,0.9)] md:w-2/3 md:text-2xl"
                    >
                        Your trusted partner for innovative safety solutions in lifting gear and heavy equipment.
                        We prioritize accident prevention and workplace safety, offering reliable services to secure industrial operations.
                    </p>

                    {/* Action Buttons */}
                    <div
                        data-aos="zoom-in"
                        className="mt-8 flex flex-col gap-4 md:flex-row"
                    >

                        {/* WhatsApp Button */}
                        <a
                            href="https://wa.me/8801321229107?text=Hello%20LiftGuard%20Solution!"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center justify-center gap-3 rounded-lg border border-[#C5F36B] bg-[#C5F36B] px-6 py-3 text-center text-sm font-bold text-[#1B2B27] shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-white hover:bg-white hover:shadow-xl md:text-base"
                        >
                            <FaWhatsapp className="text-xl transition-transform duration-300 group-hover:scale-110" />

                            +88 01321229107

                            <HiArrowUpRight className="text-lg transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                        </a>

                        {/* Email Button */}
                        <button
                            onClick={handleEmailClick}
                            className="group flex items-center justify-center gap-3 rounded-lg border border-[#C5F36B] bg-[#1B2B27]/60 px-6 py-3 text-sm font-bold text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-[#C5F36B] hover:text-[#1B2B27] hover:shadow-xl md:text-base"
                        >
                            <MdEmail className="text-xl transition-transform duration-300 group-hover:scale-110" />

                            solutionliftguard@gmail.com

                            <HiArrowUpRight className="text-lg transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                        </button>

                    </div>

                    {/* Bottom Highlight */}
                    <div
                        data-aos="fade-up"
                        className="absolute bottom-10 flex items-center gap-3 text-xs font-semibold uppercase tracking-[2px] text-white drop-shadow-md"
                    >
                        <span className="h-px w-10 bg-[#C5F36B]" />

                        Safety • Quality • Reliability

                        <span className="h-px w-10 bg-[#C5F36B]" />
                    </div>

                </div>

            </div>

        </div>
    );
};

export default HomeSection;