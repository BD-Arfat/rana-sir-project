import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { HiArrowUpRight } from 'react-icons/hi2';

const Footer = () => {
    return (
        <footer className="bg-[#1B2B27] text-white">

            <div className="mx-auto max-w-7xl px-5 py-14 lg:px-8">

                <div className="flex flex-col items-center justify-between gap-10 border-b border-white/10 pb-10 md:flex-row">

                    {/* Company Logo & Description */}
                    <div className="text-center md:text-left">
                        <Link to="/" className="inline-flex items-center gap-3">
                            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#C5F36B] text-xl font-bold text-[#1B2B27]">
                                C
                            </div>

                            <span className="text-2xl font-extrabold tracking-tight">
                                Company<span className="text-[#C5F36B]">.</span>
                            </span>
                        </Link>

                        <p className="mt-4 max-w-sm text-sm leading-7 text-white/60">
                            Building trust, delivering quality and creating a better future.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="text-center md:text-left">
                        <h3 className="mb-5 text-sm font-bold uppercase tracking-widest text-white">
                            Quick Links
                        </h3>

                        <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm text-white/60 md:justify-start">
                            <Link to="/" className="transition hover:text-[#C5F36B]">Home</Link>
                            <Link to="/about" className="transition hover:text-[#C5F36B]">About Us</Link>
                            <Link to="/services" className="transition hover:text-[#C5F36B]">Services</Link>
                            <Link to="/projects" className="transition hover:text-[#C5F36B]">Projects</Link>
                            <Link to="/contact" className="transition hover:text-[#C5F36B]">Contact</Link>
                        </div>
                    </div>

                    {/* Social Links */}
                    <div className="text-center md:text-left">
                        <h3 className="mb-5 text-sm font-bold uppercase tracking-widest text-white">
                            Follow Us
                        </h3>

                        <div className="flex items-center justify-center gap-3 md:justify-start">

                            <a href="#" aria-label="Facebook" className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-white/60 transition duration-300 hover:border-[#C5F36B] hover:bg-[#C5F36B] hover:text-[#1B2B27]">
                                <FaFacebookF />
                            </a>

                            <a href="#" aria-label="Instagram" className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-white/60 transition duration-300 hover:border-[#C5F36B] hover:bg-[#C5F36B] hover:text-[#1B2B27]">
                                <FaInstagram />
                            </a>

                            <a href="#" aria-label="LinkedIn" className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-white/60 transition duration-300 hover:border-[#C5F36B] hover:bg-[#C5F36B] hover:text-[#1B2B27]">
                                <FaLinkedinIn />
                            </a>

                        </div>
                    </div>

                </div>

                {/* Bottom Footer */}
                <div className="flex flex-col items-center justify-between gap-5 pt-7 text-center sm:flex-row">

                    <p className="text-sm text-white/40">
                        © {new Date().getFullYear()} Company. All rights reserved.
                    </p>

                    <a
                        href="#"
                        onClick={(e) => {
                            e.preventDefault();
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                        className="group flex items-center gap-2 text-sm font-semibold text-white/60 transition hover:text-[#C5F36B]"
                    >
                        Back to Top
                        <HiArrowUpRight className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                    </a>

                </div>

            </div>

        </footer>
    );
};

export default Footer;