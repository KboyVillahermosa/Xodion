import React from 'react';
import Layout from '../components/Layout';
import { motion } from 'framer-motion';
import { Mail, Phone } from 'lucide-react';

const ContactPage: React.FC = () => {

    return (
        <Layout>
            <div className="pt-32 pb-32 px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
                            Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Touch</span>
                        </h1>
                        <p className="text-xl text-gray-600 mb-16 max-w-2xl mx-auto">
                            Have a project in mind? We'd love to hear from you. 
                            Reach out through any of the channels below and we'll respond as soon as possible.
                        </p>

                        <div className="flex flex-col md:flex-row justify-center gap-12 md:gap-24">
                            <div className="flex flex-col items-center gap-4">
                                <div className="w-16 h-16 rounded-3xl bg-indigo-50 flex items-center justify-center text-indigo-600 shadow-sm border border-indigo-100">
                                    <Mail size={28} />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900">Email Us</h3>
                                <a href="mailto:xodiontech@gmail.com" className="text-lg text-gray-600 hover:text-indigo-600 transition-colors font-medium">
                                    xodiontech@gmail.com
                                </a>
                            </div>

                            <div className="flex flex-col items-center gap-4">
                                <div className="w-16 h-16 rounded-3xl bg-purple-50 flex items-center justify-center text-purple-600 shadow-sm border border-purple-100">
                                    <Phone size={28} />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900">Call Us</h3>
                                <a href="tel:+63967176633" className="text-lg text-gray-600 hover:text-indigo-600 transition-colors font-medium">
                                    +63 967 176 633
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </Layout>
    );
};

export default ContactPage;
