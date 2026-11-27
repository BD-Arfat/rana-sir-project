import React from 'react';
import { motion } from 'motion/react';
import { HiArrowUpRight } from 'react-icons/hi2';
import { FaCheckCircle, FaShieldAlt, FaAward, FaTools, FaUsers } from 'react-icons/fa';

const OurStory = () => {

    const features = [
        {
            icon: <FaShieldAlt />,
            title: 'Workplace Safety',
            description: 'Commitment to safer working environments.',
        },
        {
            icon: <FaTools />,
            title: 'Reliable Solutions',
            description: 'Dependable lifting and equipment solutions.',
        },
        {
            icon: <FaAward />,
            title: 'Quality Assurance',
            description: 'Quality products and professional services.',
        },
        {
            icon: <FaUsers />,
            title: 'Customer Focus',
            description: 'Building trust through customer satisfaction.',
        },
    ];

    return (
        <section className="relative overflow-hidden bg-[#F7F9F3] py-20 md:py-28">

            {/* Background Decoration */}
            <div className="absolute -right-32 top-20 h-80 w-80 rounded-full bg-[#C5F36B]/10 blur-3xl" />
            <div className="absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-[#1B2B27]/5 blur-3xl" />

            <div className="relative mx-auto max-w-7xl px-5 lg:px-8">

                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="mb-16 text-center"
                >
                    <div className="mb-5 inline-flex items-center gap-3 rounded-full border border-[#1B2B27]/10 bg-white px-5 py-2 shadow-sm">
                        <span className="h-2 w-2 rounded-full bg-[#C5F36B]" />
                        <span className="text-xs font-bold uppercase tracking-[3px] text-[#1B2B27]">
                            About
                            LIFTING & SAFETY
                        </span>
                    </div>

                    <h2 className="text-3xl font-extrabold leading-tight text-[#1B2B27] md:text-5xl">
                        Our Story & Commitment
                        <span className="block text-[#1B2B27]/50">
                            To Industrial Safety.
                        </span>
                    </h2>

                    <div className="mx-auto mt-6 h-1 w-20 rounded-full bg-[#C5F36B]" />
                </motion.div>


                {/* Main Content */}
                <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">

                    {/* Left Side - Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >

                        {/* Image Frame */}
                        <div className="relative overflow-hidden rounded-3xl border-8 border-white shadow-2xl">

                            <img
                                src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=85&w=1200"
                                alt="LiftGuard industrial safety and engineering"
                                className="h-[400px] w-full object-cover transition-transform duration-700 hover:scale-105 md:h-[560px]"
                            />

                            {/* Image Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#1B2B27]/80 via-transparent to-transparent" />

                            {/* Image Content */}
                            <div className="absolute bottom-8 left-8 right-8">

                                <div className="mb-3 flex items-center gap-2">
                                    <span className="h-2 w-2 rounded-full bg-[#C5F36B]" />
                                    <span className="text-xs font-bold uppercase tracking-[3px] text-[#C5F36B]">

                                        LIFTING & SAFETY SOLUTIONS
                                    </span>
                                </div>

                                <h3 className="text-3xl font-extrabold leading-tight text-white md:text-4xl">
                                    Your Safety.
                                    <br />
                                    Our Responsibility.
                                </h3>

                            </div>
                        </div>

                        {/* Floating Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="absolute -bottom-7 -right-2 rounded-2xl border border-[#C5F36B]/30 bg-[#1B2B27] p-5 shadow-2xl md:-right-7 md:p-7"
                        >
                            <div className="flex items-center gap-4">

                                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#C5F36B] text-xl text-[#1B2B27]">
                                    <FaShieldAlt />
                                </div>

                                <div>
                                    <p className="text-xs font-medium text-white/60">
                                        Our Core Priority
                                    </p>

                                    <h3 className="mt-1 text-lg font-extrabold text-[#C5F36B]">
                                        Safety & Quality
                                    </h3>
                                </div>

                            </div>
                        </motion.div>

                        {/* Decorative Shape */}
                        <div className="absolute -left-5 -top-5 -z-0 h-24 w-24 rounded-full border-2 border-[#C5F36B]" />

                    </motion.div>


                    {/* Right Side - Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="pt-5 lg:pt-0"
                    >

                        {/* Section Label */}
                        <div className="mb-5 flex items-center gap-3">
                            <span className="h-[2px] w-10 bg-[#1B2B27]" />

                            <span className="text-sm font-bold uppercase tracking-[3px] text-[#1B2B27]">
                                Who We Are
                            </span>
                        </div>


                        {/* Heading */}
                        <h2 className="text-3xl font-extrabold leading-tight text-[#1B2B27] md:text-5xl">
                            Building a Safer

                            <span className="mt-2 block text-[#789B38]">
                                Industrial Future.
                            </span>
                        </h2>


                        {/* Description */}
                        <p className="mt-7 text-base leading-8 text-[#1B2B27]/70">
                            At
                             LIFTING & SAFETY SOLUTIONS, we believe that workplace safety
                            is the foundation of every successful industrial operation.
                            Our focus is on providing dependable lifting gear and
                            heavy equipment safety solutions that help businesses
                            operate with greater confidence.
                        </p>

                        <p className="mt-5 text-base leading-8 text-[#1B2B27]/70">
                            We are committed to quality, reliability and customer
                            satisfaction. Through our dedication to safety and
                            professional service, we aim to support safer and
                            more efficient working environments.
                        </p>


                        {/* Features Grid */}
                        <div className="mt-9 grid gap-4 sm:grid-cols-2">

                            {features.map((feature, index) => (

                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{
                                        duration: 0.5,
                                        delay: index * 0.1,
                                    }}
                                    className="group flex gap-4 rounded-xl border border-[#1B2B27]/10 bg-white p-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#C5F36B] hover:shadow-lg"
                                >

                                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#C5F36B]/30 text-lg text-[#1B2B27] transition-all duration-300 group-hover:bg-[#C5F36B]">
                                        {feature.icon}
                                    </div>

                                    <div>
                                        <h4 className="text-sm font-extrabold text-[#1B2B27]">
                                            {feature.title}
                                        </h4>

                                        <p className="mt-1 text-xs leading-5 text-[#1B2B27]/60">
                                            {feature.description}
                                        </p>
                                    </div>

                                </motion.div>

                            ))}

                        </div>


                        {/* Discover More Button */}
                        <a
                            href="/about"
                            className="group mt-10 inline-flex items-center gap-4 rounded-lg bg-[#1B2B27] px-7 py-4 text-sm font-bold text-[#C5F36B] shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-[#C5F36B] hover:text-[#1B2B27] hover:shadow-xl"
                        >
                            Discover More

                            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#C5F36B] text-[#1B2B27] transition-all duration-300 group-hover:bg-[#1B2B27] group-hover:text-[#C5F36B]">
                                <HiArrowUpRight className="text-lg transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                            </span>
                        </a>

                    </motion.div>

                </div>

            </div>

        </section>
    );
};

export default OurStory;