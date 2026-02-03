import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Rocket } from 'lucide-react';

const ScrollToTop: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isLaunching, setIsLaunching] = useState(false);

    // Show button when page is scrolled down
    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);

        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    const scrollToTop = () => {
        // Trigger launch animation
        setIsLaunching(true);

        // Wait for animation to complete before scrolling
        setTimeout(() => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });

            // Reset launch state after scroll completes
            setTimeout(() => {
                setIsLaunching(false);
            }, 800);
        }, 600);
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <div className="fixed bottom-24 right-6 md:right-8 z-40">
                    {/* Smoke Trail Effects */}
                    {isLaunching && (
                        <>
                            {[...Array(3)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, scale: 0, y: 0 }}
                                    animate={{
                                        opacity: [0, 0.6, 0],
                                        scale: [0.5, 1.5, 2],
                                        y: [0, 20, 40]
                                    }}
                                    transition={{
                                        duration: 0.8,
                                        delay: i * 0.1,
                                        ease: "easeOut"
                                    }}
                                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-gradient-to-t from-orange-400 to-yellow-300 blur-md"
                                />
                            ))}
                        </>
                    )}

                    <motion.button
                        initial={{ opacity: 0, scale: 0.5, y: 20 }}
                        animate={
                            isLaunching
                                ? {
                                    opacity: [1, 1, 0],
                                    scale: [1, 1.2, 0.8],
                                    y: [-500, -1000],
                                    rotate: [0, -10, 10, 0]
                                }
                                : { opacity: 1, scale: 1, y: 0, rotate: 0 }
                        }
                        exit={{ opacity: 0, scale: 0.5, y: 20 }}
                        transition={
                            isLaunching
                                ? {
                                    duration: 0.6,
                                    ease: [0.34, 1.56, 0.64, 1]
                                }
                                : {
                                    type: "spring",
                                    stiffness: 260,
                                    damping: 20
                                }
                        }
                        onClick={scrollToTop}
                        disabled={isLaunching}
                        className="relative w-14 h-14 rounded-full bg-gradient-to-br from-indigo-600 to-purple-600 text-white shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-200 flex items-center justify-center group disabled:cursor-default"
                        aria-label="Scroll to top"
                    >
                        <motion.div
                            animate={isLaunching ? {
                                y: [-2, -4, -6],
                                scale: [1, 1.1, 1.2]
                            } : {}}
                            transition={{ duration: 0.3 }}
                        >
                            <Rocket className="w-6 h-6 transform group-hover:-translate-y-1 transition-transform duration-200" />
                        </motion.div>

                        {/* Launch fire effect */}
                        {isLaunching && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{
                                    opacity: [0, 1, 0.8, 0],
                                    scale: [0.8, 1.2, 1.5, 2]
                                }}
                                transition={{ duration: 0.5 }}
                                className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-8 h-8 rounded-full bg-gradient-to-t from-orange-500 via-yellow-400 to-transparent blur-sm"
                            />
                        )}
                    </motion.button>

                    {/* Speed lines effect during launch */}
                    {isLaunching && (
                        <div className="absolute inset-0 overflow-hidden pointer-events-none">
                            {[...Array(5)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, height: 0, y: 0 }}
                                    animate={{
                                        opacity: [0, 0.6, 0],
                                        height: [0, 40, 60],
                                        y: [0, 30, 60]
                                    }}
                                    transition={{
                                        duration: 0.4,
                                        delay: i * 0.05,
                                        ease: "easeOut"
                                    }}
                                    className="absolute top-0 left-1/2 w-0.5 bg-gradient-to-b from-indigo-400 to-transparent"
                                    style={{
                                        left: `${50 + (i - 2) * 15}%`
                                    }}
                                />
                            ))}
                        </div>
                    )}
                </div>
            )}
        </AnimatePresence>
    );
};

export default ScrollToTop;
