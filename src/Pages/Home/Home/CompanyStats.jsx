import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';

const CountUp = ({ target, suffix = '+' }) => {
    const [count, setCount] = useState(0);
    const countRef = useRef(null);
    const hasAnimated = useRef(false);

    useEffect(() => {
        const element = countRef.current;

        if (!element) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasAnimated.current) {
                    hasAnimated.current = true;

                    const duration = 2000;
                    const startTime = performance.now();

                    const animateCount = (currentTime) => {
                        const progress = Math.min(
                            (currentTime - startTime) / duration,
                            1
                        );

                        const easeOut = 1 - Math.pow(1 - progress, 4);

                        const currentCount = Math.floor(easeOut * target);

                        setCount(currentCount);

                        if (progress < 1) {
                            requestAnimationFrame(animateCount);
                        } else {
                            setCount(target);
                        }
                    };

                    requestAnimationFrame(animateCount);
                    observer.unobserve(element);
                }
            },
            { threshold: 0.4 }
        );

        observer.observe(element);

        return () => observer.disconnect();
    }, [target]);

    return (
        <span ref={countRef}>
            {count}{suffix}
        </span>
    );
};

const CompanyStats = () => {
    const stats = [
        {
            number: 70,
            title: 'Loyal Clients',
        },
        {
            number: 400,
            title: 'Successful Projects',
        },
        {
            number: 20,
            title: 'Skilled Professionals',
        },
        {
            number: 5,
            title: 'Years Of Dedication',
        },
    ];

    return (
        <section
            className="relative isolate overflow-hidden bg-fixed bg-center bg-cover py-20 md:py-28"
            style={{
                backgroundImage:
                    "url('https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=85&w=2000')",
            }}
        >

            {/* Dark Green Overlay */}
            <div className="absolute inset-0 -z-10 bg-[#1B2B27]/80" />

            {/* Background Gradient */}
            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#1B2B27]/60 via-transparent to-[#1B2B27]/60" />

            <div className="mx-auto max-w-7xl px-5 lg:px-8">

                {/* Section Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="mb-14 text-center"
                >

                    <div className="mb-5 flex items-center justify-center gap-3">

                        <span className="h-[2px] w-9 bg-[#C5F36B]" />

                        <span className="text-sm font-bold uppercase tracking-[3px] text-[#C5F36B]">
                            Our Achievements
                        </span>

                        <span className="h-[2px] w-9 bg-[#C5F36B]" />

                    </div>

                    <h2 className="mx-auto max-w-3xl text-3xl font-extrabold leading-tight text-white sm:text-4xl md:text-5xl">
                        Numbers That Define
                        <span className="block text-[#C5F36B]">
                            Our Journey.
                        </span>
                    </h2>

                </motion.div>


                {/* Statistics Cards */}
                <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">

                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.title}
                            initial={{ opacity: 0, y: 40, scale: 0.95 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.7,
                                delay: index * 0.15,
                            }}
                            whileHover={{ y: -7 }}
                            className="group flex min-h-[155px] flex-col items-center justify-center rounded-xl border border-white/15 bg-[#1B2B27]/70 px-3 py-7 text-center shadow-lg backdrop-blur-md transition-all duration-300 hover:border-[#C5F36B]/60 hover:bg-[#1B2B27]/90 md:min-h-[190px] md:py-9"
                        >

                            {/* Animated Number */}
                            <h3 className="text-4xl font-extrabold tracking-tight text-[#C5F36B] md:text-6xl">
                                <CountUp target={stat.number} />
                            </h3>

                            {/* Title */}
                            <p className="mt-3 text-xs font-semibold text-white/90 sm:text-sm md:text-base">
                                {stat.title}
                            </p>

                            {/* Bottom Line */}
                            <div className="mt-5 h-[3px] w-9 rounded-full bg-[#C5F36B] transition-all duration-500 group-hover:w-16" />

                        </motion.div>
                    ))}

                </div>

            </div>
        </section>
    );
};

export default CompanyStats;