import React from 'react';
import { motion } from 'motion/react';
import { HiArrowUpRight } from 'react-icons/hi2';
import { FaExpandAlt } from 'react-icons/fa';

const GallerySection = () => {
    const galleryItems = [
        {
            id: '01',
            title: 'Industrial Operations',
            category: 'Our Work',
            image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=85&w=1000',
            size: 'large',
        },
        {
            id: '02',
            title: 'Engineering Excellence',
            category: 'Engineering',
            image: 'https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?q=85&w=800',
            size: 'small',
        },
        {
            id: '03',
            title: 'Workplace Safety',
            category: 'Safety',
            image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=85&w=800',
            size: 'small',
        },
        {
            id: '04',
            title: 'Heavy Equipment',
            category: 'Equipment',
            image: 'https://images.unsplash.com/photo-1567789884554-0b844b597180?q=85&w=1000',
            size: 'wide',
        },
        {
            id: '05',
            title: 'Professional Teamwork',
            category: 'Our Team',
            image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=85&w=800',
            size: 'small',
        },
        {
            id: '06',
            title: 'Technical Solutions',
            category: 'Technology',
            image: 'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?q=85&w=800',
            size: 'small',
        },
    ];

    return (
        <section className="relative overflow-hidden bg-[#111C1A] py-20 md:py-28">

            {/* Background Decoration */}
            <div className="absolute -right-40 top-20 h-96 w-96 rounded-full bg-[#C5F36B]/5 blur-[120px]" />
            <div className="absolute -left-40 bottom-0 h-96 w-96 rounded-full bg-[#167D75]/10 blur-[120px]" />

            <div className="relative mx-auto max-w-7xl px-5 lg:px-8">

                {/* Section Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 35 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-16 flex flex-col justify-between gap-8 md:flex-row md:items-end"
                >
                    <div className="max-w-2xl">
                        <div className="mb-5 inline-flex items-center gap-3">
                            <span className="h-[2px] w-10 bg-[#C5F36B]" />
                            <span className="text-sm font-bold uppercase tracking-[3px] text-[#C5F36B]">
                                Our Gallery
                            </span>
                        </div>

                        <h2 className="text-4xl font-extrabold leading-tight text-white md:text-5xl">
                            A Closer Look at
                            <span className="block text-[#C5F36B]">
                                What We Do.
                            </span>
                        </h2>

                        <p className="mt-6 max-w-xl text-base leading-8 text-gray-400">
                            Explore our gallery to discover industrial operations,
                            equipment and the commitment behind our work.
                        </p>
                    </div>

                    <div className="hidden md:block">
                        <span className="text-7xl font-extrabold text-white/5">
                            01 — 06
                        </span>
                    </div>
                </motion.div>

                {/* Gallery Grid */}
                <div className="grid auto-rows-[240px] grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">

                    {galleryItems.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.7,
                                delay: index * 0.12,
                            }}
                            className={`
                                group relative overflow-hidden rounded-xl
                                ${item.size === 'large' ? 'sm:row-span-2' : ''}
                                ${item.size === 'wide' ? 'sm:col-span-2' : ''}
                            `}
                        >
                            {/* Image */}
                            <img
                                src={item.image}
                                alt={item.title}
                                loading="lazy"
                                className="h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
                            />

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#111C1A]/95 via-[#111C1A]/10 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-100" />

                            {/* Top Number */}
                            <div className="absolute left-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-black/20 text-xs font-bold text-white backdrop-blur-md transition-all duration-500 group-hover:border-[#C5F36B] group-hover:bg-[#C5F36B] group-hover:text-[#111C1A]">
                                {item.id}
                            </div>

                            {/* Expand Icon */}
                            <div className="absolute right-5 top-5 flex h-10 w-10 translate-y-3 items-center justify-center rounded-full bg-[#C5F36B] text-[#111C1A] opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                                <FaExpandAlt className="text-sm" />
                            </div>

                            {/* Bottom Content */}
                            <div className="absolute bottom-0 left-0 w-full translate-y-3 p-6 transition-transform duration-500 group-hover:translate-y-0 md:p-7">

                                <span className="text-xs font-bold uppercase tracking-[2px] text-[#C5F36B]">
                                    {item.category}
                                </span>

                                <h3 className="mt-2 text-xl font-bold text-white md:text-2xl">
                                    {item.title}
                                </h3>

                                <div className="mt-4 h-[2px] w-0 bg-[#C5F36B] transition-all duration-700 group-hover:w-16" />
                            </div>
                        </motion.div>
                    ))}

                </div>

                {/* Bottom Message */}
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="mt-16 flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-10 md:flex-row"
                >
                    <div>
                        <p className="text-sm font-semibold uppercase tracking-[2px] text-[#C5F36B]">
                            Behind Every Safe Operation
                        </p>

                        <h3 className="mt-2 text-2xl font-bold text-white">
                            Quality, Commitment & Reliability.
                        </h3>
                    </div>

                    <a
                        href="/contact"
                        className="group inline-flex items-center gap-3 rounded-md bg-[#C5F36B] px-7 py-4 text-sm font-bold text-[#111C1A] transition-all duration-300 hover:bg-white"
                    >
                        Work With Us
                        <HiArrowUpRight className="text-xl transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
                    </a>
                </motion.div>

            </div>
        </section>
    );
};

export default GallerySection;