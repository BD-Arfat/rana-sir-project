import React from 'react';
import { motion } from 'motion/react';
import {
    FaShieldAlt,
    FaAward,
    FaUserTie,
    FaTools,
    FaHandshake,
    FaHeadset,
} from 'react-icons/fa';

const WhyChooseAbout = () => {

    const reasons = [
        {
            number: '01',
            title: 'Safety First',
            description: 'Safety remains our priority in every industrial solution.',
            icon: <FaShieldAlt />,
        },
        {
            number: '02',
            title: 'Quality Commitment',
            description: 'We focus on quality and dependable equipment solutions.',
            icon: <FaAward />,
        },
        {
            number: '03',
            title: 'Professional Approach',
            description: 'We work with a professional and responsible approach.',
            icon: <FaUserTie />,
        },
        {
            number: '04',
            title: 'Reliable Solutions',
            description: 'We aim to deliver reliable solutions for industrial needs.',
            icon: <FaTools />,
        },
        {
            number: '05',
            title: 'Customer Satisfaction',
            description: 'We value our clients and their individual requirements.',
            icon: <FaHandshake />,
        },
        {
            number: '06',
            title: 'Dedicated Support',
            description: 'We are committed to providing helpful customer support.',
            icon: <FaHeadset />,
        },
    ];

    return (
        <section className="bg-white py-20 md:py-28">
            <div className="max-w-7xl mx-auto px-5 sm:px-8">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

                    {/* Left Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="relative rounded-2xl overflow-hidden">
                            <img
                                src="https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?q=90&w=1200"
                                alt="LiftGuard Industrial Solutions"
                                className="w-full h-[400px] sm:h-[520px] object-cover hover:scale-105 transition-transform duration-700"
                            />

                            <div className="absolute inset-0 bg-[#1B2B27]/10"></div>
                        </div>

                        {/* Floating Card */}
                        <div className="absolute -bottom-6 -right-2 sm:-right-6 bg-[#1B2B27] p-6 rounded-xl shadow-xl max-w-[230px]">
                            <div className="w-12 h-12 bg-[#C5F36B] rounded-lg flex items-center justify-center mb-4">
                                <FaShieldAlt className="text-2xl text-[#1B2B27]" />
                            </div>

                            <h3 className="text-white text-xl font-bold">
                                Quality & Safety
                            </h3>

                            <p className="text-white/60 text-sm mt-2 leading-6">
                                Focused on dependable industrial solutions.
                            </p>
                        </div>

                        {/* Decoration */}
                        <div className="absolute -top-4 -left-4 w-24 h-24 border-t-4 border-l-4 border-[#C5F36B] rounded-tl-2xl -z-0"></div>
                    </motion.div>


                    {/* Right Content */}
                    <div>

                        <motion.div
                            initial={{ opacity: 0, y: 25 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7 }}
                            className="mb-9"
                        >
                            <div className="flex items-center gap-3 mb-5">
                                <span className="w-10 h-[2px] bg-[#789B38]"></span>

                                <span className="text-[#789B38] uppercase tracking-[3px] text-sm font-semibold">
                                    Why Choose Us
                                </span>
                            </div>

                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1B2B27] leading-tight">
                                Why Businesses
                                <span className="text-[#789B38]"> Choose LIFTING & SAFETY.</span>
                            </h2>

                            <p className="text-gray-500 leading-7 mt-5">
                                We are committed to providing dependable
                                industrial safety and lifting solutions
                                with a focus on quality, reliability and
                                customer satisfaction.
                            </p>
                        </motion.div>


                        {/* Reasons Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                            {reasons.map((reason, index) => (
                                <motion.div
                                    key={reason.number}
                                    initial={{ opacity: 0, y: 25 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{
                                        duration: 0.5,
                                        delay: index * 0.1,
                                    }}
                                    className="group bg-[#F7F9F3] p-5 rounded-xl border border-transparent hover:border-[#789B38]/40 hover:shadow-lg hover:shadow-[#1B2B27]/5 transition-all duration-300"
                                >
                                    <div className="flex items-center justify-between mb-4">

                                        <div className="w-11 h-11 rounded-lg bg-[#C5F36B]/40 flex items-center justify-center text-[#1B2B27] text-xl group-hover:bg-[#C5F36B] transition-colors duration-300">
                                            {reason.icon}
                                        </div>

                                        <span className="text-2xl font-bold text-[#789B38]/30">
                                            {reason.number}
                                        </span>

                                    </div>

                                    <h3 className="text-[#1B2B27] font-bold text-base mb-2">
                                        {reason.title}
                                    </h3>

                                    <p className="text-gray-500 text-sm leading-6">
                                        {reason.description}
                                    </p>
                                </motion.div>
                            ))}

                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseAbout;