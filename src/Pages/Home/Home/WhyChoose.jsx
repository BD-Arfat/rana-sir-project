import React from 'react';
import { motion } from 'motion/react';
import { HiArrowUpRight } from 'react-icons/hi2';
import {
    FaShieldAlt,
    FaAward,
    FaUsers,
    FaTools,
    FaCheckCircle,
    FaHeadset,
} from 'react-icons/fa';

const WhyChoose = () => {

    const reasons = [
        {
            id: '01',
            title: 'Safety First',
            description:
                'We prioritize workplace safety and focus on solutions that help reduce operational risks.',
            icon: <FaShieldAlt />,
        },
        {
            id: '02',
            title: 'Quality Commitment',
            description:
                'We emphasize quality and reliability in every product and service we provide.',
            icon: <FaAward />,
        },
        {
            id: '03',
            title: 'Professional Approach',
            description:
                'We aim to understand your requirements and provide solutions suited to your needs.',
            icon: <FaUsers />,
        },
        {
            id: '04',
            title: 'Reliable Solutions',
            description:
                'Our focus is on dependable lifting and industrial safety solutions for your operations.',
            icon: <FaTools />,
        },
        {
            id: '05',
            title: 'Customer Satisfaction',
            description:
                'We value long-term relationships and work to deliver a positive customer experience.',
            icon: <FaCheckCircle />,
        },
        {
            id: '06',
            title: 'Dedicated Support',
            description:
                'We are committed to helping customers with their questions and service requirements.',
            icon: <FaHeadset />,
        },
    ];

    return (
        <section className="bg-white py-20 md:py-24">

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
                            Why Choose Us
                        </span>
                    </div>

                    <h2 className="text-3xl font-extrabold leading-tight text-[#1B2B27] md:text-5xl">
                        Why Businesses
                        <span className="block text-[#789B38]">
                            Choose LiftGuard.
                        </span>
                    </h2>

                    <p className="mt-5 text-sm leading-7 text-[#1B2B27]/65 md:text-base">
                        We believe that safety, quality and reliability are
                        essential for every successful industrial operation.
                        Our goal is to support your business with dependable
                        solutions and dedicated service.
                    </p>
                </motion.div>


                {/* Main Content */}
                <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">

                    {/* Left Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -35 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="relative"
                    >

                        <div className="overflow-hidden rounded-2xl border-8 border-[#F7F9F3] shadow-lg">

                            <img
                                src="https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?q=85&w=1200"
                                alt="Industrial engineering and safety"
                                className="h-[420px] w-full object-cover transition-transform duration-700 hover:scale-105 md:h-[540px]"
                            />

                        </div>

                        {/* Floating Card */}
                        <div className="absolute -bottom-6 -right-2 rounded-xl bg-[#1B2B27] p-5 shadow-xl md:-right-5 md:p-7">

                            <p className="text-sm text-white/60">
                                Our Promise
                            </p>

                            <h3 className="mt-2 text-xl font-extrabold text-[#C5F36B] md:text-2xl">
                                Quality & Safety
                            </h3>

                            <p className="mt-1 text-xs text-white/70">
                                In Every Operation
                            </p>

                        </div>

                    </motion.div>


                    {/* Right Features */}
                    <div className="grid gap-4 sm:grid-cols-2">

                        {reasons.map((reason, index) => (

                            <motion.div
                                key={reason.id}
                                initial={{ opacity: 0, y: 25 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.5,
                                    delay: index * 0.08,
                                }}
                                className="group rounded-xl border border-[#1B2B27]/10 bg-[#F7F9F3] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#C5F36B] hover:bg-white hover:shadow-md md:p-6"
                            >

                                {/* Icon & Number */}
                                <div className="flex items-center justify-between">

                                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#C5F36B]/35 text-xl text-[#1B2B27] transition-colors duration-300 group-hover:bg-[#C5F36B]">
                                        {reason.icon}
                                    </div>

                                    <span className="text-2xl font-extrabold text-[#1B2B27]/10 group-hover:text-[#789B38]/30">
                                        {reason.id}
                                    </span>

                                </div>

                                {/* Content */}
                                <h3 className="mt-5 text-base font-bold text-[#1B2B27] transition-colors duration-300 group-hover:text-[#789B38]">
                                    {reason.title}
                                </h3>

                                <p className="mt-2 text-sm leading-6 text-[#1B2B27]/65">
                                    {reason.description}
                                </p>

                                {/* Bottom Accent */}
                                <div className="mt-5 h-[2px] w-8 rounded-full bg-[#C5F36B] transition-all duration-300 group-hover:w-14" />

                            </motion.div>

                        ))}

                    </div>

                </div>


                {/* Bottom CTA */}
                {/* <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mt-20 flex flex-col items-start justify-between gap-6 rounded-xl bg-[#1B2B27] p-7 md:flex-row md:items-center md:p-10"
                >

                    <div>

                        <h3 className="text-xl font-bold text-white md:text-3xl">
                            Let's Build a Safer Workplace Together.
                        </h3>

                        <p className="mt-3 text-sm leading-7 text-white/65">
                            Get in touch with LiftGuard Solution to discuss your requirements.
                        </p>

                    </div>

                    <a
                        href="/contact"
                        className="group inline-flex shrink-0 items-center gap-3 rounded-lg bg-[#C5F36B] px-6 py-3.5 text-sm font-bold text-[#1B2B27] transition-all duration-300 hover:bg-white"
                    >
                        Contact Us

                        <HiArrowUpRight className="text-lg transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
                    </a>

                </motion.div> */}

            </div>

        </section>
    );
};

export default WhyChoose;