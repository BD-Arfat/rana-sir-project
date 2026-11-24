import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router';
import { HiArrowUpRight, HiOutlinePhone } from 'react-icons/hi2';

const ContactCTA = () => {
    return (
        <section className="relative py-24 md:py-32 overflow-hidden bg-cover bg-center bg-no-repeat"
            style={{
                backgroundImage:
                    "url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=90&w=2000')",
            }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-[#1B2B27]/90"></div>

            {/* Decorative Shape */}
            <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full border border-[#C5F36B]/20"></div>
            <div className="absolute -bottom-40 -left-32 w-96 h-96 rounded-full border border-[#C5F36B]/20"></div>

            <div className="relative z-10 max-w-4xl mx-auto px-5 text-center">

                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                >
                    <span className="inline-block text-[#C5F36B] uppercase tracking-[3px] text-sm font-semibold mb-6">
                        Let's Work Together
                    </span>

                    <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white leading-tight">
                        Need Reliable Industrial
                        <span className="text-[#C5F36B]"> Solutions?</span>
                    </h2>

                    <p className="text-gray-300 leading-8 max-w-2xl mx-auto mt-7">
                        Let us understand your requirements and help you find
                        the right lifting and industrial safety solutions
                        for your business.
                    </p>

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mt-10">

                        <Link
                            to="/contact"
                            className="group inline-flex items-center justify-center gap-3 bg-[#C5F36B] text-[#1B2B27] px-8 py-4 rounded-lg font-bold hover:bg-white transition-all duration-300"
                        >
                            Contact Us
                            <HiArrowUpRight className="text-xl group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </Link>

                        <Link
                            to="/contact"
                            className="inline-flex items-center justify-center gap-3 border border-white/40 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-[#1B2B27] transition-all duration-300"
                        >
                            <HiOutlinePhone className="text-xl" />
                            Get In Touch
                        </Link>

                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default ContactCTA;