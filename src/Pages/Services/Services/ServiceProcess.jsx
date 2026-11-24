import React from 'react';
import { motion } from 'motion/react';
import {
    FaComments,
    FaClipboardCheck,
    FaCogs,
    FaCheckCircle,
} from 'react-icons/fa';

const ServiceProcess = () => {
    const steps = [
        {
            number: '01',
            title: 'Initial Consultation',
            description:
                'We discuss your requirements and understand your industrial needs to identify the right solution.',
            icon: <FaComments />,
        },
        {
            number: '02',
            title: 'Planning & Assessment',
            description:
                'We evaluate your requirements and prepare a suitable service plan based on your needs.',
            icon: <FaClipboardCheck />,
        },
        {
            number: '03',
            title: 'Service Execution',
            description:
                'Our service approach focuses on quality, safety and completing the work according to the agreed plan.',
            icon: <FaCogs />,
        },
        {
            number: '04',
            title: 'Final Review & Support',
            description:
                'We review the completed service and provide necessary support to help ensure customer satisfaction.',
            icon: <FaCheckCircle />,
        },
    ];

    return (
        <section className="bg-white py-20 md:py-28">
            <div className="max-w-7xl mx-auto px-5 sm:px-8">

                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="max-w-2xl mx-auto text-center mb-20"
                >
                    <div className="flex items-center justify-center gap-3 mb-5">
                        <span className="w-10 h-[2px] bg-[#789B38]"></span>
                        <span className="text-[#789B38] uppercase tracking-[3px] text-sm font-semibold">
                            How We Work
                        </span>
                        <span className="w-10 h-[2px] bg-[#789B38]"></span>
                    </div>

                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1B2B27] leading-tight">
                        Our Service
                        <span className="text-[#789B38]"> Process.</span>
                    </h2>

                    <p className="text-gray-500 leading-7 mt-5">
                        We follow a simple and organized process to understand
                        your needs and provide suitable industrial solutions.
                    </p>
                </motion.div>

                {/* Process Steps */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">

                    {/* Connecting Line */}
                    <div className="hidden lg:block absolute top-12 left-[12%] right-[12%] border-t-2 border-dashed border-[#C5F36B]"></div>

                    {steps.map((step, index) => (
                        <motion.div
                            key={step.number}
                            initial={{ opacity: 0, y: 35 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.6,
                                delay: index * 0.15,
                            }}
                            className="relative text-center group"
                        >
                            {/* Icon */}
                            <div className="relative z-10 w-24 h-24 mx-auto flex items-center justify-center rounded-2xl bg-[#F0F5E7] text-[#789B38] text-3xl group-hover:bg-[#C5F36B] group-hover:text-[#1B2B27] transition-all duration-500 shadow-sm">
                                {step.icon}

                                <span className="absolute -top-3 -right-3 w-9 h-9 rounded-full bg-[#1B2B27] text-[#C5F36B] text-xs font-bold flex items-center justify-center border-4 border-white">
                                    {step.number}
                                </span>
                            </div>

                            <h3 className="text-xl font-bold text-[#1B2B27] mt-8 mb-4">
                                {step.title}
                            </h3>

                            <p className="text-gray-500 text-sm leading-7 max-w-xs mx-auto">
                                {step.description}
                            </p>

                            <div className="w-10 h-1 bg-[#C5F36B] mx-auto mt-6 rounded-full group-hover:w-20 transition-all duration-500"></div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServiceProcess;