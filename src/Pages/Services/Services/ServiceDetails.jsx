import React from 'react';
import { motion } from 'motion/react';
import {
    HiArrowUpRight,
    HiCheckCircle,
} from 'react-icons/hi2';

const ServiceDetails = () => {
    const serviceDetails = [
        {
            id: '01',
            title: 'Lifting Equipment Solutions',
            subtitle: 'Reliable Lifting Solutions',
            description:
                'We provide reliable lifting equipment solutions designed to support safe, efficient and smooth industrial operations. Our solutions help businesses handle different lifting requirements with confidence.',
            features: [
                'Industrial Lifting Equipment',
                'Material Handling Solutions',
                'Reliable Equipment Support',
                'Operational Safety Focus',
            ],
            image:
                'https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=90&w=1200',
        },
        {
            id: '02',
            title: 'Industrial Safety Solutions',
            subtitle: 'Creating Safer Workplaces',
            description:
                'We focus on industrial safety solutions that help businesses maintain a secure working environment. Our approach supports workplace safety, operational awareness and responsible practices.',
            features: [
                'Workplace Safety Solutions',
                'Industrial Safety Support',
                'Safety Equipment Guidance',
                'Risk Awareness Support',
            ],
            image:
                'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=90&w=1200',
        },
        {
            id: '03',
            title: 'Equipment Inspection',
            subtitle: 'Quality & Reliability',
            description:
                'Proper equipment inspection plays an important role in maintaining reliability and safety. We provide inspection support to help businesses understand equipment condition and operational requirements.',
            features: [
                'Equipment Condition Checks',
                'Inspection Support',
                'Quality Assessment',
                'Operational Reliability',
            ],
            image:
                'https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?q=90&w=1200',
        },
        {
            id: '04',
            title: 'Maintenance & Support',
            subtitle: 'Keeping Operations Running',
            description:
                'Our maintenance and support solutions help businesses maintain equipment performance and reduce operational interruptions through dependable assistance.',
            features: [
                'Equipment Maintenance Support',
                'Technical Assistance',
                'Performance Support',
                'Ongoing Service Assistance',
            ],
            image:
                'https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=90&w=1200',
        },
        {
            id: '05',
            title: 'Heavy Equipment Solutions',
            subtitle: 'Solutions For Heavy Operations',
            description:
                'We provide practical heavy equipment solutions for different industrial applications, helping businesses meet their equipment and operational requirements.',
            features: [
                'Heavy Equipment Solutions',
                'Industrial Equipment Support',
                'Material Handling Assistance',
                'Application-Based Solutions',
            ],
            image:
                'https://images.unsplash.com/photo-1580901368919-7738efb0f87e?q=90&w=1200',
        },
        {
            id: '06',
            title: 'Safety Consultation',
            subtitle: 'Professional Safety Guidance',
            description:
                'Our safety consultation services help businesses understand their workplace safety requirements and improve their approach to industrial safety practices.',
            features: [
                'Safety Consultation',
                'Workplace Safety Guidance',
                'Industrial Safety Planning',
                'Safety Improvement Support',
            ],
            image:
                'https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=90&w=1200',
        },
    ];

    return (
        <section className="relative overflow-hidden bg-[#F7F9F3] py-24 md:py-32">

            {/* Background Decoration */}
            <div className="absolute top-20 -left-40 w-80 h-80 bg-[#C5F36B]/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 -right-40 w-96 h-96 bg-[#789B38]/10 rounded-full blur-3xl"></div>

            <div className="relative max-w-7xl mx-auto px-5 sm:px-8">

                {/* Section Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="max-w-3xl mx-auto text-center mb-20 md:mb-28"
                >
                    <div className="flex items-center justify-center gap-3 mb-6">
                        <span className="w-10 h-[2px] bg-[#789B38]"></span>

                        <span className="text-[#789B38] uppercase tracking-[4px] text-xs sm:text-sm font-bold">
                            Explore Our Expertise
                        </span>

                        <span className="w-10 h-[2px] bg-[#789B38]"></span>
                    </div>

                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#1B2B27] leading-tight">
                        What We Do
                        <span className="text-[#789B38]"> For You.</span>
                    </h2>

                    <p className="text-gray-500 leading-8 mt-6 max-w-2xl mx-auto">
                        Explore our range of industrial safety and lifting
                        solutions designed to support your business with
                        quality, reliability and confidence.
                    </p>
                </motion.div>

                {/* Services */}
                <div className="space-y-24 md:space-y-36">

                    {serviceDetails.map((service, index) => (
                        <div
                            key={service.id}
                            className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-20 ${
                                index % 2 !== 0
                                    ? 'lg:flex-row-reverse'
                                    : ''
                            }`}
                        >

                            {/* Image Area */}
                            <motion.div
                                initial={{
                                    opacity: 0,
                                    x: index % 2 === 0 ? -80 : 80,
                                }}
                                whileInView={{
                                    opacity: 1,
                                    x: 0,
                                }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{
                                    duration: 0.9,
                                    ease: 'easeOut',
                                }}
                                whileHover={{ y: -8 }}
                                className="w-full lg:w-1/2 relative group"
                            >

                                {/* Image Frame */}
                                <div className="relative p-3 sm:p-4 bg-white rounded-3xl shadow-xl">

                                    <div className="relative h-[300px] sm:h-[400px] lg:h-[460px] overflow-hidden rounded-2xl">

                                        <motion.img
                                            src={service.image}
                                            alt={service.title}
                                            whileHover={{ scale: 1.12 }}
                                            transition={{ duration: 0.8 }}
                                            className="w-full h-full object-cover"
                                        />

                                        {/* Image Overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#1B2B27]/70 via-transparent to-transparent"></div>

                                        {/* Image Bottom Label */}
                                        <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">

                                            <span className="text-white text-sm font-semibold tracking-wider uppercase">
                                                LiftGuard Solution
                                            </span>

                                            <span className="w-11 h-11 rounded-full bg-[#C5F36B] text-[#1B2B27] flex items-center justify-center text-xl">
                                                <HiArrowUpRight />
                                            </span>

                                        </div>
                                    </div>
                                </div>

                                {/* Floating Number */}
                                <div className="absolute -top-10 -left-3 sm:-left-8 z-10 pointer-events-none">
                                    <span className="text-[100px] sm:text-[130px] font-black text-[#C5F36B] leading-none drop-shadow-sm">
                                        {service.id}
                                    </span>
                                </div>

                                {/* Decorative Line */}
                                <div className="absolute -bottom-5 right-8 w-28 h-2 bg-[#C5F36B] rounded-full"></div>

                            </motion.div>

                            {/* Content Area */}
                            <motion.div
                                initial={{
                                    opacity: 0,
                                    x: index % 2 === 0 ? 80 : -80,
                                }}
                                whileInView={{
                                    opacity: 1,
                                    x: 0,
                                }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{
                                    duration: 0.9,
                                    delay: 0.15,
                                    ease: 'easeOut',
                                }}
                                className="w-full lg:w-1/2"
                            >

                                {/* Subtitle */}
                                <div className="flex items-center gap-3 mb-5">
                                    <span className="w-10 h-[2px] bg-[#789B38]"></span>

                                    <span className="text-[#789B38] uppercase tracking-[3px] text-xs sm:text-sm font-bold">
                                        {service.subtitle}
                                    </span>
                                </div>

                                {/* Title */}
                                <h3 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1B2B27] leading-tight">
                                    {service.title}
                                    <span className="text-[#789B38]">.</span>
                                </h3>

                                {/* Description */}
                                <p className="text-gray-500 leading-8 mt-6 text-base">
                                    {service.description}
                                </p>

                                {/* Features */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-9">

                                    {service.features.map((feature, featureIndex) => (
                                        <motion.div
                                            key={feature}
                                            initial={{ opacity: 0, x: 15 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{
                                                duration: 0.4,
                                                delay: featureIndex * 0.1,
                                            }}
                                            whileHover={{ x: 5 }}
                                            className="flex items-center gap-3 bg-white px-4 py-4 rounded-xl border border-[#1B2B27]/5 shadow-sm hover:shadow-md hover:border-[#C5F36B] transition-all duration-300"
                                        >
                                            <HiCheckCircle className="text-[#789B38] text-xl shrink-0" />

                                            <span className="text-sm font-semibold text-[#1B2B27]">
                                                {feature}
                                            </span>
                                        </motion.div>
                                    ))}

                                </div>

                                {/* Bottom Accent */}
                                <div className="mt-10 flex items-center gap-4">
                                    <div className="w-16 h-1.5 bg-[#C5F36B] rounded-full"></div>

                                    <div className="w-3 h-1.5 bg-[#789B38] rounded-full"></div>

                                    <div className="w-2 h-1.5 bg-[#789B38]/40 rounded-full"></div>
                                </div>

                            </motion.div>

                        </div>
                    ))}

                </div>

            </div>
        </section>
    );
};

export default ServiceDetails;