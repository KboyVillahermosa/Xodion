import React from 'react';
import { motion } from 'framer-motion';

const galleryImages = [
    // Row 1 - scrolls right
    [
        '/s1.jpg',
        '/s2.jpg',
        '/s3.jpg',
        '/s4.jpg',
        '/s5.jpg',
        '/s6.jpg',
        '/s7.jpg',
        '/s8.jpg',
    ],
    // Row 2 - scrolls left
    [
        '/s9.jpg',
        '/s10.jpg',
        '/s11.jpg',
        '/s12.jpg',
        '/s13.jpg',
        '/s14.jpg',
        '/s15.jpg',
    ],
    // Row 3 - scrolls right
    [
        '/s16.jpg',
        '/s17.jpg',
        '/s18.jpg',
        '/s19.jpg',
        '/s20.jpg',
        '/s21.jpg',
        '/s22.jpg',
    ],
];

const GallerySlider: React.FC = () => {
    return (
        <section className="relative py-20  overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center"
                >
                    <h2 className="font-heading font-bold text-4xl md:text-5xl text-gray-900 mb-4">
                        Our <span className="text-indigo-600">Journey</span>
                    </h2>
                    <p className="text-xl text-gray-600">
                        Moments that define our team and culture
                    </p>
                </motion.div>
            </div>

            <div className="space-y-6">
                {galleryImages.map((row, rowIndex) => {
                    const direction = rowIndex % 2 === 0 ? 1 : -1; // 1 for right, -1 for left

                    return (
                        <div key={rowIndex} className="relative">
                            <motion.div
                                className="flex gap-6"
                                animate={{
                                    x: direction === 1 ? [0, -1920] : [-1920, 0],
                                }}
                                transition={{
                                    duration: 40,
                                    repeat: Infinity,
                                    ease: 'linear',
                                }}
                            >
                                {/* Duplicate images for seamless loop */}
                                {[...row, ...row, ...row, ...row].map((image, index) => (
                                    <div
                                        key={index}
                                        className="relative flex-shrink-0 w-80 h-60 rounded-2xl overflow-hidden group"
                                    >
                                        <img
                                            src={image}
                                            alt={`Gallery ${rowIndex}-${index}`}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    </div>
                                ))}
                            </motion.div>
                        </div>
                    );
                })}
            </div>

            {/* Left Gradient Overlay */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white via-white/80 to-transparent pointer-events-none z-10" />

            {/* Right Gradient Overlay */}
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white via-white/80 to-transparent pointer-events-none z-10" />
        </section>
    );
};

export default GallerySlider;
