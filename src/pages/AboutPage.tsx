import React from 'react';
import Layout from '../components/Layout';
import GallerySlider from '../components/GallerySlider';
import { motion } from 'framer-motion';
import { Linkedin, Twitter, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const teamMembers = [
    {
        name: 'Sarah Johnson',
        role: 'CEO & Founder',
        image: '/ceoprofile.png',
        bio: 'Visionary leader with 15+ years in digital transformation and web accessibility.',
        linkedin: '#',
        twitter: '#',
        email: 'xodiontech@gmail.com'
    },
    {
        name: 'Michael Chen',
        role: 'Chief Technology Officer',
        image: '/ctoprofile.png',
        bio: 'Full-stack architect specializing in scalable web solutions and performance optimization.',
        linkedin: '#',
        twitter: '#',
        email: 'xodiontech@gmail.com'
    },
    {
        name: 'Emily Rodriguez',
        role: 'Chief Marketing Officer',
        image: '/cmo.png',
        bio: 'Strategic marketing leader driving brand growth and digital innovation.',
        linkedin: '#',
        twitter: '#',
        email: 'xodiontech@gmail.com'
    },
    {
        name: 'David Park',
        role: 'Head Developer',
        image: '/head-developer.png',
        bio: 'WordPress and Drupal expert with a passion for clean, maintainable code.',
        linkedin: '#',
        twitter: '#',
        email: 'xodiontech@gmail.com'
    },
    {
        name: 'Philip',
        role: 'Head of WordPress Development',
        image: '/philip.png',
        bio: 'WordPress specialist delivering robust and scalable solutions for complex projects.',
        linkedin: '#',
        twitter: '#',
        email: 'xodiontech@gmail.com'
    }
];

const AboutPage: React.FC = () => {
    return (
        <Layout>
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 bg-dot-pattern">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center max-w-4xl mx-auto"
                    >
                        <h1 className="font-heading font-bold text-5xl md:text-6xl text-gray-900 mb-8">
                            Our <span className="text-indigo-600">Identity</span>
                        </h1>
                        <div className="space-y-6">
                            <p className="text-2xl md:text-3xl text-gray-800 font-medium leading-relaxed">
                                We are a startup company full of dedication, passion, and a relentless drive to innovate.
                            </p>
                            <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
                                Our mission is to bridge the gap between human needs and digital solutions. 
                                Every project we undertake is fueled by our commitment to excellence and our belief 
                                that great technology should be accessible to everyone.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Team Grid Section - Commented Out
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {teamMembers.map((member, index) => (
                            <motion.div
                                key={member.name}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="group"
                            >
                                <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                                    <div className="relative overflow-hidden aspect-square">
                                        <img
                                            src={member.image}
                                            alt={member.name}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                                            <a
                                                href={member.linkedin}
                                                className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-indigo-600 hover:bg-indigo-600 hover:text-white transition-colors"
                                                aria-label="LinkedIn"
                                            >
                                                <Linkedin size={18} />
                                            </a>
                                            <a
                                                href={member.twitter}
                                                className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-indigo-600 hover:bg-indigo-600 hover:text-white transition-colors"
                                                aria-label="Twitter"
                                            >
                                                <Twitter size={18} />
                                            </a>
                                            <a
                                                href={`mailto:${member.email}`}
                                                className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-indigo-600 hover:bg-indigo-600 hover:text-white transition-colors"
                                                aria-label="Email"
                                            >
                                                <Mail size={18} />
                                            </a>
                                        </div>
                                    </div>

                                    <div className="p-6">
                                        <h3 className="font-heading font-bold text-xl text-gray-900 mb-1">
                                            {member.name}
                                        </h3>
                                        <p className="text-indigo-600 font-semibold text-sm mb-3">
                                            {member.role}
                                        </p>
                                        <p className="text-gray-600 text-sm leading-relaxed">
                                            {member.bio}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
            */}

            {/* Gallery Slider - Commented Out
            <GallerySlider />
            */}

            {/* CTA Section */}
            <section className="py-20 bg-dot-pattern">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="font-heading font-bold text-4xl md:text-5xl text-gray-900 mb-6">
                            Ready to work with us?
                        </h2>
                        <p className="text-xl text-gray-600 mb-8">
                            Let's create something amazing together
                        </p>
                        <Link to="/contact">
                            <button className="bg-indigo-600 text-white text-lg font-bold px-10 py-4 rounded-full shadow-[0_4px_14px_0_rgba(79,70,229,0.39)] hover:shadow-[0_6px_20px_rgba(79,70,229,0.23)] hover:bg-indigo-700 hover:-translate-y-0.5 transition-all">
                                Get in Touch
                            </button>
                        </Link>
                    </motion.div>
                </div>
            </section>
        </Layout>
    );
};

export default AboutPage;
