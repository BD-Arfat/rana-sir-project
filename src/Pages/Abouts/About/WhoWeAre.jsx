import React from 'react';
import { motion } from 'motion/react';
import { HiArrowUpRight } from 'react-icons/hi2';
import { FaShieldAlt, FaCheckCircle } from 'react-icons/fa';
import { Link } from 'react-router';

const WhoWeAre = () => {
    return (
        <section className="bg-[#F7F9F3] py-20 md:py-28">
            <div className="max-w-7xl mx-auto px-5 sm:px-8">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* Left Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="relative overflow-hidden rounded-2xl">
                            <img
                                src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=90&w=1200"
                                alt="Industrial Safety and Equipment"
                                className="w-full h-[350px] sm:h-[450px] object-cover hover:scale-105 transition-transform duration-700"
                            />

                            <div className="absolute inset-0 bg-[#1B2B27]/10"></div>
                        </div>

                        {/* Floating Card */}
                        <div className="absolute -bottom-6 -right-3 sm:-right-6 bg-[#1B2B27] p-5 sm:p-7 rounded-xl shadow-xl max-w-[230px]">
                            <div className="w-12 h-12 rounded-lg bg-[#C5F36B] flex items-center justify-center mb-4">
                                <FaShieldAlt className="text-2xl text-[#1B2B27]" />
                            </div>

                            <h3 className="text-white text-lg font-bold">
                                Safety First
                            </h3>

                            <p className="text-white/60 text-sm mt-2 leading-6">
                                Committed to safer industrial environments.
                            </p>
                        </div>

                        {/* Decorative Shape */}
                        <div className="absolute -top-4 -left-4 w-24 h-24 border-t-4 border-l-4 border-[#C5F36B] rounded-tl-2xl -z-0"></div>
                    </motion.div>


                    {/* Right Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        {/* Section Label */}
                        <div className="flex items-center gap-3 mb-5">
                            <span className="w-10 h-[2px] bg-[#789B38]"></span>

                            <span className="text-[#789B38] uppercase tracking-[3px] text-sm font-semibold">
                                Who We Are
                            </span>
                        </div>

                        {/* Heading */}
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1B2B27] leading-tight">
                            Your Trusted Partner in
                            <span className="text-[#789B38]"> Industrial Safety.</span>
                        </h2>

                        {/* Description */}
                        <p className="text-gray-600 leading-8 mt-6">
                            LiftGuard Solution is dedicated to providing reliable
                            lifting equipment and industrial safety solutions.
                            We focus on helping businesses maintain safer and
                            more efficient working environments.
                        </p>

                        <p className="text-gray-600 leading-8 mt-4">
                            Our approach is built around quality, reliability
                            and customer satisfaction. We aim to understand
                            every client's requirements and provide suitable
                            solutions for their industrial needs.
                        </p>

                        {/* Features */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">

                            <div className="flex items-center gap-3">
                                <FaCheckCircle className="text-[#789B38] text-xl shrink-0" />
                                <span className="text-[#1B2B27] font-semibold">
                                    Quality Solutions
                                </span>
                            </div>

                            <div className="flex items-center gap-3">
                                <FaCheckCircle className="text-[#789B38] text-xl shrink-0" />
                                <span className="text-[#1B2B27] font-semibold">
                                    Safety Focused
                                </span>
                            </div>

                            <div className="flex items-center gap-3">
                                <FaCheckCircle className="text-[#789B38] text-xl shrink-0" />
                                <span className="text-[#1B2B27] font-semibold">
                                    Reliable Support
                                </span>
                            </div>

                            <div className="flex items-center gap-3">
                                <FaCheckCircle className="text-[#789B38] text-xl shrink-0" />
                                <span className="text-[#1B2B27] font-semibold">
                                    Customer Focused
                                </span>
                            </div>

                        </div>

                        {/* Button */}
                        <Link
                            to="/contact"
                            className="inline-flex items-center gap-3 mt-9 px-7 py-4 bg-[#1B2B27] text-[#C5F36B] rounded-full font-semibold hover:bg-[#C5F36B] hover:text-[#1B2B27] transition-all duration-300 group"
                        >
                            Get In Touch

                            <HiArrowUpRight className="text-xl group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                        </Link>

                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default WhoWeAre;