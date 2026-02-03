import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
    {
        id: 1,
        name: 'Jennifer Martinez',
        role: 'CEO, TechFlow Solutions',
        company: 'TechFlow Solutions',
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80',
        content: 'Working with this team was an absolute game-changer for our business. They transformed our vision into a stunning, high-performing website that exceeded all expectations. Their attention to detail and commitment to excellence is unmatched.',
        rating: 5,
        color: 'indigo'
    },
    {
        id: 2,
        name: 'Robert Chen',
        role: 'Product Manager, InnovateCorp',
        company: 'InnovateCorp',
        image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80',
        content: 'The level of professionalism and technical expertise displayed by this team is truly remarkable. They delivered a complex web application ahead of schedule, and the results have been phenomenal for our user engagement metrics.',
        rating: 5,
        color: 'purple'
    },
    {
        id: 3,
        name: 'Sarah Thompson',
        role: 'Marketing Director, BrightPath',
        company: 'BrightPath',
        image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&q=80',
        content: 'From the initial consultation to the final launch, every step was handled with care and precision. Our new website not only looks incredible but has also significantly improved our conversion rates. Highly recommended!',
        rating: 5,
        color: 'pink'
    },
    {
        id: 4,
        name: 'Michael Anderson',
        role: 'Founder, StartupHub',
        company: 'StartupHub',
        image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
        content: 'Their ability to understand our unique needs and translate them into a beautiful, functional platform was impressive. The ongoing support and maintenance have been equally excellent. A true partner in our digital success.',
        rating: 5,
        color: 'blue'
    },
    {
        id: 5,
        name: 'Emily Rodriguez',
        role: 'Creative Director, DesignLab',
        company: 'DesignLab',
        image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=400&q=80',
        content: 'As a designer myself, I have high standards. This team not only met but surpassed them. The user experience is flawless, the design is stunning, and the performance is exceptional. Couldn\'t be happier with the results!',
        rating: 5,
        color: 'green'
    }
];

