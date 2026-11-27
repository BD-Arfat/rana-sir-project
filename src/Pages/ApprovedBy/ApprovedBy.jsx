import React from 'react';
import { motion } from 'motion/react';
import image from '../../assets/abouthero.png';

const ApprovedBy = () => {
    return (
        <>

            {/* HERO SECTION */}
            <section
                className="relative min-h-[350px] md:min-h-[450px] flex items-center justify-center bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: `url(${image})`
                }}
            >

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-[#1B2B27]/70"></div>

                {/* Hero Content */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="relative z-10 text-center px-5"
                >

                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mt-5">
                        Approved <span className="text-[#C5F36B]">By</span>
                    </h1>

                </motion.div>

            </section>


            {/* COMING SOON SECTION */}
            <section className="bg-[#F7F9F3] py-24 md:py-32">

                <div className="max-w-7xl mx-auto px-5 md:px-10">

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-center"
                    >

                        {/* Heading */}
                        <h2 className="text-3xl md:text-5xl font-bold text-[#1B2B27]">
                            Our <span className="text-[#789B38]">Certificates</span>
                        </h2>

                        <div className="w-20 h-1 bg-[#C5F36B] mx-auto mt-5 rounded-full"></div>


                        {/* Coming Soon */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                            className="mt-14 max-w-3xl mx-auto py-16 md:py-20 px-6 bg-white rounded-2xl border border-[#E5EBDD] shadow-sm"
                        >

                            <h3 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-wider text-[#789B38]">
                                COMING SOON
                            </h3>

                            <p className="text-[#52635D] text-sm md:text-base mt-5 leading-7">
                                Our certificates and official recognitions will be displayed here soon.
                            </p>

                            <div className="flex justify-center gap-2 mt-8">
                                <span className="w-2 h-2 rounded-full bg-[#C5F36B]"></span>
                                <span className="w-2 h-2 rounded-full bg-[#789B38]"></span>
                                <span className="w-2 h-2 rounded-full bg-[#1B2B27]"></span>
                            </div>

                        </motion.div>

                    </motion.div>

                </div>

            </section>

        </>
    );
};

export default ApprovedBy;