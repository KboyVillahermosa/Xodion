import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <nav className="fixed top-0 left-0 w-full h-20 bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
                    <Link to="/" className="flex items-center">
                        <img src="/logo.png" alt="Limehills" className="h-10 w-auto" />
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-8">
                        <Link
                            to="/"
                            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                            className="text-gray-500 hover:text-gray-900 font-medium transition-colors"
                        >
                            Home
                        </Link>
                        <Link to="/projects" className="text-gray-500 hover:text-gray-900 font-medium transition-colors">
                            Projects
                        </Link>
                        <Link to="/about" className="text-gray-500 hover:text-gray-900 font-medium transition-colors">
                            About
                        </Link>
                        <Link to="/contact" className="text-gray-500 hover:text-gray-900 font-medium transition-colors">
                            Contact
                        </Link>
                    </div>

                    <div className="hidden md:block">
                        <Link to="/contact">
                            <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-2.5 rounded-full font-medium transition-all hover:-translate-y-0.5 hover:shadow-xl hover:from-indigo-700 hover:to-purple-700">
                                Let's Talk
                            </button>
                        </Link>
                    </div>

                    {/* Mobile Toggle */}
                    <button className="md:hidden text-gray-900 z-50" onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </nav>

            {/* Mobile Sidebar */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            className="fixed inset-0 bg-black/50 z-40 md:hidden"
                        />

                        {/* Sidebar */}
                        <motion.div
                            initial={{ x: '-100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '-100%' }}
                            transition={{ type: 'tween', duration: 0.3 }}
                            className="fixed top-0 left-0 h-full w-80 bg-white shadow-2xl z-40 md:hidden"
                        >
                            <div className="flex flex-col h-full pt-24 px-8">
                                {/* Navigation Links */}
                                <nav className="flex flex-col space-y-6">
                                    <Link
                                        to="/"
                                        className="text-gray-700 hover:text-indigo-600 font-medium text-lg transition-colors"
                                        onClick={() => {
                                            setIsOpen(false);
                                            window.scrollTo({ top: 0, behavior: 'smooth' });
                                        }}
                                    >
                                        Home
                                    </Link>
                                    <Link
                                        to="/projects"
                                        className="text-gray-700 hover:text-indigo-600 font-medium text-lg transition-colors"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        Projects
                                    </Link>
                                    <Link
                                        to="/about"
                                        className="text-gray-700 hover:text-indigo-600 font-medium text-lg transition-colors"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        About
                                    </Link>
                                    <Link
                                        to="/contact"
                                        className="text-gray-700 hover:text-indigo-600 font-medium text-lg transition-colors"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        Contact
                                    </Link>

                                </nav>

                                {/* CTA Button */}
                                <div className="mt-auto mb-8">
                                    <Link to="/contact" onClick={() => setIsOpen(false)}>
                                        <button
                                            className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 rounded-full font-medium hover:from-indigo-700 hover:to-purple-700 transition-all"
                                        >
                                            Let's Talk
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
