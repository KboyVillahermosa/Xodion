import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const partners = [
    { name: 'Mamasusan BBQ', logo: '/mamasusanlogo.jpg' },
    { name: 'Shared Marketing MLM System', logo: '/sharedlogo.png' },
    { name: 'Mamasusan BBQ', logo: '/mamasusanlogo.jpg' },
    { name: 'Shared Marketing MLM System', logo: '/sharedlogo.png' },
    { name: 'Mamasusan BBQ', logo: '/mamasusanlogo.jpg' },
    { name: 'Shared Marketing MLM System', logo: '/sharedlogo.png' },
];

const Partners: React.FC = () => {
    return (
        <section className="py-16 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 mb-12 flex flex-col md:flex-row justify-between items-end md:items-center">
                <div>
                    <h3 className="text-sm font-bold tracking-widest text-gray-900 uppercase">
                        Our Proud Partnerships <span className="text-gray-500 font-normal ml-2 lowercase first-letter:capitalize">180+ project launched</span>
                    </h3>
                </div>
                <a href="#" className="hidden md:flex items-center gap-2 text-sm font-semibold text-gray-600 hover:text-indigo-600 transition-colors group">
                    See all our works
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
            </div>

            <div className="relative w-full flex overflow-hidden mask-gradient-x">
                {/* Gradient Masks */}
                <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-white to-transparent z-10"></div>
                <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-white to-transparent z-10"></div>

                {/* Slider Track */}
                <motion.div
                    className="flex gap-16 items-center flex-nowrap pl-16"
                    animate={{
                        x: [0, -1000], // Adjust based on total width of items
                    }}
                    transition={{
                        x: {
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 20,
                            ease: "linear",
                        },
                    }}
                >
                    {[...partners, ...partners].map((partner, index) => (
                        <div key={index} className="flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100 cursor-pointer">
                            <div className="h-16 flex items-center justify-center">
                                <img src={partner.logo} alt={partner.name} className="h-full w-auto object-contain" />
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
            <div className="md:hidden mt-8 px-6 flex justify-center">
                <a href="#" className="flex items-center gap-2 text-sm font-semibold text-gray-600 hover:text-indigo-600 transition-colors group">
                    See all our works
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
            </div>
        </section>
    );
};

export default Partners;
