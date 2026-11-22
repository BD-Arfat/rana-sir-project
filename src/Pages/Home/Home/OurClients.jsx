import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';
import { HiArrowLeft, HiArrowRight, HiArrowUpRight } from 'react-icons/hi2';

const OurClients = () => {
    const carouselRef = useRef(null);
    const [isPaused, setIsPaused] = useState(false);

    const clients = [
        { id: 1, name: 'CLIENT ONE', category: 'Our Client', initials: 'C1' },
        { id: 2, name: 'PARTNER TWO', category: 'Our Partner', initials: 'P2' },
        { id: 3, name: 'CLIENT THREE', category: 'Our Client', initials: 'C3' },
        { id: 4, name: 'PARTNER FOUR', category: 'Our Partner', initials: 'P4' },
        { id: 5, name: 'CLIENT FIVE', category: 'Our Client', initials: 'C5' },
        { id: 6, name: 'PARTNER SIX', category: 'Our Partner', initials: 'P6' },
        { id: 7, name: 'CLIENT SEVEN', category: 'Our Client', initials: 'C7' },
        { id: 8, name: 'PARTNER EIGHT', category: 'Our Partner', initials: 'P8' },
    ];

    // Previous & Next Button
    const scrollCarousel = (direction) => {
        if (!carouselRef.current) return;

        const container = carouselRef.current;
        const scrollAmount = 350;

        container.scrollBy({
            left: direction === 'next' ? scrollAmount : -scrollAmount,
            behavior: 'smooth',
        });
    };

    // Fast Auto Sliding
    useEffect(() => {
        if (isPaused) return;

        const interval = setInterval(() => {
            const container = carouselRef.current;

            if (!container) return;

            const isAtEnd =
                container.scrollLeft + container.clientWidth >=
                container.scrollWidth - 10;

            if (isAtEnd) {
                container.scrollTo({
                    left: 0,
                    behavior: 'smooth',
                });
            } else {
                container.scrollBy({
                    left: 350,
                    behavior: 'smooth',
                });
            }
        }, 1500);

        return () => clearInterval(interval);
    }, [isPaused]);

    return (
        <section className="relative overflow-hidden bg-[#F7F9F3] py-20 md:py-28">

            {/* Background Decoration */}
            <div className="absolute -right-40 top-10 h-80 w-80 rounded-full bg-[#789B38]/5 blur-[100px]" />
            <div className="absolute -left-40 bottom-0 h-80 w-80 rounded-full bg-[#C5F36B]/10 blur-[100px]" />

            <div className="relative mx-auto max-w-7xl px-5 lg:px-8">

                {/* Section Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="mb-14 flex flex-col justify-between gap-7 md:flex-row md:items-end"
                >
                    <div className="max-w-2xl">

                        <div className="mb-5 inline-flex items-center gap-3">
                            <span className="h-[2px] w-10 bg-[#789B38]" />
                            <span className="text-sm font-bold uppercase tracking-[3px] text-[#789B38]">
                                Our Network
                            </span>
                        </div>

                        <h2 className="text-4xl font-extrabold leading-tight text-[#1B2B27] md:text-5xl">
                            Our Clients
                            <span className="block text-[#789B38]">
                                & Partners.
                            </span>
                        </h2>

                        <p className="mt-5 max-w-xl text-base leading-8 text-gray-600">
                            Building strong professional relationships through
                            trust, quality and a shared commitment to excellence.
                        </p>
                    </div>

                    {/* Navigation Buttons */}
                    <div className="flex items-center gap-3">

                        <button
                            type="button"
                            onClick={() => scrollCarousel('prev')}
                            aria-label="Previous clients"
                            className="flex h-12 w-12 items-center justify-center rounded-full border border-[#789B38]/30 text-[#789B38] transition-all duration-300 hover:bg-[#789B38] hover:text-white"
                        >
                            <HiArrowLeft className="text-xl" />
                        </button>

                        <button
                            type="button"
                            onClick={() => scrollCarousel('next')}
                            aria-label="Next clients"
                            className="flex h-12 w-12 items-center justify-center rounded-full bg-[#1B2B27] text-white transition-all duration-300 hover:bg-[#789B38]"
                        >
                            <HiArrowRight className="text-xl" />
                        </button>

                    </div>
                </motion.div>

                {/* Carousel */}
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <div
                        ref={carouselRef}
                        onMouseEnter={() => setIsPaused(true)}
                        onMouseLeave={() => setIsPaused(false)}
                        onTouchStart={() => setIsPaused(true)}
                        onTouchEnd={() => setIsPaused(false)}
                        className="flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth pb-5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
                    >

                        {clients.map((client) => (
                            <motion.div
                                key={client.id}
                                whileHover={{ y: -8 }}
                                transition={{ duration: 0.3 }}
                                className="group flex min-h-[190px] min-w-[75%] snap-start flex-col items-center justify-center rounded-2xl border border-gray-200 bg-white p-7 shadow-sm transition-all duration-300 hover:border-[#789B38]/40 hover:shadow-xl sm:min-w-[42%] md:min-w-[30%] lg:min-w-[23%]"
                            >

                                {/* Logo Placeholder */}
                                <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-[#789B38]/10 text-2xl font-extrabold text-[#789B38] transition-all duration-500 group-hover:rotate-6 group-hover:bg-[#1B2B27] group-hover:text-[#C5F36B]">
                                    {client.initials}
                                </div>

                                <h3 className="mt-5 text-center text-base font-extrabold tracking-wide text-[#1B2B27] transition-colors group-hover:text-[#789B38]">
                                    {client.name}
                                </h3>

                                <span className="mt-2 text-xs font-medium uppercase tracking-[2px] text-gray-400">
                                    {client.category}
                                </span>

                                <div className="mt-4 h-[3px] w-7 rounded-full bg-[#C5F36B] transition-all duration-500 group-hover:w-14" />

                            </motion.div>
                        ))}

                    </div>
                </motion.div>

                {/* Bottom Message */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="mt-12 flex flex-col items-center justify-between gap-5 border-t border-gray-200 pt-8 md:flex-row"
                >

                    <p className="text-center text-sm leading-7 text-gray-500 md:text-left">
                        Strong partnerships create stronger possibilities.
                    </p>

                    <a
                        href="/contact"
                        className="group inline-flex items-center gap-2 text-sm font-bold text-[#789B38] transition-colors hover:text-[#1B2B27]"
                    >
                        Become Our Partner
                        <HiArrowUpRight className="text-lg transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                    </a>

                </motion.div>

            </div>
        </section>
    );
};

export default OurClients;