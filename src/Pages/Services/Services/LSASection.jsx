import React from 'react';
import { motion } from 'motion/react';
import { HiArrowUpRight } from 'react-icons/hi2';

import lsaImage from '../../../assets/lsa.png';

const lsaItems = [
    {
        title: 'Self-Contained Breathing Apparatus (SCBA)',
    },
    {
        title: 'Emergency Escape Breathing Devices (EEBD)',
    },
    {
        title: 'BA Air Compressor',
    },
    {
        title: 'Medical Oxygen Cylinders & Apparatus Set',
        subtitle: 'Portable, Semi-Portable',
    },
    {
        title: 'Lifejackets & Lifebuoys',
    },
    {
        title: 'Marine Evacuation System',
    },
    {
        title: 'Fixed Gas Detection & Alarm System',
    },
    {
        title: 'Portable Gas Detector Calibration (personal)',
    },
    {
        title: 'Immersion Suit',
    },
    {
        title: 'Marine Survival Suit',
        subtitle: 'Chemical Suit & Gas tight Suit',
    },
    {
        title: 'Distress Signals',
        subtitle:
            'Smoke Signal, Rocket Parachute Flares, Hand Flares etc.',
    },
    {
        title: 'OWS/15 PPM Bilge System',
    },
    {
        title:
            'Inflatable Life Rafts & Hydrostatic Release Unit (HRU)',
    },
    {
        title:
            'Lifeboat, Rescue Boat, and their Davit, Winches, Release Gears',
    },
];

const LSASection = () => {
    return (
        <section
            id="lsa"
            className="py-14 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
        >
            <div className="max-w-7xl mx-auto">

                {/* Section Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-10 sm:mb-14 lg:mb-16"
                >
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#1B2B27] leading-tight">
                        Life Saving Appliances (LSA)
                    </h2>

                    <div className="w-16 sm:w-20 h-1 bg-[#C5F36B] mx-auto mt-4 sm:mt-5 rounded-full"></div>

                    <p className="text-[#53645C] text-sm sm:text-base lg:text-lg max-w-3xl mx-auto mt-5 sm:mt-7 leading-relaxed px-1">
                        Life Saving Appliances (LSA) are essential for
                        protecting lives at sea, requiring proper use,
                        regular maintenance, and compliance to ensure
                        safety during emergencies.
                    </p>
                </motion.div>

                {/* Main Content */}
                <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-9 sm:gap-12 lg:gap-14 xl:gap-16 items-start">

                    {/* Image Section */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="w-full"
                    >
                        <div className="w-full  rounded-xl sm:rounded-2xl overflow-hidden flex items-center justify-center">

                            <img
                                src={lsaImage}
                                alt="Life Saving Appliances and Marine Safety Equipment"
                                className="w-full h-auto max-h-[350px] sm:max-h-[450px] lg:max-h-[600px] object-contain transition-transform duration-700 hover:scale-105"
                            />

                        </div>
                    </motion.div>

                    {/* Equipment List */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="w-full min-w-0"
                    >
                        <p className="text-[#789B38] font-semibold uppercase tracking-wider text-xs sm:text-sm mb-2 sm:mb-3">
                            Our Equipment
                        </p>

                        <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#1B2B27] mb-6 sm:mb-8">
                            Scope of LSA Equipment
                        </h3>

                        <div className="space-y-0">

                            {lsaItems.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 15 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{
                                        duration: 0.4,
                                        delay: index * 0.04,
                                    }}
                                    className="flex items-start justify-between gap-3 border-b border-gray-200 py-3 sm:py-4 group"
                                >

                                    <div className="flex items-start gap-3 min-w-0">

                                        {/* Number */}
                                        <span className="text-[#789B38] font-bold text-xs sm:text-sm mt-0.5 shrink-0">
                                            {String(index + 1).padStart(2, '0')}
                                        </span>

                                        {/* Text */}
                                        <div className="min-w-0">
                                            <p className="text-[#1B2B27] font-semibold text-sm sm:text-base leading-relaxed break-words">
                                                {item.title}
                                            </p>

                                            {item.subtitle && (
                                                <p className="text-[#718078] text-xs sm:text-sm mt-1 leading-relaxed">
                                                    {item.subtitle}
                                                </p>
                                            )}
                                        </div>

                                    </div>

                                    {/* Arrow */}
                                    <HiArrowUpRight className="text-lg sm:text-xl text-[#789B38] shrink-0 mt-0.5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />

                                </motion.div>
                            ))}

                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default LSASection;