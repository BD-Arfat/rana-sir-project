import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { HiArrowUp } from 'react-icons/hi2';

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsVisible(window.scrollY > 300);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.button
                    type="button"
                    onClick={scrollToTop}
                    initial={{ opacity: 0, scale: 0.5, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.5, y: 20 }}
                    whileHover={{ scale: 1.1, y: -4 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    aria-label="Scroll to top"
                    className="fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-[#167D75] text-white shadow-lg shadow-[#167D75]/30 transition-colors duration-300 hover:bg-[#C5F36B] hover:text-[#111C1A] sm:bottom-8 sm:right-8"
                >
                    <HiArrowUp className="text-2xl" />
                </motion.button>
            )}
        </AnimatePresence>
    );
};

export default ScrollToTop;