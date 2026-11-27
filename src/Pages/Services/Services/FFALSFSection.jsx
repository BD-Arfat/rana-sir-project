import React from 'react';
import { motion } from 'motion/react';
import { HiArrowUpRight } from 'react-icons/hi2';

import ffaLsfImage from '../../../assets/fireffe.png';

const inspectionItems = [
    'All Types of Fire Extinguisher (Portable, Non-Portable, Semi-Portable)',
    'Fixed CO₂ (Carbon Dioxide) Fire Extinguishing System',
    'Fixed Foam Fire Extinguishing System (High Pressure & Low Pressure)',
    'Fixed Water Mist (Hyper Mist) Fire Extinguishing System',
    'Inergen Fire Extinguishing System',
    'Automatic Sprinkler System Fire Extinguishing System',
    'Fire Detection System and Alarm System',
    'Fire Fighter Outfit',
    'International Shore Connections',
    'Fire Mains, Fire Pumps, Fire Hydrants, Hoses and Nozzles',
    'Portable Foam Applicator Unit',
    'Fire Safety Monitoring & Maintenance Tools etc.',
];

const FFALSFSection = () => {
    return (
        <section
            id="ffa-lsf"
            className="bg-[#F7F9F3] py-14 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
        >
            <div className="max-w-7xl mx-auto">

                {/* Section Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-10 sm:mb-12 lg:mb-14"
                >
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#1B2B27] leading-tight">
                        Fire Fighting Equipment (FFE)
                    </h2>

                    <div className="w-16 sm:w-20 h-1 bg-[#C5F36B] mx-auto mt-4 sm:mt-5 rounded-full" />

                    <p className="text-[#53645C] text-sm sm:text-base lg:text-lg max-w-4xl mx-auto mt-5 sm:mt-7 leading-relaxed px-1">
                        We offer end-to-end fire safety solutions, from
                        consulting and design to full project execution.
                    </p>
                </motion.div>


                {/* Image & Equipment Scope */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-9 sm:gap-10 lg:gap-12 xl:gap-16 items-start">

                    {/* Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -35 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="w-full overflow-hidden rounded-xl sm:rounded-2xl "
                    >
                        <img
                            src={ffaLsfImage}
                            alt="Fire Fighting Equipment"
                            className="w-full h-auto max-h-[350px] sm:max-h-[450px] lg:max-h-[600px] object-contain"
                        />
                    </motion.div>


                    {/* Equipment Scope */}
                    <motion.div
                        initial={{ opacity: 0, x: 35 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="w-full min-w-0"
                    >
                        <p className="text-[#789B38] font-semibold uppercase tracking-[2px] text-xs sm:text-sm mb-2 sm:mb-3">
                            Our Equipment
                        </p>

                        <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#1B2B27] mb-5 sm:mb-7 leading-snug">
                            Fire Fighting Equipment Scope
                        </h3>


                        {/* Equipment List */}
                        <div className="w-full">

                            {inspectionItems.map((item, index) => (
                                <div
                                    key={index}
                                    className="group flex items-start gap-3 sm:gap-4 py-3 sm:py-4 border-b border-[#1B2B27]/15"
                                >

                                    {/* Number */}
                                    <span className="text-[#789B38] font-bold text-sm sm:text-base shrink-0 pt-0.5">
                                        {String(index + 1).padStart(2, '0')}
                                    </span>


                                    {/* Equipment Name */}
                                    <p className="flex-1 min-w-0 text-[#1B2B27] font-semibold text-sm sm:text-base leading-relaxed break-words group-hover:text-[#789B38] transition-colors">
                                        {item}
                                    </p>


                                    {/* Arrow Icon */}
                                    <HiArrowUpRight className="text-lg sm:text-xl text-[#789B38] shrink-0 mt-0.5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />

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