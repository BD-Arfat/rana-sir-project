import React from 'react';
import { motion } from 'motion/react';
import {
    FaTruckLoading,
    FaShieldAlt,
    FaClipboardCheck,
    FaTools,
    FaIndustry,
    FaHardHat,
} from 'react-icons/fa';

const OurExpertise = () => {

    const expertise = [
        {
            number: '01',
            title: 'Lifting Equipment',
            description:
                'Reliable lifting equipment solutions designed to support industrial lifting operations.',
            icon: <FaTruckLoading />,
        },
        {
            number: '02',
            title: 'Industrial Safety',
            description:
                'Safety-focused solutions to help businesses maintain safer working environments.',
            icon: <FaShieldAlt />,
        },
        {
            number: '03',
            title: 'Equipment Inspection',
            description:
                'Equipment inspection services focused on quality, reliability and operational safety.',
            icon: <FaClipboardCheck />,
        },
        {
            number: '04',
            title: 'Maintenance & Support',
            description:
                'Dependable maintenance and support solutions for industrial equipment.',
            icon: <FaTools />,
        },
        {
            number: '05',
            title: 'Heavy Equipment Solutions',
            description:
                'Industrial equipment solutions to support demanding workplace requirements.',
            icon: <FaIndustry />,
        },
        {
            number: '06',
            title: 'Safety Consultation',
            description:
                'Professional guidance to help businesses make informed industrial safety decisions.',
            icon: <FaHardHat />,
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
                    className="max-w-2xl mx-auto text-center mb-14"
                >
                    <div className="flex items-center justify-center gap-3 mb-5">
                        <span className="w-10 h-[2px] bg-[#789B38]"></span>

                        <span className="text-[#789B38] uppercase tracking-[3px] text-sm font-semibold">
                            What We Do
                        </span>

                        <span className="w-10 h-[2px] bg-[#789B38]"></span>
                    </div>

                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1B2B27] leading-tight">
                        Our Areas of
                        <span className="text-[#789B38]"> Expertise.</span>
                    </h2>

                    <p className="text-gray-500 leading-7 mt-5">
                        Explore our range of industrial lifting and safety
                        solutions designed to support your business needs.
                    </p>
                </motion.div>


                {/* Expertise Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

                    {expertise.map((item, index) => (
                        <motion.div
                            key={item.number}
                            initial={{ opacity: 0, y: 35 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.6,
                                delay: index * 0.1,
                            }}
                            className="group relative bg-white rounded-2xl p-7 sm:p-8 border border-[#1B2B27]/10 hover:border-[#789B38]/50 hover:-translate-y-2 hover:shadow-xl hover:shadow-[#1B2B27]/5 transition-all duration-500 overflow-hidden"
                        >

                            {/* Top Number */}
                            <div className="flex items-center justify-between mb-7">

                                <div className="w-16 h-16 rounded-xl bg-[#C5F36B]/30 flex items-center justify-center text-2xl text-[#1B2B27] group-hover:bg-[#C5F36B] group-hover:scale-110 transition-all duration-300">
                                    {item.icon}
                                </div>

                                <span className="text-4xl font-bold text-[#1B2B27]/10 group-hover:text-[#789B38]/30 transition-colors duration-300">
                                    {item.number}
                                </span>

                            </div>

                            {/* Content */}
                            <h3 className="text-xl font-bold text-[#1B2B27] mb-3">
                                {item.title}
                            </h3>

                            <p className="text-gray-500 text-sm leading-7">
                                {item.description}
                            </p>

                            {/* Bottom Accent */}
                            <div className="mt-7 w-12 h-1 rounded-full bg-[#C5F36B] group-hover:w-24 transition-all duration-500"></div>

                        </motion.div>
                    ))}

                </div>

            </div>
        </section>
    );
};

export default OurExpertise;