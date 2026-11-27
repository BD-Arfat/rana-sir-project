import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router';
import { HiArrowUpRight } from 'react-icons/hi2';

const services = [
    {
        id: '01',
        title: 'Visual Inspection & Load Test',
        link: '/services#visual-inspection-load-test',
    },
    {
        id: '02',
        title: 'Pressure Test Calibration',
        link: '/services#pressure-test',
    },
    {
        id: '03',
        title: 'Electrical Test',
        link: '/services#electrical-test',
    },
    {
        id: '04',
        title: 'NDT Test',
        link: '/services#ndt-test',
    },
    {
        id: '05',
        title: 'FFA & LSF',
        link: '/services#ffa-lsf',
    },
    {
        id: '06',
        title: 'Heavy Equipment Maintenance Solution',
        link: '/services#heavy-equipment-maintenance',
    },
];

const OurServices = () => {
    return (
        <section
            id="our-services"
            className="bg-[#F7F9F3] py-20 sm:py-24 lg:py-28"
        >
            <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">

                {/* Section Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="text-center mb-14"
                >
                    <div className="flex items-center justify-center gap-3 mb-5">
                        <span className="w-10 h-[2px] bg-[#789B38]"></span>

                        <span className="text-[#789B38] text-xs sm:text-sm font-bold uppercase tracking-[3px]">
                            Our Expertise
                        </span>

                        <span className="w-10 h-[2px] bg-[#789B38]"></span>
                    </div>

                    <h2 className="text-[#1B2B27] text-4xl sm:text-5xl lg:text-6xl font-bold">
                        Our <span className="text-[#789B38]">Services</span>
                    </h2>

                    <p className="text-gray-600 text-base leading-7 max-w-2xl mx-auto mt-5">
                        Explore our professional inspection, testing,
                        calibration and equipment maintenance services.
                    </p>
                </motion.div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

                    {services.map((service, index) => (
                        <Link
                            key={service.id}
                            to={service.link}
                            className="block h-full"
                        >
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.6,
                                    delay: index * 0.08,
                                }}
                                className="group relative min-h-[220px] h-full bg-white border border-gray-200 p-8 flex flex-col items-center justify-center text-center overflow-hidden hover:border-[#789B38] hover:shadow-xl hover:shadow-[#1B2B27]/5 transition-all duration-500 cursor-pointer"
                            >

                                {/* Service Number */}
                                <span className="text-[#789B38] text-sm font-bold tracking-[3px] mb-5">
                                    SERVICE {service.id}
                                </span>

                                {/* Service Title */}
                                <h3 className="text-[#1B2B27] text-xl sm:text-2xl font-bold leading-snug group-hover:text-[#789B38] transition-colors duration-300">
                                    {service.title}
                                </h3>

                                {/* Bottom Line */}
                                <div className="w-12 h-[3px] bg-[#C5F36B] mt-6 group-hover:w-24 transition-all duration-500"></div>

                                {/* Arrow */}
                                <HiArrowUpRight className="absolute top-5 right-5 text-xl text-gray-300 group-hover:text-[#789B38] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />

                            </motion.div>
                        </Link>
                    ))}

                </div>

            </div>
        </section>
    );
};

export default OurServices;