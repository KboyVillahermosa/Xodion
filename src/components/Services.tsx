import React, { useRef, useEffect } from 'react';
import { motion, useMotionValue } from 'framer-motion';
import type { PanInfo } from 'framer-motion';
import { Code, Palette, Zap, Shield, Globe, Smartphone } from 'lucide-react';

const services = [
    {
        icon: Code,
        title: 'Web Engineering',
        description: 'Building robust, scalable applications that power your business logic with precision code.',
        image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80',
        color: 'text-blue-600',
        bgColor: 'bg-blue-50'
    },
    {
        icon: Palette,
        title: 'UI/UX Design',
        description: 'Crafting intuitive and beautiful user journeys that convert visitors into loyal customers.',
        image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=800&q=80',
        color: 'text-purple-600',
        bgColor: 'bg-purple-50'
    },
    {
        icon: Zap,
        title: 'Performance',
        description: 'Optimizing every byte to ensure your digital presence loads instantly for everyone.',
        image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80',
        color: 'text-yellow-600',
        bgColor: 'bg-yellow-50'
    },
    {
        icon: Shield,
        title: 'Accessibility',
        description: 'Creating inclusive experiences that work for all users, adhering to WCAG standards.',
        image: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=800&q=80',
        color: 'text-green-600',
        bgColor: 'bg-green-50'
    },
    {
        icon: Globe,
        title: 'CMS Solutions',
        description: 'Empowering you with flexible content management through WordPress and Drupal expertise.',
        image: 'https://images.unsplash.com/photo-1432821596592-e2c18b78144f?auto=format&fit=crop&w=800&q=80',
        color: 'text-indigo-600',
        bgColor: 'bg-indigo-50'
    },
    {
        icon: Smartphone,
        title: 'Responsive',
        description: 'Seamlessly fluid designs that adapt perfectly to any screen size or device.',
        image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80',
        color: 'text-pink-600',
        bgColor: 'bg-pink-50'
    }
];

