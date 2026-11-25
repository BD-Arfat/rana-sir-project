import React from 'react';
import { Link } from 'react-router-dom';
import {
    HiArrowUpRight,
    HiArrowUp,
    HiOutlineMapPin,
    HiOutlineEnvelope,
    HiOutlinePhone,
    HiOutlineClock,
    HiOutlineShieldCheck,
} from 'react-icons/hi2';

import logo from '../../../assets/logo.png';

const Footer = () => {

    const currentYear = new Date().getFullYear();

    // Quick Links
    const quickLinks = [
        { name: 'Home', path: '/' },
        { name: 'About Us', path: '/about' },
        { name: 'Services', path: '/services' },
        { name: 'Contact Us', path: '/contact' },
    ];

    // Services Links
    const services = [
        {
            name: 'Visual Inspection & Load Test',
            id: 'visual-inspection-load-test',
        },
        {
            name: 'Pressure Test',
            id: 'pressure-test',
        },
        {
            name: 'Calibration',
            id: 'calibration',
        },
        {
            name: 'Electrical Test',
            id: 'electrical-test',
        },
        {
            name: 'NDT Test',
            id: 'ndt-test',
        },
        {
            name: 'FFA & LSF',
            id: 'ffa-lsf',
        },
        {
            name: 'Heavy Equipment Maintenance Solution',
            id: 'heavy-equipment-maintenance',
        },
    ];

    // Back To Top
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <footer className="relative overflow-hidden bg-[#1B2B27] text-white">

            {/* Top Accent Line */}
            <div className="h-1 w-full bg-[#C5F36B]"></div>

            {/* Background Decoration */}
            <div className="pointer-events-none absolute -right-40 -top-40 h-96 w-96 rounded-full bg-[#C5F36B]/5 blur-3xl"></div>

            <div className="relative mx-auto max-w-7xl px-5 pb-8 pt-16 lg:px-8">

                {/* Main Footer */}
                <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">

                    {/* Company Information */}
                    <div>

                        <Link to="/" className="inline-block">

                            <img
                                src={logo}
                                alt="Lifting & Safety Solutions"
                                className="h-14 w-auto max-w-[230px] object-contain brightness-0 invert"
                            />

                        </Link>

                        <p className="mt-6 max-w-xs text-sm leading-7 text-white/60">
                            Providing reliable inspection, testing and
                            maintenance solutions to ensure safety,
                            quality and operational excellence.
                        </p>

                        <div className="mt-6 flex items-center gap-3">

                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#C5F36B]/10 text-[#C5F36B]">

                                <HiOutlineShieldCheck className="text-xl" />

                            </div>

                            <div>

                                <h4 className="text-sm font-bold text-white">
                                    Safety First
                                </h4>

                                <p className="text-xs text-white/50">
                                    Quality & Reliability
                                </p>

                            </div>

                        </div>

                    </div>


                    {/* Quick Links */}
                    <div>

                        <h3 className="mb-4 text-lg font-bold text-white">
                            Quick Links
                        </h3>

                        <div className="mb-6 h-1 w-10 rounded-full bg-[#C5F36B]"></div>

                        <ul className="space-y-4">

                            {quickLinks.map((item) => (

                                <li key={item.name}>

                                    <Link
                                        to={item.path}
                                        className="group flex w-fit items-center gap-2 text-sm text-white/60 transition-colors duration-300 hover:text-[#C5F36B]"
                                    >

                                        <HiArrowUpRight className="text-[#C5F36B] transition-transform duration-300 group-hover:translate-x-1" />

                                        {item.name}

                                    </Link>

                                </li>

                            ))}

                        </ul>

                    </div>


                    {/* Our Services */}
                    <div>

                        <h3 className="mb-4 text-lg font-bold text-white">
                            Our Services
                        </h3>

                        <div className="mb-6 h-1 w-10 rounded-full bg-[#C5F36B]"></div>

                        <ul className="space-y-4">

                            {services.map((service) => (

                                <li key={service.id}>

                                    <Link
                                        to={`/services#${service.id}`}
                                        className="group flex items-start gap-2 text-sm leading-5 text-white/60 transition-colors duration-300 hover:text-[#C5F36B]"
                                    >

                                        <HiArrowUpRight className="mt-0.5 shrink-0 text-[#C5F36B] transition-transform duration-300 group-hover:translate-x-1" />

                                        <span>
                                            {service.name}
                                        </span>

                                    </Link>

                                </li>

                            ))}

                        </ul>

                    </div>


                    {/* Contact Information */}
                    <div>

                        <h3 className="mb-4 text-lg font-bold text-white">
                            Get In Touch
                        </h3>

                        <div className="mb-6 h-1 w-10 rounded-full bg-[#C5F36B]"></div>

                        <p className="mb-6 text-sm leading-7 text-white/60">
                            Have a project or need professional inspection
                            services? Get in touch with our team.
                        </p>

                        <div className="space-y-5">

                            {/* Location */}
                            <div className="flex items-start gap-3">

                                <HiOutlineMapPin className="mt-1 shrink-0 text-xl text-[#C5F36B]" />

                                <div>

                                    <h4 className="text-sm font-semibold text-white">
                                        Our Location
                                    </h4>

                                    <Link
                                        to="/contact"
                                        className="mt-1 block text-sm text-white/50 transition hover:text-[#C5F36B]"
                                    >
                                        View Our Location
                                    </Link>

                                </div>

                            </div>


                            {/* Email */}
                            <div className="flex items-start gap-3">

                                <HiOutlineEnvelope className="mt-1 shrink-0 text-xl text-[#C5F36B]" />

                                <div>

                                    <h4 className="text-sm font-semibold text-white">
                                        Email Address
                                    </h4>

                                    <Link
                                        to="/contact"
                                        className="mt-1 block text-sm text-white/50 transition hover:text-[#C5F36B]"
                                    >
                                        Send Us An Enquiry
                                    </Link>

                                </div>

                            </div>


                            {/* Phone */}
                            <div className="flex items-start gap-3">

                                <HiOutlinePhone className="mt-1 shrink-0 text-xl text-[#C5F36B]" />

                                <div>

                                    <h4 className="text-sm font-semibold text-white">
                                        Phone Number
                                    </h4>

                                    <Link
                                        to="/contact"
                                        className="mt-1 block text-sm text-white/50 transition hover:text-[#C5F36B]"
                                    >
                                        Contact Our Team
                                    </Link>

                                </div>

                            </div>


                            {/* Working Hours */}
                            <div className="flex items-start gap-3">

                                <HiOutlineClock className="mt-1 shrink-0 text-xl text-[#C5F36B]" />

                                <div>

                                    <h4 className="text-sm font-semibold text-white">
                                        Working Hours
                                    </h4>

                                    <p className="mt-1 text-sm text-white/50">
                                        Contact us for availability.
                                    </p>

                                </div>

                            </div>

                        </div>


                        {/* Contact Button */}
                        <Link
                            to="/contact"
                            className="group mt-7 inline-flex items-center gap-3 rounded-lg bg-[#C5F36B] px-5 py-3 text-sm font-bold text-[#1B2B27] transition-all duration-300 hover:bg-white"
                        >

                            Contact Us

                            <HiArrowUpRight className="text-lg transition-transform duration-300 group-hover:translate-x-1" />

                        </Link>

                    </div>

                </div>


                {/* Footer Bottom */}
                <div className="mt-16 border-t border-white/10 pt-7">

                    <div className="flex flex-col items-center justify-between gap-5 text-center sm:flex-row sm:text-left">

                        <p className="text-sm text-white/50">

                            © {currentYear} Lifting & Safety Solutions.
                            All Rights Reserved.

                        </p>

                        <div className="flex items-center gap-6">

                            <Link
                                to="/"
                                className="text-sm text-white/50 transition hover:text-[#C5F36B]"
                            >
                                Home
                            </Link>

                            <Link
                                to="/about"
                                className="text-sm text-white/50 transition hover:text-[#C5F36B]"
                            >
                                About Us
                            </Link>

                            <Link
                                to="/contact"
                                className="text-sm text-white/50 transition hover:text-[#C5F36B]"
                            >
                                Contact
                            </Link>

                            {/* Back To Top */}
                            <button
                                onClick={scrollToTop}
                                aria-label="Back to top"
                                className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#C5F36B] text-xl text-[#1B2B27] transition-all duration-300 hover:-translate-y-1 hover:bg-white"
                            >

                                <HiArrowUp />

                            </button>

                        </div>

                    </div>

                </div>

            </div>

        </footer>
    );
};

export default Footer;