const Testimonials: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    // Auto-play testimonials
    useEffect(() => {
        if (isPaused) return;

        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % testimonials.length);
        }, 5000); // Change every 5 seconds

        return () => clearInterval(interval);
    }, [isPaused]);

    const handlePrevious = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    const handleNext = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 text-gray-700 font-semibold text-sm mb-4">
                        <Star className="w-4 h-4 text-indigo-600 fill-current" />
                        <span>Client Testimonials</span>
                    </div>
                    <h2 className="font-heading font-bold text-4xl md:text-5xl text-gray-900 mb-4">
                        What Our Clients <span className="text-indigo-600">Say</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Don't just take our word for it - hear from the businesses we've helped transform
                    </p>
                </motion.div>

                {/* Main Testimonial Carousel */}
                <div
                    className="relative max-w-6xl mx-auto"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                >
                    {/* Carousel Container */}
                    <div className="relative h-[600px] md:h-[500px] flex items-center justify-center overflow-visible">
                        <motion.div
                            drag="x"
                            dragConstraints={{ left: 0, right: 0 }}
                            dragElastic={0.1}
                            onDragEnd={(_, info) => {
                                if (info.offset.x > 100) {
                                    handlePrevious();
                                } else if (info.offset.x < -100) {
                                    handleNext();
                                }
                            }}
                            className="relative w-full h-full flex items-center justify-center cursor-grab active:cursor-grabbing"
                        >
                            {[-1, 0, 1].map((offset) => {
                                const index = (currentIndex + offset + testimonials.length) % testimonials.length;
                                const testimonial = testimonials[index];
                                const isActive = offset === 0;

                                return (
                                    <motion.div
                                        key={index}
                                        initial={false}
                                        animate={{
                                            x: offset * (window.innerWidth < 768 ? 0 : 380),
                                            scale: isActive ? 1 : 0.85,
                                            opacity: isActive ? 1 : 0.4,
                                            zIndex: isActive ? 10 : 1,
                                        }}
                                        transition={{
                                            type: "spring",
                                            stiffness: 260,
                                            damping: 35,
                                            mass: 0.8
                                        }}
                                        onClick={() => {
                                            if (!isActive) {
                                                if (offset === 1) handleNext();
                                                if (offset === -1) handlePrevious();
                                            }
                                        }}
                                        className={`absolute max-w-2xl w-full px-4 ${!isActive && 'pointer-events-auto cursor-pointer'}`}
                                        style={{
                                            display: window.innerWidth < 768 && !isActive ? 'none' : 'block'
                                        }}
                                    >
                                        <motion.div
                                            className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden"
                                            whileHover={!isActive ? { scale: 1.02 } : {}}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <div className="p-8 md:p-10">
                                                {/* Quote Icon & Rating */}
                                                <motion.div
                                                    className="flex items-start justify-between mb-6"
                                                    initial={false}
                                                    animate={{
                                                        opacity: isActive ? 1 : 0.6,
                                                        y: isActive ? 0 : 10
                                                    }}
                                                    transition={{
                                                        duration: 0.4,
                                                        delay: 0.1,
                                                        ease: [0.25, 0.1, 0.25, 1]
                                                    }}
                                                >
                                                    <div className="w-12 h-12 rounded-xl bg-indigo-50 flex items-center justify-center">
                                                        <Quote className="w-6 h-6 text-indigo-600" />
                                                    </div>
                                                    <div className="flex gap-1">
                                                        {[...Array(testimonial.rating)].map((_, i) => (
                                                            <motion.div
                                                                key={i}
                                                                initial={false}
                                                                animate={{
                                                                    scale: isActive ? 1 : 0.8,
                                                                    opacity: isActive ? 1 : 0.5
                                                                }}
                                                                transition={{
                                                                    duration: 0.3,
                                                                    delay: isActive ? 0.15 + (i * 0.05) : 0
                                                                }}
                                                            >
                                                                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                                                            </motion.div>
                                                        ))}
                                                    </div>
                                                </motion.div>

                                                {/* Testimonial Content */}
                                                <motion.blockquote
                                                    className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8 line-clamp-4"
                                                    initial={false}
                                                    animate={{
                                                        opacity: isActive ? 1 : 0.5,
                                                        y: isActive ? 0 : 15
                                                    }}
                                                    transition={{
                                                        duration: 0.5,
                                                        delay: 0.2,
                                                        ease: [0.25, 0.1, 0.25, 1]
                                                    }}
                                                >
                                                    "{testimonial.content}"
                                                </motion.blockquote>

                                                {/* Author Info */}
                                                <motion.div
                                                    className="flex items-center gap-4 pt-6 border-t border-gray-100"
                                                    initial={false}
                                                    animate={{
                                                        opacity: isActive ? 1 : 0.5,
                                                        y: isActive ? 0 : 10
                                                    }}
                                                    transition={{
                                                        duration: 0.4,
                                                        delay: 0.3,
                                                        ease: [0.25, 0.1, 0.25, 1]
                                                    }}
                                                >
                                                    <img
                                                        src={testimonial.image}
                                                        alt={testimonial.name}
                                                        className="w-14 h-14 rounded-full object-cover border-2 border-gray-200"
                                                    />
                                                    <div className="flex-1">
                                                        <h4 className="font-heading font-bold text-base text-gray-900">
                                                            {testimonial.name}
                                                        </h4>
                                                        <p className="text-gray-600 text-sm">
                                                            {testimonial.role}
                                                        </p>
                                                        <p className="text-indigo-600 font-medium text-sm">
                                                            {testimonial.company}
                                                        </p>
                                                    </div>
                                                </motion.div>
                                            </div>
                                        </motion.div>
                                    </motion.div>
                                );
                            })}
                        </motion.div>
                    </div>

                    {/* Navigation Controls */}
                    <div className="flex items-center justify-center gap-6 mt-8">
                        <button
                            onClick={handlePrevious}
                            className="w-12 h-12 rounded-full bg-white border-2 border-gray-300 flex items-center justify-center text-gray-700 hover:bg-indigo-600 hover:border-indigo-600 hover:text-white transition-all shadow-sm hover:shadow-md hover:scale-110"
                            aria-label="Previous testimonial"
                        >
                            <ChevronLeft className="w-5 h-5" />
                        </button>

                        {/* Dots Indicator with Progress */}
                        <div className="flex gap-2 items-center">
                            {testimonials.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentIndex(index)}
                                    className="relative group"
                                    aria-label={`Go to testimonial ${index + 1}`}
                                >
                                    <div
                                        className={`h-2 rounded-full transition-all ${index === currentIndex
                                            ? 'w-12 bg-indigo-600'
                                            : 'w-2 bg-gray-300 group-hover:bg-gray-400 group-hover:w-6'
                                            }`}
                                    />
                                </button>
                            ))}
                        </div>

                        <button
                            onClick={handleNext}
                            className="w-12 h-12 rounded-full bg-white border-2 border-gray-300 flex items-center justify-center text-gray-700 hover:bg-indigo-600 hover:border-indigo-600 hover:text-white transition-all shadow-sm hover:shadow-md hover:scale-110"
                            aria-label="Next testimonial"
                        >
                            <ChevronRight className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            </div>
        </section >
    );
};

export default Testimonials;

