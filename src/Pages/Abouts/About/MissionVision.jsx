import React from 'react';
import { motion } from 'motion/react';
import { FaBullseye, FaEye } from 'react-icons/fa';

const MissionVision = () => {
    const items = [
        {
            number: '01',
            title: 'Our Mission',
            description:
                'To provide reliable lifting and industrial safety solutions that help businesses maintain safer working environments. We are committed to quality, reliability and customer satisfaction.',
            icon: <FaBullseye />,
        },
        {
            number: '02',
            title: 'Our Vision',
            description:
                'To become a trusted name in industrial safety through quality, reliability and professional service while contributing to a safer and more efficient industrial future.',
            icon: <FaEye />,
        },
    ];

    return (
        <section className="bg-white py-20 md:py-28">
            <div className="max-w-7xl mx-auto px-5 sm:px-8">

                {/* Section Heading */}
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
                            Our Purpose
                        </span>
                        <span className="w-10 h-[2px] bg-[#789B38]"></span>
                    </div>

                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1B2B27] leading-tight">
                        Our Mission &
                        <span className="text-[#789B38]"> Vision.</span>
                    </h2>

                    <p className="text-gray-500 leading-7 mt-5">
                        Our mission and vision guide everything we do
                        to create a safer industrial future.
                    </p>
                </motion.div>


                {/* Mission & Vision Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-7">

                    {items.map((item, index) => (
                        <motion.div
                            key={item.number}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.7,
                                delay: index * 0.2,
                            }}
                            className="group relative bg-[#F7F9F3] border border-[#1B2B27]/10 rounded-2xl p-8 sm:p-10 overflow-hidden hover:bg-[#1B2B27] transition-all duration-500"
                        >

                            {/* Background Number */}
                            <span className="absolute -right-2 -top-8 text-[150px] font-bold text-[#1B2B27]/[0.04] group-hover:text-white/[0.04] transition-colors duration-500 select-none">
                                {item.number}
                            </span>

                            {/* Icon */}
                            <div className="relative z-10 w-16 h-16 flex items-center justify-center rounded-xl bg-[#C5F36B] text-[#1B2B27] text-2xl mb-7 group-hover:scale-110 transition-transform duration-500">
                                {item.icon}
                            </div>

                            {/* Title */}
                            <h3 className="relative z-10 text-2xl sm:text-3xl font-bold text-[#1B2B27] group-hover:text-white transition-colors duration-500">
                                {item.title}
                            </h3>

                            {/* Description */}
                            <p className="relative z-10 text-gray-600 group-hover:text-white/70 leading-8 mt-5 transition-colors duration-500">
                                {item.description}
                            </p>

                            {/* Bottom Line */}
                            <div className="relative z-10 mt-8 w-16 h-1 bg-[#C5F36B] rounded-full group-hover:w-28 transition-all duration-500"></div>

                        </motion.div>
                    ))}

                </div>
            </div>
        </section>
    );
};

export default MissionVision;