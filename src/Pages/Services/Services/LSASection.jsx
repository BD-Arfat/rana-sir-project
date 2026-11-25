
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
        subtitle: 'Smoke Signal, Rocket Parachute Flares, Hand Flares etc.',
    },
    {
        title: 'OWS/15 PPM Bilge System',
    },
    {
        title: 'Inflatable Life Rafts & Hydrostatic Release Unit (HRU)',
    },
    {
        title: 'Lifeboat, Rescue Boat, and their Davit, Winches, Release Gears',
    },
];

const LSASection = () => {
    return (
        <section
            id="lsa"
            className=" py-20 px-4 sm:px-6 lg:px-8"
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
                        Life Saving Appliances (LSA)
                    </h2>

                    <div className="w-20 h-1 bg-[#C5F36B] mx-auto mt-5 rounded-full"></div>

                    <p className="text-[#53645C] text-base sm:text-lg max-w-3xl mx-auto mt-7 leading-relaxed">
                        Life Saving Appliances (LSA) are essential for protecting
                        lives at sea, requiring proper use, regular maintenance,
                        and compliance to ensure safety during emergencies.
                    </p>
                </motion.div>

                {/* Image & Equipment List */}
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
                            src={lsaImage}
                            alt="Life Saving Appliances and Marine Safety Equipment"
                            className="w-full h-auto max-h-[650px] object-contain hover:scale-105 transition-transform duration-700"
                        />
                    </motion.div>

                    {/* Equipment List */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        <p className="text-[#789B38] font-semibold uppercase tracking-wider text-sm mb-3">
                            Our Equipment
                        </p>

                        <h3 className="text-2xl sm:text-3xl font-bold text-[#1B2B27]  mb-8">
                            Scope of LSA Equipment
                        </h3>

                        <div className="space-y-4">

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
                                    className="flex items-start justify-between gap-3 border-b border-gray-200 pb-4 group"
                                >
                                    <div className="flex items-start gap-3">

                                        <span className="text-[#789B38] font-bold text-sm mt-1 shrink-0">
                                            {String(index + 1).padStart(2, '0')}
                                        </span>

                                        <div>
                                            <p className="text-[#1B2B27] font-semibold text-base sm:text-sm leading-relaxed">
                                                {item.title}
                                            </p>

                                            {item.subtitle && (
                                                <p className="text-[#718078] text-sm mt-1">
                                                    {item.subtitle}
                                                </p>
                                            )}
                                        </div>

                                    </div>

                                    <HiArrowUpRight className="text-xl text-[#789B38] shrink-0 mt-1 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
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
