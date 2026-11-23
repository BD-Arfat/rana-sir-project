import React from 'react';
import { motion } from 'motion/react';
import {
    FaClipboardList,
    FaDraftingCompass,
    FaTruckLoading,
    FaHeadset,
} from 'react-icons/fa';

const OurWorkProcess = () => {

    const processes = [
        {
            number: '01',
            title: 'Understanding Requirements',
            description:
                'We listen to our clients and understand their specific industrial requirements and project goals.',
            icon: <FaClipboardList />,
        },
        {
            number: '02',
            title: 'Planning & Consultation',
            description:
                'We evaluate the requirements and plan suitable solutions based on the project needs.',
            icon: <FaDraftingCompass />,
        },
        {
            number: '03',
            title: 'Delivering Solutions',
            description:
                'We focus on delivering reliable lifting and industrial safety solutions with quality in mind.',
            icon: <FaTruckLoading />,
        },
        {
            number: '04',
            title: 'Ongoing Support',
            description:
                'We remain committed to providing support and maintaining long-term client relationships.',
            icon: <FaHeadset />,
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
                    className="max-w-2xl mx-auto text-center mb-16"
                >
                    <div className="flex items-center justify-center gap-3 mb-5">
                        <span className="w-10 h-[2px] bg-[#789B38]"></span>

                        <span className="text-[#789B38] uppercase tracking-[3px] text-sm font-semibold">
                            How We Work
                        </span>

                        <span className="w-10 h-[2px] bg-[#789B38]"></span>
                    </div>

                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1B2B27] leading-tight">
                        Our Work
                        <span className="text-[#789B38]"> Process.</span>
                    </h2>

                    <p className="text-gray-500 leading-7 mt-5">
                        A simple and structured approach to understanding
                        your needs and delivering reliable solutions.
                    </p>
                </motion.div>


                {/* Process Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">

                    {processes.map((process, index) => (
                        <motion.div
                            key={process.number}
                            initial={{ opacity: 0, y: 35 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.6,
                                delay: index * 0.15,
                            }}
                            className="group relative"
                        >

                            {/* Card */}
                            <div className="relative h-full bg-[#F7F9F3] border border-[#1B2B27]/10 rounded-2xl p-7 hover:bg-[#1B2B27] hover:-translate-y-2 hover:shadow-xl hover:shadow-[#1B2B27]/10 transition-all duration-500">

                                {/* Number */}
                                <div className="flex items-center justify-between mb-8">

                                    <div className="w-14 h-14 rounded-xl bg-[#C5F36B] flex items-center justify-center text-[#1B2B27] text-2xl group-hover:scale-110 transition-transform duration-300">
                                        {process.icon}
                                    </div>

                                    <span className="text-4xl font-bold text-[#1B2B27]/10 group-hover:text-white/20 transition-colors duration-300">
                                        {process.number}
                                    </span>

                                </div>

                                {/* Content */}
                                <h3 className="text-xl font-bold text-[#1B2B27] group-hover:text-white leading-7 transition-colors duration-300">
                                    {process.title}
                                </h3>

                                <p className="text-gray-500 group-hover:text-white/65 text-sm leading-7 mt-4 transition-colors duration-300">
                                    {process.description}
                                </p>

                                {/* Bottom Line */}
                                <div className="w-12 h-1 bg-[#C5F36B] rounded-full mt-7 group-hover:w-24 transition-all duration-500"></div>

                            </div>

                        </motion.div>
                    ))}

                </div>


                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="mt-20 bg-[#1B2B27] rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-7"
                >

                    <div className="text-center md:text-left">
                        <h3 className="text-2xl sm:text-3xl font-bold text-white">
                            Ready to Work With Us?
                        </h3>

                        <p className="text-white/60 mt-3 leading-7">
                            Let's discuss your industrial safety and lifting requirements.
                        </p>
                    </div>

                    <a
                        href="/contact"
                        className="shrink-0 inline-flex items-center justify-center gap-3 bg-[#C5F36B] text-[#1B2B27] px-8 py-4 rounded-full font-semibold hover:bg-white transition-all duration-300"
                    >
                        Contact Us

                        <span className="text-xl">↗</span>
                    </a>

                </motion.div>

            </div>
        </section>
    );
};

export default OurWorkProcess;