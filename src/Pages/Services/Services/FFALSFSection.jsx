import React from 'react';
import { motion } from 'motion/react';
import { HiArrowUpRight } from 'react-icons/hi2';

import ffaLsfImage from '../../../assets/maritime.png';

const inspectionItems = [
    'Fire Extinguisher Inspection',
    'Fire Hose & Fire Hose Reel Inspection',
    'Fire Fighting Equipment Inspection',
    'Life Jacket Inspection',
    'Life Buoy Inspection',
    'Lifeboat & Life Saving Equipment Inspection',
];

const FFALSFSection = () => {
    return (
        <section className="bg-[#F7F9F3] py-20 px-4 sm:px-6 lg:px-8">

            <div className="max-w-7xl mx-auto">

                {/* Section Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-14"
                >
                    <p className="text-[#789B38] font-semibold uppercase tracking-[3px] text-sm mb-3">
                        Our Services
                    </p>

                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1B2B27]">
                        FFA & LSF Inspection
                    </h2>

                    <div className="w-20 h-1 bg-[#C5F36B] mx-auto mt-5 rounded-full"></div>
                </motion.div>


                {/* Image & Inspection Scope */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">

                    {/* Image */}
                    {/* Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="overflow-hidden rounded-2xl bg-white"
                    >
                        <img
                            src={ffaLsfImage}
                            alt="FFA and LSF Inspection"
                            className="w-full h-auto max-h-[550px] object-contain hover:scale-105 transition-transform duration-700"
                        />
                    </motion.div>


                    {/* Inspection Scope */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        <p className="text-[#789B38] font-semibold uppercase tracking-wider text-sm mb-3">
                            Inspection Scope
                        </p>

                        <h3 className="text-2xl sm:text-3xl font-bold text-[#1B2B27] mb-7">
                            Scope of FFA & LSF Inspection
                        </h3>

                        <div className="space-y-4">

                            {inspectionItems.map((item, index) => (
                                <div
                                    key={index}
                                    className="flex items-center justify-between gap-4 border-b border-gray-200 pb-4 group"
                                >
                                    <div className="flex items-center gap-4">

                                        <span className="text-[#789B38] font-bold text-sm">
                                            0{index + 1}
                                        </span>

                                        <p className="text-[#1B2B27] font-medium text-base sm:text-lg">
                                            {item}
                                        </p>

                                    </div>

                                    <HiArrowUpRight className="text-xl text-[#789B38] shrink-0 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                </div>
                            ))}

                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default FFALSFSection;