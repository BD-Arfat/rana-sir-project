import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
    HiArrowUpRight,
    HiOutlineEnvelope,
    HiOutlinePhone,
    HiOutlineMapPin,
    HiOutlineClock,
    HiOutlineChatBubbleLeftRight,
    HiOutlineCheckCircle,
    HiOutlineQuestionMarkCircle,
} from 'react-icons/hi2';
import { FaWhatsapp } from 'react-icons/fa';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
    });

    const [isSubmitted, setIsSubmitted] = useState(false);

    const contactInfo = [
        {
            icon: <HiOutlineEnvelope />,
            title: 'Email Address',
            value: 'solutionliftguard@gmail.com',
            link: 'mailto:solutionliftguard@gmail.com',
            description: 'Send us an email anytime.',
        },
        {
            icon: <HiOutlinePhone />,
            title: 'Phone / WhatsApp',
            value: '+880 1321-229107',
            link: 'https://wa.me/8801321229107',
            description: 'Connect with our team directly.',
        },
        {
            icon: <HiOutlineMapPin />,
            title: 'Our Location',
            value: 'Bangladesh',
            link: null,
            description: 'Serving industrial safety needs.',
        },
        {
            icon: <HiOutlineClock />,
            title: 'Working Hours',
            value: 'Saturday – Thursday',
            link: null,
            description: 'Friday: Closed',
        },
    ];

    const faqs = [
        {
            question: 'How can I request a quotation?',
            answer: 'You can contact us through the contact form, email or WhatsApp. Share your requirements and our team will assist you.',
        },
        {
            question: 'What services does LiftGuard Solution provide?',
            answer: 'We provide lifting equipment solutions, industrial safety support, equipment inspection, maintenance and safety consultation.',
        },
        {
            question: 'Can I discuss a custom project?',
            answer: 'Yes. You can share your project requirements with us through the contact form or WhatsApp.',
        },
    ];

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const subject = encodeURIComponent(
            formData.subject || 'New Contact Inquiry - LiftGuard Solution'
        );

        const body = encodeURIComponent(
            `Hello LiftGuard Solution,\n\n` +
            `Name: ${formData.name}\n` +
            `Email: ${formData.email}\n` +
            `Phone: ${formData.phone}\n` +
            `Subject: ${formData.subject}\n\n` +
            `Message:\n${formData.message}\n\n` +
            `Thank you.`
        );

        window.location.href = `mailto:solutionliftguard@gmail.com?subject=${subject}&body=${body}`;

        setIsSubmitted(true);
    };

    const inputStyle =
        'w-full rounded-xl border border-[#1B2B27]/10 bg-[#F7F9F3] px-4 py-3.5 text-sm text-[#1B2B27] outline-none transition-all duration-300 placeholder:text-gray-400 focus:border-[#789B38] focus:bg-white focus:ring-4 focus:ring-[#789B38]/10';

    return (
        <main className="overflow-hidden bg-[#F7F9F3]">

            {/* ================= HERO SECTION ================= */}
           {/* ================= HERO SECTION ================= */}
<section className="relative flex min-h-[600px] items-center overflow-hidden bg-[#1B2B27] py-24 md:min-h-[680px] md:py-32">

    {/* Background Image */}
    <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=90&w=2000')",
        }}
    />

    {/* Dark Overlay */}
    <div className="absolute inset-0 bg-[#1B2B27]/80" />

    {/* Gradient Overlay */}
    <div className="absolute inset-0 bg-gradient-to-r from-[#1B2B27]/95 via-[#1B2B27]/75 to-[#1B2B27]/40" />

    {/* Background Decoration */}
    <div className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-[#C5F36B]/10 blur-[100px]" />
    <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-[#789B38]/10 blur-[100px]" />

    <div className="relative mx-auto w-full max-w-7xl px-5 lg:px-8">

        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mx-auto max-w-3xl text-center"
        >

            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-[#C5F36B]/20 bg-white/10 px-5 py-2.5 backdrop-blur-sm">
                <span className="h-2 w-2 rounded-full bg-[#C5F36B]" />
                <span className="text-xs font-bold uppercase tracking-[3px] text-[#C5F36B]">
                    Get In Touch
                </span>
            </div>

            <h1 className="text-4xl font-extrabold leading-tight text-white sm:text-5xl md:text-6xl">
                Let's Talk About
                <span className="mt-2 block text-[#C5F36B]">
                    Your Next Project.
                </span>
            </h1>

            <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-white/80 md:text-lg">
                Have a question or need a reliable industrial safety
                solution? Get in touch with our team. We are ready
                to understand your requirements and help you move forward.
            </p>

            <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">

                <a
                    href="#contact-form"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#C5F36B] px-7 py-4 text-sm font-bold text-[#1B2B27] transition-all duration-300 hover:bg-white"
                >
                    Send Us a Message
                    <HiArrowUpRight className="text-lg" />
                </a>

                <a
                    href="https://wa.me/8801321229107?text=Hello%20LiftGuard%20Solution!"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/30 bg-white/5 px-7 py-4 text-sm font-bold text-white backdrop-blur-sm transition-all duration-300 hover:border-[#C5F36B] hover:bg-[#C5F36B] hover:text-[#1B2B27]"
                >
                    <FaWhatsapp className="text-lg" />
                    Chat on WhatsApp
                </a>

            </div>

        </motion.div>

    </div>
</section>


            {/* ================= CONTACT INFORMATION ================= */}
            <section className="relative z-10 -mt-1 py-16 md:py-20">

                <div className="mx-auto max-w-7xl px-5 lg:px-8">

                    <div className="mb-12 text-center">
                        <span className="text-sm font-bold uppercase tracking-[3px] text-[#789B38]">
                            Contact Information
                        </span>

                        <h2 className="mt-4 text-3xl font-extrabold text-[#1B2B27] md:text-4xl">
                            We're Here to Help You.
                        </h2>

                        <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-gray-500">
                            Choose your preferred way to connect with LiftGuard Solution.
                        </p>
                    </div>

                    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

                        {contactInfo.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 25 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ y: -7 }}
                                className="group rounded-2xl border border-[#1B2B27]/10 bg-white p-7 shadow-sm transition-all duration-300 hover:border-[#789B38]/40 hover:shadow-xl"
                            >

                                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#C5F36B]/20 text-2xl text-[#789B38] transition-all duration-300 group-hover:bg-[#1B2B27] group-hover:text-[#C5F36B]">
                                    {item.icon}
                                </div>

                                <h3 className="mt-6 text-lg font-bold text-[#1B2B27]">
                                    {item.title}
                                </h3>

                                {item.link ? (
                                    <a
                                        href={item.link}
                                        target={item.link.startsWith('http') ? '_blank' : undefined}
                                        rel={item.link.startsWith('http') ? 'noreferrer' : undefined}
                                        className="mt-2 block break-words text-sm font-semibold text-[#789B38] transition-colors hover:text-[#1B2B27]"
                                    >
                                        {item.value}
                                    </a>
                                ) : (
                                    <p className="mt-2 text-sm font-semibold text-[#789B38]">
                                        {item.value}
                                    </p>
                                )}

                                <p className="mt-3 text-sm leading-6 text-gray-500">
                                    {item.description}
                                </p>

                            </motion.div>
                        ))}

                    </div>
                </div>
            </section>


           


            {/* ================= FAQ SECTION ================= */}
            <section className="bg-[#F7F9F3] py-20 md:py-24">

                <div className="mx-auto max-w-4xl px-5 lg:px-8">

                    <motion.div
                        initial={{ opacity: 0, y: 25 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="mb-12 text-center"
                    >
                        <div className="mb-5 inline-flex items-center gap-2 text-[#789B38]">
                            <HiOutlineQuestionMarkCircle className="text-xl" />
                            <span className="text-sm font-bold uppercase tracking-[3px]">
                                Frequently Asked Questions
                            </span>
                        </div>

                        <h2 className="text-3xl font-extrabold text-[#1B2B27] md:text-4xl">
                            Got Questions?
                            <span className="block text-[#789B38]">
                                We've Got Answers.
                            </span>
                        </h2>
                    </motion.div>

                    <div className="space-y-4">

                        {faqs.map((faq, index) => (
                            <motion.details
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="group rounded-2xl border border-[#1B2B27]/10 bg-white p-6 transition-all duration-300 open:border-[#789B38]/40 open:shadow-md"
                            >

                                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-bold text-[#1B2B27]">
                                    {faq.question}

                                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#C5F36B]/30 text-lg text-[#1B2B27] transition-transform duration-300 group-open:rotate-45">
                                        +
                                    </span>
                                </summary>

                                <p className="mt-4 border-t border-[#1B2B27]/10 pt-4 text-sm leading-7 text-gray-500">
                                    {faq.answer}
                                </p>

                            </motion.details>
                        ))}

                    </div>

                </div>
            </section>


            {/* ================= BOTTOM CTA ================= */}
            <section className="bg-white px-5 py-16 md:py-20">

                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-[#1B2B27] px-7 py-12 text-center md:px-16 md:py-16"
                >

                    <div className="absolute -right-20 -top-32 h-72 w-72 rounded-full bg-[#C5F36B]/10 blur-[80px]" />

                    <div className="relative">
                        <h2 className="text-3xl font-extrabold text-white md:text-4xl">
                            Ready to Work With Us?
                        </h2>

                        <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/60 md:text-base">
                            Let's discuss your requirements and find the right
                            solution for your business.
                        </p>

                        <a
                            href="https://wa.me/8801321229107?text=Hello%20LiftGuard%20Solution!"
                            target="_blank"
                            rel="noreferrer"
                            className="mt-8 inline-flex items-center gap-3 rounded-xl bg-[#C5F36B] px-8 py-4 text-sm font-bold text-[#1B2B27] transition-all duration-300 hover:bg-white"
                        >
                            <FaWhatsapp className="text-lg" />
                            Talk to Our Team
                            <HiArrowUpRight className="text-lg" />
                        </a>
                    </div>

                </motion.div>
            </section>

        </main>
    );
};

export default Contact;