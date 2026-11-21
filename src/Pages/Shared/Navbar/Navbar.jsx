import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { HiMenuAlt3, HiX, HiArrowRight } from 'react-icons/hi';
import { motion, AnimatePresence } from 'motion/react';

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
        { name: 'Our Team', path: '/team' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <header
            className={`fixed top-0 left-0 z-50 w-full transition-all duration-500 ${
                isScrolled
                    ? 'bg-[#167D75] shadow-lg shadow-black/10'
                    : 'bg-transparent'
            }`}
        >
            <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">

                {/* Logo */}
                <NavLink
                    to="/"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-3"
                >
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-xl font-bold text-[#167D75]">
                        C
                    </div>

                    <div>
                        <h2 className="text-xl font-extrabold tracking-tight text-white">
                            Company<span className="text-white">.</span>
                        </h2>

                        <p className="text-[10px] font-semibold uppercase tracking-[2px] text-white/80">
                            Building The Future
                        </p>
                    </div>
                </NavLink>

                {/* Desktop Navigation */}
                <div className="hidden items-center gap-8 lg:flex">

                    {navItems.map((item) => (
                        <NavLink
                            key={item.name}
                            to={item.path}
                            className={({ isActive }) =>
                                `relative text-sm font-semibold transition-colors duration-300 ${
                                    isActive
                                        ? 'text-white'
                                        : 'text-white/80 hover:text-white'
                                }`
                            }
                        >
                            {({ isActive }) => (
                                <span className="relative py-2">
                                    {item.name}

                                    {isActive && (
                                        <span className="absolute -bottom-2 left-0 h-0.5 w-full rounded-full bg-white" />
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
                        className="group flex items-center gap-2 rounded-lg border border-white bg-white px-5 py-3 text-sm font-bold text-[#167D75] transition-all duration-300 hover:bg-[#1F8A80] hover:text-white"
                    >
                        Get a Quote

                        <HiArrowRight className="text-lg transition-transform duration-300 group-hover:translate-x-1" />
                    </NavLink>
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/40 text-2xl text-white transition hover:bg-white/10 lg:hidden"
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
                        className="overflow-hidden border-t border-white/20 bg-[#167D75] lg:hidden"
                    >
                        <div className="mx-auto max-w-7xl space-y-1 px-5 py-5">

                            {navItems.map((item) => (
                                <NavLink
                                    key={item.name}
                                    to={item.path}
                                    onClick={() => setIsOpen(false)}
                                    className={({ isActive }) =>
                                        `block rounded-lg px-4 py-3 text-sm font-semibold transition ${
                                            isActive
                                                ? 'bg-white/15 text-white'
                                                : 'text-white/80 hover:bg-white/10 hover:text-white'
                                        }`
                                    }
                                >
                                    {item.name}
                                </NavLink>
                            ))}

                            <NavLink
                                to="/contact"
                                onClick={() => setIsOpen(false)}
                                className="mt-4 flex items-center justify-center gap-2 rounded-lg bg-white px-5 py-3 font-bold text-[#167D75] transition hover:bg-white/90"
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