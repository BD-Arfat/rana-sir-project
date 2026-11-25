import React from 'react';
import { motion } from 'motion/react';
import { HiArrowUpRight } from 'react-icons/hi2';

import riggerImage from '../../../assets/loadtest1.jpg';

const trainingItems = [
    {
        id: '01',
        title: 'Rigging Equipment & Tools',
    },
    {
        id: '02',
        title: 'Lifting Operations & Techniques',
    },
    {
        id: '03',
        title: 'Slinging & Load Handling',
    },
    {
        id: '04',
        title: 'Rigging Safety Procedures',
    },
    {
        id: '05',
        title: 'Equipment Inspection & Assessment',
    },
    {
        id: '06',
        title: 'Practical Rigging Training',
    },
];

const RiggerTraining = () => {
    return (
        <section className="relative py-20 sm:py-24 bg-white overflow-hidden">

            <div className="max-w-7xl mx-auto px-5 sm:px-8">

                {/* Section Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <span className="inline-block text-sm font-semibold tracking-[3px] uppercase text-[#789B38] mb-4">
                        Our Services
                    </span>

                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1B2B27]">
                        Rigger{' '}
                        <span className="text-[#789B38]">
                            Training
                        </span>
                    </h2>

                    <div className="w-16 h-1.5 bg-[#C5F36B] rounded-full mx-auto mt-6" />
                </motion.div>


                {/* Image & Training Content */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">

                    {/* Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="overflow-hidden rounded-xl bg-[#F7F9F3]"
                    >
                        <img
                            src={riggerImage}
                            alt="Professional Rigger Training"
                            className="w-full h-auto max-h-[550px] object-contain hover:scale-105 transition-transform duration-700"
                        />
                    </motion.div>


                    {/* Training Scope */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        <span className="text-sm font-semibold tracking-[2px] uppercase text-[#789B38]">
                            Professional Training
                        </span>

                        <h3 className="text-2xl sm:text-3xl font-bold text-[#1B2B27] mt-4 mb-5">
                            Scope of Rigger Training
                        </h3>

                        <p className="text-gray-600 leading-7 mb-7">
                            Our Rigger Training program focuses on developing
                            essential rigging knowledge, equipment awareness
                            and workplace safety skills.
                        </p>

                        <div>
                            {trainingItems.map((item) => (
                                <div
                                    key={item.id}
                                    className="group flex items-center gap-5 py-5 border-b border-[#1B2B27]/15"
                                >
                                    <span className="text-lg font-bold text-[#789B38]">
                                        {item.id}
                                    </span>

                                    <h4 className="flex-1 text-base sm:text-lg font-semibold text-[#1B2B27] group-hover:text-[#789B38] transition-colors">
                                        {item.title}
                                    </h4>

                                    <HiArrowUpRight className="text-xl text-[#789B38] opacity-0 group-hover:opacity-100 transition-opacity" />
                                </div>
                            ))}
                        </div>
                    </motion.div>

                </div>

            </div>
        </section>
    );
};

export default RiggerTraining;