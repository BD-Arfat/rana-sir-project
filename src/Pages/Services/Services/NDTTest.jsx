import React from 'react';
import { motion } from 'motion/react';
import { HiArrowUpRight } from 'react-icons/hi2';
import { Link } from 'react-router';
import image from '../../../assets/Core.png'

const coreServices = [
    'Visual Testing (VT) Inspection',
    'Radiographic Testing (RT) Inspection',
    'Ultrasonic Testing (UT) Inspection',
    'Magnetic Particle Testing (MT) Inspection',
    'Acoustic Emission (AE) Inspection',
    'Dye Penetrant Testing (PT) Inspection',
    'Leak Testing (LT) Inspection',
    'Eddy Current Testing (ET) Inspection',
];

const advancedServices = [
    'Hardness Inspection',
    'Surface Roughness Inspection',
    'DFT / Paint Coating Thickness Inspection',
    'Positive Material Identification (PMI)',
    'Holiday Test Service',
    'Pull-Off Test / Adhesion Test Service',
];

const specializedServices = [
    'Exothermic Welding Services',
    'Cathodic Protection Service',
    'Tank Calibration Service',
    'Pressure Vessel, Lifting & Boiler Inspection Service',
];

const destructiveServices = [
    'Root Bend Test',
    'Face Bend Test',
    'Tensile Test',
    'Macrography',
    'Impact Test',
];

// Reusable Service Card
const ServiceCard = ({ title, number, items, delay = 0 }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay }}
            className="group relative bg-white border border-[#1B2B27]/10 rounded-xl p-6 sm:p-8 hover:border-[#789B38] hover:shadow-xl hover:shadow-[#1B2B27]/5 transition-all duration-500"
        >
            {/* Number */}
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#C5F36B]/30 text-[#1B2B27] font-bold text-sm mb-5">
                {number}
            </span>

            {/* Title */}
            <h3 className="text-[#1B2B27] text-xl font-bold mb-6 group-hover:text-[#789B38] transition-colors duration-300">
                {title}
            </h3>

            {/* Service List */}
            <ul className="space-y-3">
                {items.map((item, index) => (
                    <li
                        key={index}
                        className="flex items-start gap-3 text-gray-600 text-sm leading-6"
                    >
                        <span className="text-[#789B38] font-bold mt-0.5">
                            ✓
                        </span>

                        <span>{item}</span>
                    </li>
                ))}
            </ul>

            {/* Bottom Line */}
            <div className="w-12 h-[3px] bg-[#C5F36B] mt-7 group-hover:w-24 transition-all duration-500"></div>
        </motion.div>
    );
};

const NDTTest = () => {
    return (
        <section className="bg-[#F7F9F3]">



            {/* Core NDT Services */}
            <section className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-12 lg:py-16">

                {/* Section Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="text-center mb-14"
                >
                    <span className="text-[#789B38] text-sm font-bold uppercase tracking-[3px]">
                        Our Expertise
                    </span>

                    <h2 className="text-[#1B2B27] text-3xl sm:text-4xl lg:text-5xl font-bold mt-4">
                        Core <span className="text-[#789B38]">NDT Services</span>
                    </h2>

                    <p className="text-gray-600 max-w-2xl mx-auto mt-5 leading-7">
                        Our core NDT services include different inspection
                        methods for evaluating materials and components.
                    </p>
                </motion.div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">

                    {/* Core Service List */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="bg-white rounded-xl border border-[#1B2B27]/10 p-6 sm:p-9 shadow-lg shadow-[#1B2B27]/5"
                    >
                        <h3 className="text-[#1B2B27] text-2xl font-bold mb-7">
                            Our NDT Inspection Methods
                        </h3>

                        <div className="space-y-4">

                            {coreServices.map((service, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -15 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{
                                        duration: 0.4,
                                        delay: index * 0.06,
                                    }}
                                    className="flex items-start gap-3 border-b border-gray-100 pb-3 last:border-0"
                                >
                                    <span className="w-7 h-7 shrink-0 rounded-full bg-[#C5F36B]/30 text-[#789B38] flex items-center justify-center text-sm font-bold">
                                        ✓
                                    </span>

                                    <span className="text-gray-600 text-sm sm:text-base leading-7">
                                        {service}
                                    </span>
                                </motion.div>
                            ))}

                        </div>
                    </motion.div>

                    {/* NDT Image */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative min-h-[400px] lg:min-h-full overflow-hidden rounded-xl shadow-xl"
                    >
                        <img
                            src={image}
                            alt="LIFTING & SAFETY SOLUTIONS"
                            className="absolute inset-0 w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-[#1B2B27]/90 via-[#1B2B27]/10 to-transparent"></div>

                        <div className="absolute bottom-0 left-0 p-7 sm:p-9">

                            <span className="text-[#C5F36B] text-sm font-bold uppercase tracking-[3px]">
                                
LIFTING & SAFETY SOLUTIONS
                            </span>

                            <h3 className="text-white text-3xl sm:text-4xl font-bold mt-3">
                                NDT Testing &
                                <span className="block">
                                    Inspection
                                </span>
                            </h3>

                        </div>
                    </motion.div>

                </div>

            </section>

            {/* Additional Services */}
            <section className="bg-white py-20 lg:py-24">

                <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">

                    {/* Section Heading */}
                    <motion.div
                        initial={{ opacity: 0, y: 25 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="text-center mb-14"
                    >
                        <span className="text-[#789B38] text-sm font-bold uppercase tracking-[3px]">
                            More Services
                        </span>

                        <h2 className="text-[#1B2B27] text-3xl sm:text-4xl lg:text-5xl font-bold mt-4">
                            Additional <span className="text-[#789B38]">Services</span>
                        </h2>

                        <p className="text-gray-600 max-w-2xl mx-auto mt-5 leading-7">
                            Explore our additional inspection, specialized
                            and destructive testing services.
                        </p>
                    </motion.div>

                    {/* Service Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                        <ServiceCard
                            number="01"
                            title="Advanced Inspection & Evaluation"
                            items={advancedServices}
                            delay={0}
                        />

                        <ServiceCard
                            number="02"
                            title="Specialized Services"
                            items={specializedServices}
                            delay={0.1}
                        />

                        <ServiceCard
                            number="03"
                            title="Destructive Testing (DT)"
                            items={destructiveServices}
                            delay={0.2}
                        />

                    </div>

                </div>

            </section>

        </section>
    );
};

export default NDTTest;