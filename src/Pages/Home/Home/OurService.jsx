import React from 'react';
import { motion } from 'motion/react';
import { HiArrowUpRight } from 'react-icons/hi2';
import {
    FaTruckLoading,
    FaHardHat,
    FaTools,
    FaClipboardCheck,
    FaIndustry,
    FaShieldAlt,
} from 'react-icons/fa';

const OurService = () => {
    const services = [
        {
            id: '01',
            title: 'Lifting Equipment',
            description:
                'Reliable lifting equipment solutions designed to support safe and efficient industrial lifting operations.',
            icon: <FaTruckLoading />,
        },
        {
            id: '02',
            title: 'Industrial Safety',
            description:
                'Safety-focused solutions that help businesses maintain secure and responsible working environments.',
            icon: <FaShieldAlt />,
        },
        {
            id: '03',
            title: 'Equipment Inspection',
            description:
                'Inspection services to help assess equipment condition and support workplace safety standards.',
            icon: <FaClipboardCheck />,
        },
        {
            id: '04',
            title: 'Maintenance & Support',
            description:
                'Professional maintenance support to help keep industrial equipment reliable and operational.',
            icon: <FaTools />,
        },
        {
            id: '05',
            title: 'Heavy Equipment Solutions',
            description:
                'Dependable solutions for heavy equipment requirements across different industrial operations.',
            icon: <FaIndustry />,
        },
        {
            id: '06',
            title: 'Safety Consultation',
            description:
                'Guidance and consultation focused on improving lifting practices and workplace safety awareness.',
            icon: <FaHardHat />,
        },
    ];

    return (
        <section className="relative overflow-hidden bg-[#111C1A] py-20 md:py-28">

            {/* Background Decoration */}
            <div className="absolute -right-40 top-10 h-96 w-96 rounded-full bg-[#C5F36B]/5 blur-[120px]" />
            <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-[#167D75]/10 blur-[120px]" />

            <div className="relative mx-auto max-w-7xl px-5 lg:px-8">

                {/* Section Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="mx-auto mb-16 max-w-3xl text-center"
                >
                    <div className="mb-5 inline-flex items-center gap-3">
                        <span className="h-[2px] w-10 bg-[#C5F36B]" />
                        <span className="text-sm font-bold uppercase tracking-[3px] text-[#C5F36B]">
                            Our Services
                        </span>
                        <span className="h-[2px] w-10 bg-[#C5F36B]" />
                    </div>

                    <h2 className="text-4xl font-extrabold leading-tight text-white md:text-5xl">
                        Complete Solutions for
                        <span className="block text-[#C5F36B]">
                            Industrial Safety.
                        </span>
                    </h2>

                    <p className="mt-6 text-base leading-8 text-gray-400 md:text-lg">
                        We focus on dependable lifting equipment and industrial
                        safety solutions to help businesses create safer and
                        more efficient working environments.
                    </p>
                </motion.div>

                {/* Services Grid */}
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.id}
                            initial={{ opacity: 0, y: 35 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.6,
                                delay: index * 0.1,
                            }}
                            className="group relative overflow-hidden rounded-xl border border-white/10 bg-[#1B2B27] p-7 transition-all duration-500 hover:-translate-y-2 hover:border-[#C5F36B]/50 hover:bg-[#20352E] md:p-8"
                        >
                            {/* Card Number */}
                            <div className="absolute right-7 top-7 text-4xl font-extrabold text-white/5 transition-colors duration-300 group-hover:text-[#C5F36B]/10">
                                {service.id}
                            </div>

                            {/* Icon */}
                            <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-[#C5F36B]/10 text-3xl text-[#C5F36B] transition-all duration-500 group-hover:bg-[#C5F36B] group-hover:text-[#111C1A]">
                                {service.icon}
                            </div>

                            {/* Content */}
                            <h3 className="mt-7 text-xl font-bold text-white transition-colors duration-300 group-hover:text-[#C5F36B] md:text-2xl">
                                {service.title}
                            </h3>

                            <p className="mt-4 text-sm leading-7 text-gray-400">
                                {service.description}
                            </p>

                            {/* Bottom Link */}
                            <a
                                href="/contact"
                                className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-[#C5F36B] transition-all duration-300 group-hover:gap-4"
                            >
                                Get in Touch
                                <HiArrowUpRight className="text-lg" />
                            </a>

                            {/* Bottom Accent */}
                            <div className="absolute bottom-0 left-0 h-1 w-0 bg-[#C5F36B] transition-all duration-500 group-hover:w-full" />
                        </motion.div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="mt-16 flex flex-col items-center justify-between gap-6 rounded-2xl border border-white/10 bg-white/5 p-8 md:flex-row md:p-10"
                >
                    <div>
                        <h3 className="text-2xl font-bold text-white md:text-3xl">
                            Looking for a Reliable Safety Solution?
                        </h3>
                        <p className="mt-3 text-sm leading-7 text-gray-400">
                            Contact our team to discuss your industrial safety requirements.
                        </p>
                    </div>

                    <a
                        href="/contact"
                        className="group inline-flex shrink-0 items-center gap-3 rounded-md bg-[#C5F36B] px-7 py-4 text-sm font-bold text-[#111C1A] transition-all duration-300 hover:bg-white"
                    >
                        Contact Us
                        <HiArrowUpRight className="text-xl transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                    </a>
                </motion.div>

            </div>
        </section>
    );
};

export default OurService;