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
        <section className="bg-[#F7F9F3] py-20 md:py-24">

            <div className="mx-auto max-w-7xl px-5 lg:px-8">

                {/* Section Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mx-auto mb-14 max-w-2xl text-center"
                >
                    <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#C5F36B]/30 px-4 py-2">
                        <span className="h-2 w-2 rounded-full bg-[#1B2B27]" />

                        <span className="text-xs font-bold uppercase tracking-[2px] text-[#1B2B27]">
                            Our Services
                        </span>
                    </div>

                    <h2 className="text-3xl font-extrabold leading-tight text-[#1B2B27] md:text-5xl">
                        What We Do for
                        <span className="block text-[#789B38]">
                            Industrial Safety.
                        </span>
                    </h2>

                    <p className="mt-5 text-sm leading-7 text-[#1B2B27]/65 md:text-base">
                        We provide reliable lifting equipment and industrial safety
                        solutions to help businesses maintain safer and more
                        efficient working environments.
                    </p>
                </motion.div>


                {/* Services Grid */}
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

                    {services.map((service, index) => (

                        <motion.div
                            key={service.id}
                            initial={{ opacity: 0, y: 25 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.5,
                                delay: index * 0.08,
                            }}
                            className="group rounded-xl border border-[#1B2B27]/10 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#C5F36B] hover:shadow-lg md:p-8"
                        >

                            {/* Card Top */}
                            <div className="flex items-center justify-between">

                                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#C5F36B]/30 text-2xl text-[#1B2B27] transition-colors duration-300 group-hover:bg-[#C5F36B]">
                                    {service.icon}
                                </div>

                                <span className="text-3xl font-extrabold text-[#1B2B27]/10 transition-colors duration-300 group-hover:text-[#C5F36B]">
                                    {service.id}
                                </span>

                            </div>


                            {/* Card Content */}
                            <h3 className="mt-7 text-xl font-bold text-[#1B2B27] transition-colors duration-300 group-hover:text-[#789B38]">
                                {service.title}
                            </h3>

                            <p className="mt-3 text-sm leading-7 text-[#1B2B27]/65">
                                {service.description}
                            </p>


                            {/* Card Link */}
                            <a
                                href="/contact"
                                className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#1B2B27] transition-all duration-300 group-hover:gap-3 group-hover:text-[#789B38]"
                            >
                                Get in Touch

                                <HiArrowUpRight className="text-lg" />
                            </a>

                            {/* Bottom Accent */}
                            <div className="mt-6 h-[2px] w-10 rounded-full bg-[#C5F36B] transition-all duration-300 group-hover:w-20" />

                        </motion.div>

                    ))}

                </div>


                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mt-14 flex flex-col items-start justify-between gap-6 rounded-xl bg-[#1B2B27] p-7 md:flex-row md:items-center md:p-10"
                >

                    <div>
                        <h3 className="text-xl font-bold text-white md:text-3xl">
                            Need a Reliable Safety Solution?
                        </h3>

                        <p className="mt-3 text-sm leading-7 text-white/65">
                            Get in touch with our team to discuss your industrial requirements.
                        </p>
                    </div>

                    <a
                        href="/contact"
                        className="group inline-flex shrink-0 items-center gap-3 rounded-lg bg-[#C5F36B] px-6 py-3.5 text-sm font-bold text-[#1B2B27] transition-all duration-300 hover:bg-white"
                    >
                        Contact Us

                        <HiArrowUpRight className="text-lg transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
                    </a>

                </motion.div>

            </div>

        </section>
    );
};

export default OurService;