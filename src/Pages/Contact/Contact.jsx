
import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
    HiArrowUpRight,
    HiOutlineEnvelope,
    HiOutlinePhone,
    HiOutlineMapPin,
    HiOutlineClock,
    HiOutlineQuestionMarkCircle,
    HiOutlineArrowRight,
    HiOutlinePaperAirplane,
    HiOutlineBuildingOffice2,
    HiOutlineCheckCircle,
} from 'react-icons/hi2';
import { FaWhatsapp } from 'react-icons/fa';
import contacthero from '../../assets/contacthero.png'

const Contact = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
    });

    const [isSubmitted, setIsSubmitted] = useState(false);

    const whatsappNumber = '8801805844021';

    const phoneNumbers = [
        '+880 1805-844021',
        '+880 1805-844022',
        '+880 1805-844023',
    ];

    const officeAddress =
        '2nd Floor Wali Mansion, 600 Sk Mujib Road, Chattogram, Bangladesh';

    const faqs = [
        {
            question: 'How can I request a quotation?',
            answer: 'You can contact us through our contact form, email or WhatsApp. Share your requirements and our team will assist you with the necessary information.',
        },
        {
            question: 'What services does LIFTING & SAFETY SOLUTIONS provide?',
            answer: 'We provide lifting equipment solutions, industrial safety support, equipment inspection, maintenance and safety consultation.',
        },
        {
            question: 'Can I discuss a custom project?',
            answer: 'Yes. We welcome custom project inquiries. Share your project requirements with our team and we will help you find the right solution.',
        },
        {
            question: 'How can I contact your support team?',
            answer: 'You can reach our team through phone, WhatsApp or email. Our team is available Saturday to Thursday.',
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
            formData.subject || 'New Contact Inquiry - LIFTING & SAFETY SOLUTIONS'
        )

        const body = encodeURIComponent(
            `Hello LIFTING & SAFETY SOLUTIONS,\n\n` +
            `Name: ${formData.name}\n` +
            `Email: ${formData.email}\n` +
            `Phone: ${formData.phone}\n` +
            `Subject: ${formData.subject}\n\n` +
            `Message:\n${formData.message}\n\n` +
            `Thank you.`
        );

        window.location.href =
            `mailto:info@lrlsbd.com?subject=${subject}&body=${body}`;

        setIsSubmitted(true);

        setFormData({
            name: '',
            email: '',
            phone: '',
            subject: '',
            message: '',
        });
    };

    const inputStyle =
        'w-full rounded-xl border border-gray-200 bg-[#F8FAF6] px-4 py-3.5 text-sm text-[#1B2B27] outline-none transition-all duration-300 placeholder:text-gray-400 focus:border-[#789B38] focus:bg-white focus:ring-4 focus:ring-[#789B38]/10';

    return (

        <main className="overflow-hidden bg-white">

            {/* ================= HERO SECTION ================= */}

            <section
                className="relative min-h-[350px] md:min-h-[450px] flex items-center justify-center bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: `url(${contacthero})`,
                }}
            >
                {/* Overlay */}
                <div className="absolute inset-0 bg-[#1B2B27]/45"></div>

                {/* Heading */}
                <div className="relative z-10 text-center px-5">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white"
                    >
                        Contact<span className="text-[#C5F36B]">.</span>
                    </motion.h1>
                </div>

                {/* Bottom Border */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-[#C5F36B]"></div>
            </section>


            {/* ================= CONTACT INFORMATION ================= */}

            <section className="relative bg-[#F7F9F3] py-20 md:py-28">

                <div className="mx-auto max-w-7xl px-5 lg:px-8">

                    <motion.div
                        initial={{ opacity: 0, y: 25 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="mb-14"
                    >

                        <span className="text-xs font-bold uppercase tracking-[3px] text-[#789B38]">
                            Contact Information
                        </span>

                        <h2 className="mt-4 text-3xl font-extrabold text-[#1B2B27] md:text-5xl">
                            Let's Connect With
                            <span className="text-[#789B38]"> Our Team.</span>
                        </h2>

                        <p className="mt-5 max-w-2xl text-sm leading-7 text-gray-500 md:text-base">
                            Have questions or need assistance? Choose your
                            preferred way to reach our team.
                        </p>

                    </motion.div>


                    <div className="grid gap-7 lg:grid-cols-2">

                        {/* LEFT: CONTACT DETAILS */}

                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7 }}
                            className="rounded-3xl border border-[#1B2B27]/10 bg-white p-7 shadow-sm md:p-10"
                        >

                            <div className="mb-9 flex items-center gap-4">

                                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#C5F36B]/25 text-2xl text-[#789B38]">
                                    <HiOutlinePhone />
                                </div>

                                <div>
                                    <h3 className="text-xl font-extrabold text-[#1B2B27]">
                                        Contact Details
                                    </h3>

                                    <p className="mt-1 text-sm text-gray-400">
                                        Get in touch with us directly.
                                    </p>
                                </div>

                            </div>


                            {/* PHONE NUMBERS */}

                            <div className="border-b border-gray-100 pb-8">

                                <div className="mb-5 flex items-center gap-3">

                                    <HiOutlinePhone className="text-xl text-[#789B38]" />

                                    <h4 className="font-bold text-[#1B2B27]">
                                        Phone / WhatsApp
                                    </h4>

                                </div>

                                <div className="space-y-3">

                                    {phoneNumbers.map((phone, index) => {

                                        const cleanNumber = phone.replace(/[^0-9]/g, '');

                                        return (

                                            <div
                                                key={index}
                                                className="flex items-center justify-between gap-3 rounded-xl bg-[#F7F9F3] p-4 transition-all duration-300 hover:bg-[#C5F36B]/20"
                                            >

                                                <div className="flex items-center gap-3">

                                                    <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white text-sm font-bold text-[#789B38] shadow-sm">
                                                        {index + 1}
                                                    </span>

                                                    <a
                                                        href={`tel:+${cleanNumber}`}
                                                        className="text-sm font-bold text-[#1B2B27] transition hover:text-[#789B38] sm:text-base"
                                                    >
                                                        {phone}
                                                    </a>

                                                </div>

                                                <div className="flex items-center gap-2">

                                                    <a
                                                        href={`tel:+${cleanNumber}`}
                                                        aria-label={`Call ${phone}`}
                                                        className="flex h-9 w-9 items-center justify-center rounded-lg bg-white text-[#789B38] shadow-sm transition hover:bg-[#1B2B27] hover:text-white"
                                                    >
                                                        <HiOutlinePhone />
                                                    </a>

                                                    <a
                                                        href={`https://wa.me/${cleanNumber}`}
                                                        target="_blank"
                                                        rel="noreferrer"
                                                        aria-label={`WhatsApp ${phone}`}
                                                        className="flex h-9 w-9 items-center justify-center rounded-lg bg-white text-green-600 shadow-sm transition hover:bg-green-600 hover:text-white"
                                                    >
                                                        <FaWhatsapp />
                                                    </a>

                                                </div>

                                            </div>

                                        );
                                    })}

                                </div>

                            </div>


                            {/* EMAIL */}

                            {/* EMAIL */}
                            <div className="flex items-start gap-4 border-b border-gray-100 py-7">

                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#C5F36B]/20 text-xl text-[#789B38]">
                                    <HiOutlineEnvelope />
                                </div>

                                <div className="min-w-0">

                                    <h4 className="font-bold text-[#1B2B27]">
                                        Email Address
                                    </h4>

                                    <div className="mt-3 space-y-3">

                                        <a
                                            href="mailto:accounts@lrlsbd.com"
                                            className="block break-all text-sm font-semibold text-[#789B38] hover:text-[#1B2B27] transition"
                                        >
                                            info@lrlsbd.com
                                        </a>
                                        <a
                                            href="mailto:accounts@lrlsbd.com"
                                            className="block break-all text-sm font-semibold text-[#789B38] hover:text-[#1B2B27] transition"
                                        >
                                            accounts@lrlsbd.com
                                        </a>

                                        <a
                                            href="mailto:service@lrlsbd.com"
                                            className="block break-all text-sm font-semibold text-[#789B38] hover:text-[#1B2B27] transition"
                                        >
                                            service@lrlsbd.com
                                        </a>

                                    </div>

                                    <p className="mt-3 text-xs text-gray-400">
                                        Contact us for accounts, services and general inquiries.
                                    </p>

                                </div>

                            </div>


                            {/* WORKING HOURS */}

                            <div className="flex items-start gap-4 pt-7">

                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#C5F36B]/20 text-xl text-[#789B38]">
                                    <HiOutlineClock />
                                </div>

                                <div>

                                    <h4 className="font-bold text-[#1B2B27]">
                                        Working Hours
                                    </h4>

                                    <p className="mt-2 text-sm font-semibold text-[#789B38]">
                                        Saturday – Thursday
                                    </p>

                                    <p className="mt-1 text-xs text-gray-400">
                                        Friday: Closed
                                    </p>

                                </div>

                            </div>

                        </motion.div>


                        {/* RIGHT: OFFICE LOCATION */}

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7 }}
                            className="relative flex flex-col overflow-hidden rounded-3xl bg-[#1B2B27] p-7 md:p-10"
                        >

                            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#C5F36B]/10 blur-[90px]" />

                            <div className="relative">

                                <span className="text-xs font-bold uppercase tracking-[3px] text-[#C5F36B]">
                                    Visit Our Office
                                </span>

                                <h3 className="mt-4 text-3xl font-extrabold text-white md:text-4xl">
                                    Find Us
                                    <span className="text-[#C5F36B]"> Here.</span>
                                </h3>

                                <p className="mt-4 text-sm leading-7 text-white/50">
                                    We welcome your inquiries and look forward
                                    to connecting with you.
                                </p>

                            </div>


                            {/* OFFICE VISUAL */}

                            <div className="relative mt-9 flex min-h-[210px] flex-1 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-[#30483D] to-[#17251F]">

                                <div className="absolute inset-0 opacity-20"
                                    style={{
                                        backgroundImage:
                                            'radial-gradient(#C5F36B 1px, transparent 1px)',
                                        backgroundSize: '25px 25px',
                                    }}
                                />

                                <div className="relative text-center">

                                    <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl border border-[#C5F36B]/30 bg-[#C5F36B]/10 text-4xl text-[#C5F36B]">
                                        <HiOutlineBuildingOffice2 />
                                    </div>

                                    <p className="mt-5 text-lg font-bold text-white">
                                        LIFTING & SAFETY SOLUTIONS
                                    </p>

                                    <p className="mt-2 text-xs uppercase tracking-[3px] text-white/40">
                                        Chattogram, Bangladesh
                                    </p>

                                </div>

                            </div>


                            {/* ADDRESS */}

                            <div className="relative mt-7 rounded-2xl border border-white/10 bg-white/5 p-6">

                                <div className="flex items-start gap-4">

                                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#C5F36B]/15 text-2xl text-[#C5F36B]">
                                        <HiOutlineMapPin />
                                    </div>

                                    <div>

                                        <h4 className="font-bold text-white">
                                            Our Office Address
                                        </h4>

                                        <p className="mt-3 text-sm leading-7 text-white/60">
                                            {officeAddress}
                                        </p>

                                    </div>

                                </div>

                                <a
                                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(officeAddress)}`}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#C5F36B] transition hover:text-white"
                                >
                                    Get Directions

                                    <HiArrowUpRight />
                                </a>

                            </div>

                        </motion.div>

                    </div>

                </div>

            </section>


            {/* ================= FAQ SECTION ================= */}

            <section className="bg-[#F7F9F3] py-20 md:py-28">

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

                            <span className="text-xs font-bold uppercase tracking-[3px]">
                                Frequently Asked Questions
                            </span>

                        </div>

                        <h2 className="text-3xl font-extrabold text-[#1B2B27] md:text-5xl">
                            Got Questions?

                            <span className="mt-2 block text-[#789B38]">
                                We've Got Answers.
                            </span>
                        </h2>

                        <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-gray-500">
                            Find answers to some common questions about
                            our services and communication.
                        </p>

                    </motion.div>


                    <div className="space-y-4">

                        {faqs.map((faq, index) => (

                            <motion.details
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.5,
                                    delay: index * 0.08,
                                }}
                                className="group rounded-2xl border border-[#1B2B27]/10 bg-white p-6 transition-all duration-300 open:border-[#789B38]/40 open:shadow-lg md:p-7"
                            >

                                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-bold text-[#1B2B27] md:text-base">

                                    {faq.question}

                                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#C5F36B]/30 text-xl text-[#1B2B27] transition-all duration-300 group-open:rotate-45 group-open:bg-[#1B2B27] group-open:text-white">
                                        +
                                    </span>

                                </summary>

                                <p className="mt-5 border-t border-gray-100 pt-5 text-sm leading-8 text-gray-500">
                                    {faq.answer}
                                </p>

                            </motion.details>

                        ))}

                    </div>

                </div>

            </section>


            {/* ================= BOTTOM CTA ================= */}

            <section className="bg-white px-5 py-16 md:py-24">

                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-[#1B2B27] px-7 py-16 text-center md:px-16 md:py-20"
                >

                    <div className="absolute -right-20 -top-32 h-80 w-80 rounded-full bg-[#C5F36B]/10 blur-[100px]" />

                    <div className="absolute -bottom-40 -left-20 h-80 w-80 rounded-full bg-[#789B38]/20 blur-[100px]" />

                    <div className="relative">

                        <span className="text-xs font-bold uppercase tracking-[3px] text-[#C5F36B]">
                            Let's Work Together
                        </span>

                        <h2 className="mt-5 text-3xl font-extrabold text-white md:text-5xl">
                            Ready to Work With Us?
                        </h2>

                        <p className="mx-auto mt-6 max-w-2xl text-sm leading-8 text-white/60 md:text-base">
                            Let's discuss your requirements and find the right
                            lifting and safety solutions for your business.
                        </p>

                        <a
                            href={`https://wa.me/${whatsappNumber}?text=Hello%20LiftGuard%20Solutions!`}
                            target="_blank"
                            rel="noreferrer"
                            className="group mt-9 inline-flex items-center gap-3 rounded-xl bg-[#C5F36B] px-8 py-4 text-sm font-bold text-[#1B2B27] transition-all duration-300 hover:bg-white"
                        >

                            <FaWhatsapp className="text-lg" />

                            Talk to Our Team

                            <HiArrowUpRight className="text-lg transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />

                        </a>

                    </div>

                </motion.div>

            </section>

        </main>
    );
};

export default Contact;