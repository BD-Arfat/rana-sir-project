import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
    HiChevronLeft,
    HiChevronRight,
    HiXMark,
} from 'react-icons/hi2';
import image1 from '../../../assets/loadtest1.jpg'
import image2 from '../../../assets/loadtest2.jpg'

const GallerySection = () => {
    const images = [
        `${image1}`,
        `${image2}`,
        'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=90&w=1400',
        'https://images.unsplash.com/photo-1567789884554-0b844b597180?q=90&w=1400',
        'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=90&w=1400',
        'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?q=90&w=1400',
    ];

    const carouselRef = useRef(null);

    const [selectedImage, setSelectedImage] = useState(null);
    const [isPaused, setIsPaused] = useState(false);

    const getVisibleSlides = () => {
        if (typeof window === 'undefined') return 3;
        if (window.innerWidth < 640) return 1;
        if (window.innerWidth < 1024) return 2;
        return 3;
    };

    const [visibleSlides, setVisibleSlides] = useState(getVisibleSlides);

    useEffect(() => {
        const handleResize = () => {
            setVisibleSlides(getVisibleSlides());
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    // Carousel Navigation
    const moveCarousel = (direction) => {
        const container = carouselRef.current;
        if (!container) return;

        const card = container.querySelector('.gallery-card');
        if (!card) return;

        const amount = card.offsetWidth + 20;
        const maxScroll = container.scrollWidth - container.clientWidth;

        if (direction === 'next') {
            if (container.scrollLeft >= maxScroll - 10) {
                container.scrollTo({
                    left: 0,
                    behavior: 'smooth',
                });
            } else {
                container.scrollBy({
                    left: amount,
                    behavior: 'smooth',
                });
            }
        } else {
            if (container.scrollLeft <= 10) {
                container.scrollTo({
                    left: maxScroll,
                    behavior: 'smooth',
                });
            } else {
                container.scrollBy({
                    left: -amount,
                    behavior: 'smooth',
                });
            }
        }
    };

    // Automatic Carousel
    useEffect(() => {
        if (isPaused || selectedImage) return;

        const interval = setInterval(() => {
            moveCarousel('next');
        }, 2200);

        return () => clearInterval(interval);
    }, [isPaused, selectedImage, visibleSlides]);

    // Close Modal with Escape
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') {
                setSelectedImage(null);
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    return (
        <section className="overflow-hidden bg-[#F7F9F3] py-16 md:py-24">

            <div className="mx-auto max-w-7xl px-5 lg:px-8">

                {/* Centered Section Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="mx-auto mb-12 max-w-3xl text-center md:mb-16"
                >
                    <div className="mb-5 flex items-center justify-center gap-3">

                        <span className="h-[2px] w-9 bg-[#789B38]" />

                        <span className="text-sm font-bold uppercase tracking-[3px] text-[#789B38]">
                            Our Gallery
                        </span>

                        <span className="h-[2px] w-9 bg-[#789B38]" />

                    </div>

                    <h2 className="text-4xl font-extrabold leading-tight text-[#1B2B27] sm:text-5xl md:text-6xl">
                        A Closer Look at
                        <span className="mt-2 block text-[#789B38]">
                            What We Do.
                        </span>
                    </h2>
                </motion.div>


                {/* Image Carousel */}
                <div
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                    onTouchStart={() => setIsPaused(true)}
                    onTouchEnd={() => setIsPaused(false)}
                    className="relative"
                >

                    {/* Previous Button */}
                    <button
                        onClick={() => moveCarousel('prev')}
                        aria-label="Previous image"
                        className="absolute left-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-[#1B2B27]/90 text-white shadow-lg transition-all duration-300 hover:bg-[#C5F36B] hover:text-[#1B2B27] sm:left-4 md:h-12 md:w-12"
                    >
                        <HiChevronLeft className="text-2xl" />
                    </button>


                    {/* Images */}
                    <div
                        ref={carouselRef}
                        className="flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth"
                        style={{
                            scrollbarWidth: 'none',
                            msOverflowStyle: 'none',
                        }}
                    >
                        {images.map((image, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 25 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.5,
                                    delay: index * 0.08,
                                }}
                                onClick={() => setSelectedImage(image)}
                                className="gallery-card h-[260px] min-w-0 flex-[0_0_88%] cursor-pointer snap-start overflow-hidden rounded-xl bg-white shadow-sm sm:h-[320px] sm:flex-[0_0_calc(50%-10px)] lg:h-[400px] lg:flex-[0_0_calc(33.333%-13.34px)]"
                            >
                                <img
                                    src={image}
                                    alt={`Gallery image ${index + 1}`}
                                    loading="lazy"
                                    className="h-full w-full object-cover transition-transform duration-700 ease-out hover:scale-105"
                                />
                            </motion.div>
                        ))}
                    </div>


                    {/* Next Button */}
                    <button
                        onClick={() => moveCarousel('next')}
                        aria-label="Next image"
                        className="absolute right-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-[#1B2B27]/90 text-white shadow-lg transition-all duration-300 hover:bg-[#C5F36B] hover:text-[#1B2B27] sm:right-4 md:h-12 md:w-12"
                    >
                        <HiChevronRight className="text-2xl" />
                    </button>

                </div>

            </div>


            {/* Full Image Preview Modal */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedImage(null)}
                        className="fixed inset-0 z-[100] flex items-center justify-center bg-[#1B2B27]/95 p-4 backdrop-blur-sm"
                    >

                        <button
                            onClick={() => setSelectedImage(null)}
                            aria-label="Close image"
                            className="absolute right-5 top-5 flex h-12 w-12 items-center justify-center rounded-full bg-[#C5F36B] text-[#1B2B27] transition-transform hover:scale-110"
                        >
                            <HiXMark className="text-2xl" />
                        </button>

                        <motion.img
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            onClick={(e) => e.stopPropagation()}
                            src={selectedImage}
                            alt="Gallery preview"
                            className="max-h-[85vh] max-w-full rounded-lg object-contain"
                        />

                    </motion.div>
                )}
            </AnimatePresence>

        </section>
    );
};

export default GallerySection;