const Services: React.FC = () => {
    const [activeIndex, setActiveIndex] = React.useState(0);
    const [isPaused, setIsPaused] = React.useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    // Motion values for drag
    const dragX = useMotionValue(0);

    // Auto-play: slide every 3 seconds
    useEffect(() => {
        if (isPaused) return;

        const interval = setInterval(() => {
            setActiveIndex((prev) => {
                const newIndex = prev + 1;
                return ((newIndex % services.length) + services.length) % services.length;
            });
        }, 3000); // 3 seconds

        return () => clearInterval(interval);
    }, [isPaused]);

    const handleDragEnd = (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
        const threshold = 50;
        const velocity = info.velocity.x;

        if (Math.abs(velocity) > 500 || Math.abs(info.offset.x) > threshold) {
            if (info.offset.x > 0) {
                // Drag right - go to previous
                setActiveIndex(prev => {
                    const newIndex = prev - 1;
                    return ((newIndex % services.length) + services.length) % services.length;
                });
            } else {
                // Drag left - go to next
                setActiveIndex(prev => {
                    const newIndex = prev + 1;
                    return ((newIndex % services.length) + services.length) % services.length;
                });
            }
        }

        // Reset drag position
        dragX.set(0);
    };

    return (
        <section id="services" className="py-24 bg-white relative overflow-hidden flex flex-col items-center justify-center min-h-[800px]">
            {/* Decorative Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full bg-dot-pattern opacity-30 pointer-events-none" />
            <div className="absolute top-20 right-0 w-96 h-96 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob" />
            <div className="absolute bottom-20 left-0 w-96 h-96 bg-pink-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* --- Infinite 3D Carousel Slider --- */}
                <motion.div
                    className="relative w-full h-[500px] md:h-[700px] perspective-1000 overflow-visible flex items-center justify-center cursor-grab active:cursor-grabbing"
                    ref={containerRef}
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={0.2}
                    onDragEnd={handleDragEnd}
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                    onTouchStart={() => setIsPaused(true)}
                    onTouchEnd={() => setIsPaused(false)}
                    style={{ x: dragX }}
                >

                    {/* Render Virtual Items */}
                    {[-2, -1, 0, 1, 2].map((offset) => {
                        const renderIndex = activeIndex + offset;
                        const dataIndex = ((renderIndex % services.length) + services.length) % services.length;
                        const service = services[dataIndex];
                        const Icon = service.icon;

                        const isActive = offset === 0;
                        // Responsive spacing: tighter on mobile, wider on desktop
                        const baseOffset = offset * (window.innerWidth < 768 ? 280 : 420);
                        const scale = isActive ? (window.innerWidth < 768 ? 1.05 : 1.15) : 0.8;
                        const opacity = isActive ? 1 : 0.3;
                        const zIndex = isActive ? 20 : 20 - Math.abs(offset) * 2;
                        const rotateY = offset * -10;

                        return (
                            <motion.div
                                key={renderIndex}
                                initial={false}
                                animate={{
                                    x: baseOffset,
                                    scale: scale,
                                    opacity: opacity,
                                    rotateY: rotateY,
                                    zIndex: zIndex
                                }}
                                transition={{ type: "spring", stiffness: 280, damping: 28 }}
                                className={`
                                    absolute top-1/2 left-1/2 
                                    -ml-36 md:-ml-48 -mt-48 md:-mt-72
                                    w-72 md:w-96 h-96 md:h-[580px] 
                                    overflow-hidden flex flex-col justify-between
                                    shadow-2xl
                                    backface-hidden cursor-pointer
                                `}
                                onClick={() => {
                                    const newIndex = activeIndex + offset;
                                    setActiveIndex(((newIndex % services.length) + services.length) % services.length);
                                }}
                            >
                                {/* Background Image */}
                                <div className="absolute inset-0 z-0">
                                    <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
                                    {/* Only add dark gradient to active card for text readability */}
                                    {isActive && (
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                                    )}
                                </div>

                                {/* Content Overlay */}
                                <div className="relative z-10 p-4 md:p-8 flex flex-col justify-between h-full pointer-events-none">
                                    <div className="flex justify-between items-start">
                                        <div className={`w-10 md:w-14 h-10 md:h-14 rounded-xl md:rounded-2xl flex items-center justify-center backdrop-blur-md bg-white/20 text-white`}>
                                            <Icon className="w-5 md:w-7 h-5 md:h-7" />
                                        </div>
                                        <span className={`font-bold text-4xl md:text-6xl font-heading tracking-tighter text-white/30`}>
                                            0{dataIndex + 1}
                                        </span>
                                    </div>

                                    <div>
                                        <h3 className="font-heading font-bold text-xl md:text-3xl mb-2 md:mb-4 leading-tight text-white">
                                            {service.title}
                                        </h3>
                                        {/* The little line */}
                                        <div className={`h-1 md:h-1.5 w-8 md:w-12 rounded-full ${isActive ? 'bg-white' : 'bg-white/50'}`} />
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}

                    {/* Floating Input Bar - Centered on Active Card */}
                    <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-full max-w-xs md:max-w-2xl mx-auto z-[100] px-4">
                        <div className="bg-white border-2 border-indigo-100 rounded-full shadow-2xl shadow-indigo-500/20 p-1.5 md:p-2 flex items-center backdrop-blur-sm">
                            <div className="w-8 h-8 md:w-12 md:h-12 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600 flex-shrink-0">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-6 md:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </div>

                            {/* Input Divider */}
                            <div className="w-px h-6 md:h-8 bg-gray-200 mx-2 md:mx-4" />

                            {/* Service Title Display - smooth transition */}
                            <motion.div
                                key={activeIndex}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.3 }}
                                className="flex-grow font-heading font-bold text-base md:text-3xl lg:text-4xl text-gray-800 tracking-tight overflow-hidden"
                            >
                                {services[activeIndex].title}
                            </motion.div>
                        </div>
                    </div>
                </motion.div>

                {/* Description Below Carousel */}
                <div className="mt-8 md:mt-12 text-center px-4">
                    <p className="text-base md:text-xl text-gray-500 max-w-2xl mx-auto transition-opacity duration-300">
                        {services[activeIndex].description}
                    </p>
                </div>
            </div>

            <style>{`
                .no-scrollbar::-webkit-scrollbar {
                    display: none;
                }
                .no-scrollbar {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
                @keyframes blink {
                    0%, 100% { opacity: 1; }
                    50% { opacity: 0; }
                }
                .animate-blink {
                    animation: blink 1s step-end infinite;
                }
            `}</style>
        </section >
    );
};

export default Services;
