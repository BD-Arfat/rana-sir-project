import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router';
import { HiArrowUpRight } from 'react-icons/hi2';

const JoinOurTeam = () => {
    return (
        <section className="bg-[#F7F9F3] py-20 md:py-24">
            <div className="max-w-7xl mx-auto px-5 sm:px-8">

                <motion.div
                    initial={{ opacity: 0, y: 35 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative overflow-hidden rounded-3xl bg-[#1B2B27]"
                >

                    {/* Background Image */}
                    <div
                        className="absolute inset-0 bg-cover bg-center opacity-20"
                        style={{
                            backgroundImage:
                                "url('https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=90&w=1800')",
                        }}
                    ></div>

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#1B2B27] via-[#1B2B27]/95 to-[#1B2B27]/75"></div>

                    {/* Content */}
                    <div className="relative z-10 px-7 py-16 sm:px-12 md:px-16 md:py-20 flex flex-col md:flex-row items-center justify-between gap-10">

                        <div className="max-w-2xl text-center md:text-left">

                            <span className="text-[#C5F36B] uppercase tracking-[3px] text-sm font-semibold">
                                Be Part Of Our Journey
                            </span>

                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mt-5">
                                Great Things Are Built
                                <span className="block text-[#C5F36B]">
                                    By Great Teams.
                                </span>
                            </h2>

                            <p className="text-white/65 leading-8 mt-6 max-w-xl">
                                Interested in working with LiftGuard Solution?
                                Connect with us to explore opportunities and
                                become part of our growing professional network.
                            </p>

                        </div>

                        {/* Button */}
                        <div className="shrink-0">
                            <Link
                                to="/contact"
                                className="inline-flex items-center gap-3 px-8 py-4 bg-[#C5F36B] text-[#1B2B27] rounded-full font-bold hover:bg-white transition-all duration-300 group"
                            >
                                Contact Us

                                <HiArrowUpRight className="text-xl group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                            </Link>
                        </div>

                    </div>

                    {/* Bottom Decoration */}
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-[#C5F36B]"></div>

                </motion.div>

            </div>
        </section>
    );
};

export default JoinOurTeam;