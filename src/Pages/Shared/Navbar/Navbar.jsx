import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { HiMenuAlt3, HiX, HiArrowRight } from 'react-icons/hi';
import { motion, AnimatePresence } from 'motion/react';
import logo from '../../../assets/logo.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const navItems = [
        { name: 'Home', path: '/' },
        { name: 'About Us', path: '/about' },
        { name: 'Services', path: '/services' },
        { name: 'Projects', path: '/projects' },
        // { name: 'Our Team', path: '/team' },
    ];

    return (
        <header
            className={`fixed top-0 left-0 z-50 w-full transition-all duration-500 ${isScrolled
                    ? 'bg-[#1B2B27] shadow-lg shadow-black/20'
                    : 'bg-transparent'
                }`}
        >
            <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 lg:px-8">

                {/* Logo */}
                <NavLink
                    to="/"
                    onClick={() => setIsOpen(false)}
                    className="flex shrink-0 items-center"
                >
                    <img
                        src={logo}
                        alt="Lifting & Safety Solutions"
                        className="h-10 w-auto max-w-[190px] object-contain brightness-0 invert sm:h-12 sm:max-w-[230px] lg:h-14 lg:max-w-[270px]"
                    />
                </NavLink>

                {/* Desktop Navigation */}
                <div className="hidden items-center gap-8 lg:flex">

                    {navItems.map((item) => (
                        <NavLink
                            key={item.name}
                            to={item.path}
                            className={({ isActive }) =>
                                `relative text-sm font-semibold transition-colors duration-300 ${isActive
                                    ? 'text-[#C5F36B]'
                                    : 'text-white/80 hover:text-[#C5F36B]'
                                }`
                            }
                        >
                            {({ isActive }) => (
                                <span className="relative py-2">
                                    {item.name}

                                    {isActive && (
                                        <span className="absolute -bottom-2 left-0 h-0.5 w-full rounded-full bg-[#C5F36B]" />
                                    )}
                                </span>
                            )}
                        </NavLink>
                    ))}

                </div>

                {/* Desktop Button */}
                <div className="hidden lg:block">
                    <NavLink
                        to="/contact"
                        className="group flex items-center gap-2 rounded-lg bg-[#C5F36B] px-5 py-3 text-sm font-bold text-[#1B2B27] transition-all duration-300 hover:bg-white hover:shadow-lg"
                    >
                        Contact Me

                        <HiArrowRight className="text-lg transition-transform duration-300 group-hover:translate-x-1" />
                    </NavLink>
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#C5F36B]/50 text-2xl text-[#C5F36B] transition hover:bg-[#C5F36B] hover:text-[#1B2B27] lg:hidden"
                    aria-label={isOpen ? 'Close menu' : 'Open menu'}
                    aria-expanded={isOpen}
                >
                    {isOpen ? <HiX /> : <HiMenuAlt3 />}
                </button>

            </nav>

            {/* Mobile Navigation */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden border-t border-[#C5F36B]/20 bg-[#1B2B27] lg:hidden"
                    >
                        <div className="mx-auto max-w-7xl space-y-1 px-5 py-5">

                            {navItems.map((item) => (
                                <NavLink
                                    key={item.name}
                                    to={item.path}
                                    onClick={() => setIsOpen(false)}
                                    className={({ isActive }) =>
                                        `block rounded-lg px-4 py-3 text-sm font-semibold transition-all duration-300 ${isActive
                                            ? 'bg-[#C5F36B] text-[#1B2B27]'
                                            : 'text-white/80 hover:bg-white/10 hover:text-[#C5F36B]'
                                        }`
                                    }
                                >
                                    {item.name}
                                </NavLink>
                            ))}

                            <NavLink
                                to="/contact"
                                onClick={() => setIsOpen(false)}
                                className="mt-4 flex items-center justify-center gap-2 rounded-lg bg-[#C5F36B] px-5 py-3 font-bold text-[#1B2B27] transition hover:bg-white"
                            >
                                Get a Quote
                                <HiArrowRight className="text-lg" />
                            </NavLink>

                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

        </header>
    );
};

export default Navbar;