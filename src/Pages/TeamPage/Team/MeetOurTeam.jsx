import React from 'react';
import { motion } from 'motion/react';
import { FaLinkedinIn, FaFacebookF } from 'react-icons/fa';

const MeetOurTeam = () => {

    const teamMembers = [
        {
            name: 'John Smith',
            role: 'Managing Director',
            image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=90&w=600',
            linkedin: '#',
            facebook: '#',
        },
        {
            name: 'Michael Anderson',
            role: 'Operations Manager',
            image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=90&w=600',
            linkedin: '#',
            facebook: '#',
        },
        {
            name: 'David Wilson',
            role: 'Technical Manager',
            image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=90&w=600',
            linkedin: '#',
            facebook: '#',
        },
        {
            name: 'James Brown',
            role: 'Safety Consultant',
            image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=90&w=600',
            linkedin: '#',
            facebook: '#',
        },
    ];

    return (
        <section className="bg-[#F7F9F3] py-20 md:py-28">
            <div className="max-w-7xl mx-auto px-5 sm:px-8">

                {/* Section Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="text-center max-w-2xl mx-auto mb-14"
                >
                    <div className="flex items-center justify-center gap-3 mb-5">
                        <span className="w-10 h-[2px] bg-[#789B38]"></span>

                        <span className="text-[#789B38] uppercase tracking-[3px] text-sm font-semibold">
                            The People Behind Our Work
                        </span>

                        <span className="w-10 h-[2px] bg-[#789B38]"></span>
                    </div>

                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1B2B27] leading-tight">
                        Meet Our
                        <span className="text-[#789B38]"> Team.</span>
                    </h2>

                    <p className="text-gray-500 leading-7 mt-5">
                        Meet the people dedicated to delivering reliable
                        industrial safety and lifting solutions.
                    </p>
                </motion.div>


                {/* Team Members */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">

                    {teamMembers.map((member, index) => (
                        <motion.div
                            key={member.name}
                            initial={{ opacity: 0, y: 35 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.6,
                                delay: index * 0.1,
                            }}
                            className="group bg-white rounded-2xl overflow-hidden border border-[#1B2B27]/10 hover:-translate-y-2 hover:shadow-xl hover:shadow-[#1B2B27]/10 transition-all duration-500"
                        >

                            {/* Member Image */}
                            <div className="relative overflow-hidden h-[300px]">

                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />

                                {/* Image Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-[#1B2B27]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                {/* Social Links */}
                                <div className="absolute bottom-5 left-0 right-0 flex items-center justify-center gap-3 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">

                                    <a
                                        href={member.linkedin}
                                        aria-label={`${member.name} LinkedIn`}
                                        className="w-10 h-10 rounded-full bg-[#C5F36B] text-[#1B2B27] flex items-center justify-center hover:bg-white transition-colors duration-300"
                                    >
                                        <FaLinkedinIn />
                                    </a>

                                    <a
                                        href={member.facebook}
                                        aria-label={`${member.name} Facebook`}
                                        className="w-10 h-10 rounded-full bg-[#C5F36B] text-[#1B2B27] flex items-center justify-center hover:bg-white transition-colors duration-300"
                                    >
                                        <FaFacebookF />
                                    </a>

                                </div>
                            </div>


                            {/* Member Info */}
                            <div className="p-6 text-center">

                                <h3 className="text-xl font-bold text-[#1B2B27] group-hover:text-[#789B38] transition-colors duration-300">
                                    {member.name}
                                </h3>

                                <p className="text-sm text-gray-500 mt-2">
                                    {member.role}
                                </p>

                                <div className="w-10 h-1 bg-[#C5F36B] rounded-full mx-auto mt-5 group-hover:w-20 transition-all duration-500"></div>

                            </div>

                        </motion.div>
                    ))}

                </div>

            </div>
        </section>
    );
};

export default MeetOurTeam;