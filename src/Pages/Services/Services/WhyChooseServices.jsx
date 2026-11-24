import React from 'react';
import { motion } from 'motion/react';
import {
    FaShieldAlt,
    FaAward,
    FaTools,
    FaHandshake,
    FaHeadset,
    FaCheckCircle,
} from 'react-icons/fa';

const WhyChooseServices = () => {
    const reasons = [
        {
            icon: <FaShieldAlt />,
            title: 'Safety First',
            description:
                'We prioritize safety in every solution to help create a secure working environment.',
        },
        {
            icon: <FaAward />,
            title: 'Quality Commitment',
            description:
                'We focus on quality and dependable solutions for different industrial requirements.',
        },
        {
            icon: <FaTools />,
            title: 'Practical Solutions',
            description:
                'Our solutions are designed to support real operational needs and improve efficiency.',
        },
        {
            icon: <FaHandshake />,
            title: 'Customer Focus',
            description:
                'We value customer requirements and aim to provide suitable solutions for every project.',
        },
        {
            icon: <FaHeadset />,
            title: 'Reliable Support',
            description:
                'We aim to provide dependable assistance and support throughout the service process.',
        },
        {
            icon: <FaCheckCircle />,
            title: 'Professional Approach',
            description:
                'We follow a responsible and organized approach to deliver service with confidence.',
        },
    ];

    return (
        <section className="bg-[#F7F9F3] py-20 md:py-28">
            <div className="max-w-7xl mx-auto px-5 sm:px-8">

                {/* Section Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="max-w-2xl mx-auto text-center mb-16"
                >
                    <div className="flex items-center justify-center gap-3 mb-5">
                        <span className="w-10 h-[2px] bg-[#789B38]"></span>

                        <span className="text-[#789B38] uppercase tracking-[3px] text-sm font-semibold">
                            Why Choose Us
                        </span>

                        <span className="w-10 h-[2px] bg-[#789B38]"></span>
                    </div>

                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1B2B27] leading-tight">
                        Why Choose Our
                        <span className="text-[#789B38]"> Services?</span>
                    </h2>

                    <p className="text-gray-500 leading-7 mt-5">
                        We are committed to providing reliable industrial
                        solutions with a strong focus on safety, quality
                        and customer satisfaction.
                    </p>
                </motion.div>

                {/* Reasons Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {reasons.map((reason, index) => (
                        <motion.div
                            key={reason.title}
                            initial={{ opacity: 0, y: 35 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.6,
                                delay: index * 0.1,
                            }}
                            className="group bg-white p-8 rounded-2xl border border-gray-100 hover:border-[#C5F36B] hover:shadow-xl transition-all duration-500"
                        >
                            <div className="w-16 h-16 flex items-center justify-center rounded-xl bg-[#F0F5E7] text-[#789B38] text-2xl group-hover:bg-[#C5F36B] group-hover:text-[#1B2B27] transition-all duration-500">
                                {reason.icon}
                            </div>

                            <h3 className="text-xl font-bold text-[#1B2B27] mt-7 mb-3">
                                {reason.title}
                            </h3>

                            <p className="text-gray-500 leading-7 text-sm">
                                {reason.description}
                            </p>

                            <div className="w-10 h-1 bg-[#C5F36B] mt-7 rounded-full group-hover:w-20 transition-all duration-500"></div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseServices;