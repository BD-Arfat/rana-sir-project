

import React from 'react';
import { motion } from 'motion/react';
import { HiArrowUpRight } from 'react-icons/hi2';
import { FaCheckCircle } from 'react-icons/fa';

const OurStory = () => {
    const features = [
        'Commitment to Workplace Safety',
        'Reliable Lifting Solutions',
        'Quality Products & Services',
        'Customer-Focused Approach',
    ];

    return (
        <section className="relative overflow-hidden bg-[#F4F5EF] py-20 md:py-28">
            <div className="mx-auto max-w-7xl px-5 lg:px-8">

                <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">

                    {/* Left Side - Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="relative h-[420px] overflow-hidden rounded-2xl md:h-[540px]">
                            <img
                                src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=85&w=1200"
                                alt="LiftGuard industrial safety and engineering"
                                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-[#111C1A]/70 via-transparent to-transparent" />

                            <div className="absolute bottom-8 left-8">
                                <p className="text-sm font-semibold uppercase tracking-[3px] text-[#C5F36B]">
                                    LiftGuard Solution
                                </p>
                                <h3 className="mt-2 text-3xl font-bold text-white md:text-4xl">
                                    Safety Comes First.
                                </h3>
                            </div>
                        </div>

                        {/* Floating Card */}
                        <div className="absolute -bottom-8 -right-2 rounded-xl bg-[#111C1A] p-6 shadow-2xl md:-right-8 md:p-8">
                            <p className="text-sm font-medium text-gray-400">
                                Our Core Focus
                            </p>
                            <h3 className="mt-2 text-2xl font-bold text-[#C5F36B]">
                                Safety & Quality
                            </h3>
                            <p className="mt-1 text-sm text-gray-300">
                                In Every Operation
                            </p>
                        </div>

                        <div className="absolute -left-5 -top-5 -z-0 h-24 w-24 rounded-full border-2 border-[#167D75]/30" />
                    </motion.div>

                    {/* Right Side - Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="mb-5 inline-flex items-center gap-3">
                            <span className="h-[2px] w-10 bg-[#167D75]" />
                            <span className="text-sm font-bold uppercase tracking-[3px] text-[#167D75]">
                                Our Story
                            </span>
                        </div>

                        <h2 className="text-4xl font-extrabold leading-tight text-[#111C1A] md:text-5xl">
                            Building a Safer
                            <span className="block text-[#167D75]">
                                Industrial Future.
                            </span>
                        </h2>

                        <p className="mt-7 text-base leading-8 text-gray-600">
                            At LiftGuard Solution, we believe that workplace safety
                            is the foundation of every successful industrial operation.
                            Our focus is on providing dependable lifting gear and
                            heavy equipment safety solutions that help businesses
                            operate with greater confidence.
                        </p>

                        <p className="mt-5 text-base leading-8 text-gray-600">
                            We are committed to quality, reliability and customer
                            satisfaction. Through our dedication to safety and
                            professional service, we aim to support safer and
                            more efficient working environments.
                        </p>

                        {/* Features */}
                        <div className="mt-8 grid gap-4 sm:grid-cols-2">
                            {features.map((feature, index) => (
                                <div
                                    key={index}
                                    className="flex items-start gap-3"
                                >
                                    <FaCheckCircle className="mt-1 shrink-0 text-lg text-[#167D75]" />
                                    <span className="text-sm font-semibold text-[#26352F]">
                                        {feature}
                                    </span>
                                </div>
                            ))}
                        </div>

                        {/* Button */}
                        <a
                            href="/about"
                            className="group mt-10 inline-flex items-center gap-3 rounded-md bg-[#167D75] px-7 py-4 text-sm font-bold text-white transition-all duration-300 hover:bg-[#111C1A]"
                        >
                            Discover More
                            <HiArrowUpRight className="text-xl transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
                        </a>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default OurStory;
