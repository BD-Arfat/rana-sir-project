import React from 'react';
import { motion } from 'motion/react';
import {
    HiOutlineAcademicCap,
    HiOutlineShieldCheck,
    HiOutlineWrenchScrewdriver,
    HiOutlineHeart,
    HiOutlineExclamationTriangle,
    HiOutlineClipboardDocumentCheck,
    HiOutlineArrowUpRight,
    HiOutlineBuildingOffice2,
    HiOutlineBolt,
    HiOutlineLockClosed,
    HiOutlineBeaker,
} from 'react-icons/hi2';

import trainingImage from '../../../assets/training.png';

const trainingPrograms = [
    { title: 'Welding & Materials Training', icon: HiOutlineWrenchScrewdriver },
    { title: 'Lifting / Heavy Equipment Operator Training', icon: HiOutlineBuildingOffice2 },
    { title: 'First Aid', icon: HiOutlineHeart },
    { title: 'Risk & Risk Assessment', icon: HiOutlineClipboardDocumentCheck },
    { title: 'Working at Heights', icon: HiOutlineArrowUpRight },
];

const TrainingProgram = () => {
    return (
        <section className="bg-[#F7F9F3] py-20 md:py-28 overflow-hidden">

            <div className="max-w-7xl mx-auto px-5 md:px-10">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

                    {/* LEFT SIDE - IMAGE */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="relative rounded-2xl overflow-hidden">

                            <img
                                src={trainingImage}
                                alt="IISPL Professional Training Program"
                                className="w-full h-full object-cover"
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-[#1B2B27]/75 via-transparent to-transparent"></div>

                            <div className="absolute bottom-0 left-0 p-7 md:p-10">

                                <span className="inline-block px-4 py-2 bg-[#C5F36B] text-[#1B2B27] text-xs font-bold uppercase tracking-widest rounded-full mb-4">
                                    Learning & Development
                                </span>

                                <h3 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                                    Building Skills.
                                    <br />
                                    <span className="text-[#C5F36B]">
                                        Ensuring Safety.
                                    </span>
                                </h3>

                            </div>
                        </div>

                        <div className="absolute -bottom-4 -right-4 w-28 h-28 bg-[#C5F36B] rounded-2xl -z-10"></div>

                    </motion.div>


                    {/* RIGHT SIDE - CONTENT */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >

                        {/* Heading */}
                        <div className="mb-6">

                            <span className="flex items-center gap-3 text-sm font-bold uppercase tracking-[3px] text-[#789B38] mb-5">
                                <span className="w-10 h-[2px] bg-[#789B38]"></span>
                                Learning & Development
                            </span>

                            <h2 className="text-4xl sm:text-5xl font-bold text-[#1B2B27] leading-tight">
                                IISPL
                                <span className="text-[#789B38]"> Training Program.</span>
                            </h2>

                        </div>


                        {/* Main Description */}
                        <p className="text-[#52635D] text-sm sm:text-base leading-7 text-justify">
                            {/* LRLS (Lifting & Safety Solutions) provides professional training programs to enhance employee skills, workplace safety, and operational efficiency. Our experienced mentors deliver practical training based on local and international safety standards, helping businesses build a skilled, confident, and safety-conscious workforce.

                            We offer flexible training sessions at client sites, our facilities, and online to support various industrial sectors. */}
                            LRLS (Lifting & Safety Solutions) provides practical training programs to develop employee skills, improve workplace safety, and promote safe working practices. Our training covers welding, heavy equipment operation, first aid, risk assessment, and working at heights, helping build a skilled and safety-conscious workforce.
                        </p>


                        {/* Training List Heading */}
                        <div className="mt-8 mb-5 flex items-center gap-3">

                            <HiOutlineAcademicCap className="text-2xl text-[#789B38]" />

                            <h3 className="text-xl font-bold text-[#1B2B27]">
                                Our Training Programs
                            </h3>

                        </div>


                        {/* Training List */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-3">

                            {trainingPrograms.map((program, index) => {
                                const Icon = program.icon;

                                return (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 15 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{
                                            duration: 0.4,
                                            delay: index * 0.04,
                                        }}
                                        className="flex items-start gap-3 group"
                                    >

                                        <div className="w-8 h-8 shrink-0 rounded-lg bg-[#E8F1D9] flex items-center justify-center group-hover:bg-[#C5F36B] transition-colors duration-300">

                                            <Icon className="text-lg text-[#1B2B27]" />

                                        </div>

                                        <p className="text-sm font-medium text-[#1B2B27] leading-6 pt-1">
                                            {program.title}
                                        </p>

                                    </motion.div>
                                );
                            })}

                        </div>


                        {/* Bottom Note */}
                        <div className="mt-8 p-5 bg-[#1B2B27] rounded-xl flex items-center gap-4">

                            <div className="w-11 h-11 shrink-0 rounded-full bg-[#C5F36B] flex items-center justify-center">

                                <HiOutlineShieldCheck className="text-2xl text-[#1B2B27]" />

                            </div>

                            <div>
                                <h4 className="text-white font-bold text-base">
                                    Safety Through Knowledge
                                </h4>

                                <p className="text-white/65 text-xs mt-1">
                                    Learn today. Work safely tomorrow.
                                </p>
                            </div>

                        </div>

                    </motion.div>

                </div>

            </div>

        </section>
    );
};

export default TrainingProgram;