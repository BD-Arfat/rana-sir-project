import React from 'react';
import { motion } from 'motion/react';
import {
    FaTruckMoving,
    FaShieldAlt,
    FaClipboardCheck,
    FaTools,
    FaIndustry,
    FaUserShield,
} from 'react-icons/fa';
import { HiArrowUpRight } from 'react-icons/hi2';

const OurServices = () => {
    const services = [
        {
            id: '01',
            title: 'Lifting Equipment',
            description:
                'Reliable lifting equipment solutions designed to support safe and efficient industrial operations.',
            icon: <FaTruckMoving />,
        },
        {
            id: '02',
            title: 'Industrial Safety',
            description:
                'Professional industrial safety solutions to help maintain a secure working environment.',
            icon: <FaShieldAlt />,
        },
        {
            id: '03',
            title: 'Equipment Inspection',
            description:
                'Thorough equipment inspection services to help ensure operational reliability and safety.',
            icon: <FaClipboardCheck />,
        },
        {
            id: '04',
            title: 'Maintenance & Support',
            description:
                'Dependable maintenance and support services to keep your equipment operating efficiently.',
            icon: <FaTools />,
        },
        {
            id: '05',
            title: 'Heavy Equipment Solutions',
            description:
                'Practical solutions for heavy equipment requirements across different industrial applications.',
            icon: <FaIndustry />,
        },
        {
            id: '06',
            title: 'Safety Consultation',
            description:
                'Professional safety consultation to help businesses improve workplace safety practices.',
            icon: <FaUserShield />,
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
                            What We Offer
                        </span>

                        <span className="w-10 h-[2px] bg-[#789B38]"></span>
                    </div>

                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1B2B27] leading-tight">
                        Our Professional
                        <span className="text-[#789B38]"> Services.</span>
                    </h2>

                    <p className="text-gray-500 leading-7 mt-5">
                        We provide reliable industrial safety and lifting
                        solutions designed to support your business operations.
                    </p>
                </motion.div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.id}
                            initial={{ opacity: 0, y: 35 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.6,
                                delay: index * 0.1,
                            }}
                            className="group relative bg-white p-8 rounded-2xl border border-[#1B2B27]/10 overflow-hidden hover:-translate-y-2 hover:shadow-xl hover:shadow-[#1B2B27]/10 transition-all duration-500"
                        >
                            {/* Number */}
                            <span className="absolute top-6 right-7 text-5xl font-bold text-[#1B2B27]/[0.05] group-hover:text-[#789B38]/20 transition-colors duration-500">
                                {service.id}
                            </span>

                            {/* Icon */}
                            <div className="w-16 h-16 rounded-2xl bg-[#F7F9F3] text-[#789B38] flex items-center justify-center text-3xl group-hover:bg-[#C5F36B] group-hover:text-[#1B2B27] transition-all duration-500">
                                {service.icon}
                            </div>

                            {/* Content */}
                            <h3 className="text-xl font-bold text-[#1B2B27] mt-7 mb-4 group-hover:text-[#789B38] transition-colors duration-300">
                                {service.title}
                            </h3>

                            <p className="text-gray-500 text-sm leading-7">
                                {service.description}
                            </p>

                            {/* Bottom Line */}
                            <div className="flex items-center justify-between mt-8 pt-5 border-t border-[#1B2B27]/10">
                                <span className="text-sm font-semibold text-[#1B2B27]">
                                    Our Service
                                </span>

                                <div className="w-10 h-10 rounded-full bg-[#F7F9F3] text-[#789B38] flex items-center justify-center group-hover:bg-[#C5F36B] group-hover:text-[#1B2B27] transition-all duration-300">
                                    <HiArrowUpRight className="text-xl group-hover:rotate-45 transition-transform duration-300" />
                                </div>
                            </div>

                            {/* Bottom Accent */}
                            <div className="absolute bottom-0 left-0 w-0 h-1 bg-[#C5F36B] group-hover:w-full transition-all duration-500"></div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default OurServices;