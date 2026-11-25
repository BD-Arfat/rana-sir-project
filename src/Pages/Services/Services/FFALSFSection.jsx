
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
            className="bg-[#F7F9F3] py-20 px-4 sm:px-6 lg:px-8"
        >
            <div className="max-w-7xl mx-auto">

                {/* Section Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-14"
                >

                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1B2B27]">
                        Fire Fighting Equipment (FFE)
                    </h2>

                    <div className="w-20 h-1 bg-[#C5F36B] mx-auto mt-5 rounded-full"></div>

                    <p className="text-[#53645C] text-base sm:text-lg max-w-4xl mx-auto mt-7 leading-relaxed">
                        We offer end-to-end fire safety solutions, from
                        consulting and design to full project execution.
                    </p>
                </motion.div>

                {/* Image & Inspection Scope */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">

                    {/* Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="overflow-hidden rounded-2xl"
                    >
                        <img
                            src={ffaLsfImage}
                            alt="Fire Fighting Equipment"
                            className="w-full h-auto max-h-[550px] object-contain hover:scale-105 transition-transform duration-700"
                        />
                    </motion.div>

                    {/* Equipment Scope */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        <p className="text-[#789B38] font-semibold uppercase tracking-wider text-sm mb-3">
                            Our Equipment
                        </p>

                        <h3 className="text-2xl sm:text-3xl font-bold text-[#1B2B27] mb-7">
                            Fire Fighting Equipment Scope
                        </h3>

                        <div className="space-y-4">

                            {inspectionItems.map((item, index) => (
                                <div
                                    key={index}
                                    className="flex items-start justify-between gap-4 border-b border-gray-200 pb-4 group"
                                >
                                    <div className="flex items-start gap-4">

                                        <span className="text-[#789B38] font-bold text-lg shrink-0 mt-1">
                                            {String(index + 1).padStart(2, '0')}
                                        </span>

                                        <p className="text-[#1B2B27]  font-bold text-base sm:text-sm leading-relaxed">
                                            {item}
                                        </p>

                                    </div>

                                    <HiArrowUpRight className="text-xl text-[#789B38] shrink-0 mt-1 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
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
