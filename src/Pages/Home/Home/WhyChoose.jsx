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
        <section className="relative overflow-hidden bg-[#F4F5EF] py-20 md:py-28">

            {/* Background Decoration */}
            <div className="absolute -left-40 top-10 h-96 w-96 rounded-full bg-[#167D75]/5 blur-[120px]" />
            <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-[#C5F36B]/10 blur-[120px]" />

            <div className="relative mx-auto max-w-7xl px-5 lg:px-8">

                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="mx-auto mb-16 max-w-3xl text-center"
                >
                    <div className="mb-5 inline-flex items-center gap-3">
                        <span className="h-[2px] w-10 bg-[#167D75]" />
                        <span className="text-sm font-bold uppercase tracking-[3px] text-[#167D75]">
                            Why Choose Us
                        </span>
                        <span className="h-[2px] w-10 bg-[#167D75]" />
                    </div>

                    <h2 className="text-4xl font-extrabold leading-tight text-[#111C1A] md:text-5xl">
                        Why Businesses
                        <span className="block text-[#167D75]">
                            Choose LiftGuard.
                        </span>
                    </h2>

                    <p className="mt-6 text-base leading-8 text-gray-600 md:text-lg">
                        We believe that safety, quality and reliability are
                        essential for every successful industrial operation.
                        Our goal is to support your business with dependable
                        solutions and dedicated service.
                    </p>
                </motion.div>

                {/* Content Grid */}
                <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">

                    {/* Left Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="relative h-[450px] overflow-hidden rounded-2xl md:h-[570px]">
                            <img
                                src="https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?q=85&w=1200"
                                alt="Industrial engineering and safety"
                                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-[#111C1A]/80 via-transparent to-transparent" />

                            <div className="absolute bottom-8 left-8 right-8">
                                <span className="text-sm font-bold uppercase tracking-[3px] text-[#C5F36B]">
                                    LiftGuard Solution
                                </span>

                                <h3 className="mt-3 text-3xl font-extrabold leading-tight text-white md:text-4xl">
                                    Your Safety Is Our Priority.
                                </h3>

                                <p className="mt-3 max-w-md text-sm leading-7 text-gray-200">
                                    Supporting safer workplaces through quality,
                                    reliability and a commitment to industrial safety.
                                </p>
                            </div>
                        </div>

                        {/* Floating Card */}
                        <div className="absolute -bottom-6 -right-2 rounded-xl bg-[#111C1A] p-6 shadow-2xl md:-right-7 md:p-8">
                            <p className="text-sm text-gray-400">
                                Our Promise
                            </p>
                            <h3 className="mt-2 text-xl font-bold text-[#C5F36B] md:text-2xl">
                                Quality & Safety
                            </h3>
                        </div>
                    </motion.div>

                    {/* Right Features */}
                    <div className="grid gap-5 sm:grid-cols-2">
                        {reasons.map((reason, index) => (
                            <motion.div
                                key={reason.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.6,
                                    delay: index * 0.1,
                                }}
                                className="group relative rounded-xl border border-gray-200 bg-white p-6 transition-all duration-500 hover:-translate-y-2 hover:border-[#167D75]/40 hover:shadow-xl md:p-7"
                            >
                                <div className="absolute right-5 top-5 text-3xl font-extrabold text-gray-100 transition-colors group-hover:text-[#167D75]/10">
                                    {reason.id}
                                </div>

                                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#167D75]/10 text-2xl text-[#167D75] transition-all duration-300 group-hover:bg-[#167D75] group-hover:text-white">
                                    {reason.icon}
                                </div>

                                <h3 className="mt-6 text-lg font-bold text-[#111C1A] transition-colors group-hover:text-[#167D75]">
                                    {reason.title}
                                </h3>

                                <p className="mt-3 text-sm leading-7 text-gray-500">
                                    {reason.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>

                </div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="mt-24 flex flex-col items-center justify-between gap-6 rounded-2xl bg-[#111C1A] p-8 md:flex-row md:p-10"
                >
                    <div>
                        <h3 className="text-2xl font-bold text-white md:text-3xl">
                            Let's Build a Safer Workplace Together.
                        </h3>

                        <p className="mt-3 text-sm leading-7 text-gray-400">
                            Get in touch with LiftGuard Solution to discuss your requirements.
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

export default WhyChoose;