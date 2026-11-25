import React from 'react';
import { motion } from 'motion/react';
import image from '../../../assets/LoadTest.png'

const VisualInspectionLoadTest = () => {
    return (
        <section id='visual-inspection-load-test' className="bg-[#F7F9F3] py-16 sm:py-20 lg:py-24">

            <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">

                {/* Main Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="text-center mb-12 sm:mb-16"
                >
                    <span className="text-[#789B38] text-sm font-bold uppercase tracking-[3px]">
                        Our Services
                    </span>

                    <h1 className="text-[#1B2B27] text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight mt-4">
                        Visual Inspection
                        <span className="text-[#789B38]"> & Load Test</span>
                    </h1>

                    <div className="w-20 h-1 bg-[#C5F36B] mx-auto mt-6"></div>
                </motion.div>

                {/* Main Content */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

                    {/* Left Content */}
                    <div className="space-y-8">

                        {/* Why Load Testing */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7 }}
                            className="bg-white rounded-xl p-6 sm:p-8 border border-[#1B2B27]/5 shadow-lg shadow-[#1B2B27]/10"
                        >
                            <h2 className="text-[#1B2B27] text-2xl sm:text-[26px] font-bold mb-5">
                                Why Load Testing is Essential
                            </h2>

                            <ul className="space-y-3 text-gray-600 text-sm sm:text-base leading-6">

                                <li className="flex items-start gap-3">
                                    <span className="text-[#789B38] font-bold">•</span>
                                    <span>
                                        Confirms cranes and hoists can safely
                                        handle their rated capacity
                                    </span>
                                </li>

                                <li className="flex items-start gap-3">
                                    <span className="text-[#789B38] font-bold">•</span>
                                    <span>
                                        Required for: New installations, after
                                        repairs, modifications, or alterations,
                                        before returning to service
                                    </span>
                                </li>

                                <li className="flex items-start gap-3">
                                    <span className="text-[#789B38] font-bold">•</span>
                                    <span>
                                        Guarantees safe operation and compliance
                                        with international standards
                                    </span>
                                </li>

                            </ul>
                        </motion.div>

                        {/* Load Testing Process */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: 0.15 }}
                            className="bg-white rounded-xl p-6 sm:p-8 border border-[#1B2B27]/5 shadow-lg shadow-[#1B2B27]/10"
                        >
                            <h2 className="text-[#1B2B27] text-2xl sm:text-[26px] font-bold mb-5">
                                Our Load Testing Process
                            </h2>

                            <ol className="space-y-3 text-gray-600 text-sm sm:text-base leading-6 list-decimal list-inside marker:text-[#789B38] marker:font-semibold">

                                <li>
                                    Define equipment objectives and requirements
                                </li>

                                <li>
                                    Review operating procedures and usage conditions
                                </li>

                                <li>
                                    Select proper tools and testing methods
                                </li>

                                <li>
                                    Perform static and dynamic load tests
                                </li>

                                <li>
                                    Verify performance, safety, and compliance
                                </li>

                            </ol>
                        </motion.div>

                    </div>

                    {/* Right Image */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="relative h-[450px] sm:h-[550px] lg:h-[545px] overflow-hidden rounded-2xl shadow-2xl shadow-[#1B2B27]/15">

                            <img
                                src={image}
                                alt="Visual Inspection and Load Testing"
                                className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700"
                            />

                            <div className="absolute inset-0 border-[5px] border-[#C5F36B]/20 rounded-2xl pointer-events-none"></div>

                        </div>

                        {/* Decorative Dot */}
                        <div className="absolute -left-8 bottom-16 w-3 h-3 rounded-full bg-[#789B38] hidden lg:block"></div>

                    </motion.div>

                </div>

            </div>

        </section>
    );
};

export default VisualInspectionLoadTest;