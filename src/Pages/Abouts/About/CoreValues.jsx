import React from 'react';
import { motion } from 'motion/react';
import {
    FaShieldAlt,
    FaAward,
    FaUsers,
    FaHandshake,
    FaCheckCircle,
    FaLightbulb,
} from 'react-icons/fa';

const CoreValues = () => {

    const values = [
        {
            number: '01',
            title: 'Safety First',
            description: 'We prioritize safety in every solution to support safer industrial working environments.',
            icon: <FaShieldAlt />,
        },
        {
            number: '02',
            title: 'Quality Commitment',
            description: 'We focus on quality standards and dependable solutions for every project.',
            icon: <FaAward />,
        },
        {
            number: '03',
            title: 'Customer Satisfaction',
            description: 'We value our clients and aim to understand and fulfill their individual requirements.',
            icon: <FaUsers />,
        },
        {
            number: '04',
            title: 'Professional Integrity',
            description: 'We believe in honesty, responsibility and professional conduct in everything we do.',
            icon: <FaHandshake />,
        },
        {
            number: '05',
            title: 'Reliability',
            description: 'We strive to provide dependable services and consistent support to our clients.',
            icon: <FaCheckCircle />,
        },
        {
            number: '06',
            title: 'Continuous Improvement',
            description: 'We believe in learning, improving and finding better ways to serve our clients.',
            icon: <FaLightbulb />,
        },
    ];

    return (
        <section className="bg-[#F7F9F3] py-20 md:py-28">
            <div className="max-w-7xl mx-auto px-5 sm:px-8">

                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="text-center max-w-2xl mx-auto mb-14"
                >
                    <div className="flex items-center justify-center gap-3 mb-5">
                        <span className="w-10 h-[2px] bg-[#789B38]"></span>

                        <span className="text-[#789B38] uppercase tracking-[3px] text-sm font-semibold">
                            What We Believe
                        </span>

                        <span className="w-10 h-[2px] bg-[#789B38]"></span>
                    </div>

                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1B2B27] leading-tight">
                        Our Core
                        <span className="text-[#789B38]"> Values.</span>
                    </h2>

                    <p className="text-gray-500 leading-7 mt-5">
                        The principles that guide our work, shape our decisions
                        and define our commitment to industrial safety.
                    </p>
                </motion.div>

                {/* Values Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

                    {values.map((value, index) => (
                        <motion.div
                            key={value.number}
                            initial={{ opacity: 0, y: 35 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.6,
                                delay: index * 0.1,
                            }}
                            className="group relative bg-white p-7 sm:p-8 rounded-2xl border border-[#1B2B27]/10 hover:border-[#789B38] hover:-translate-y-2 hover:shadow-xl hover:shadow-[#1B2B27]/5 transition-all duration-500 overflow-hidden"
                        >

                            {/* Number */}
                            <div className="flex items-center justify-between mb-7">
                                <div className="w-14 h-14 rounded-xl bg-[#C5F36B]/30 flex items-center justify-center text-[#1B2B27] text-2xl group-hover:bg-[#C5F36B] transition-colors duration-300">
                                    {value.icon}
                                </div>

                                <span className="text-4xl font-bold text-[#1B2B27]/10 group-hover:text-[#789B38]/30 transition-colors duration-300">
                                    {value.number}
                                </span>
                            </div>

                            {/* Content */}
                            <h3 className="text-xl font-bold text-[#1B2B27] mb-3">
                                {value.title}
                            </h3>

                            <p className="text-gray-500 leading-7 text-sm">
                                {value.description}
                            </p>

                            {/* Bottom Line */}
                            <div className="mt-7 w-10 h-1 rounded-full bg-[#C5F36B] group-hover:w-20 transition-all duration-500"></div>

                        </motion.div>
                    ))}

                </div>
            </div>
        </section>
    );
};

export default CoreValues;