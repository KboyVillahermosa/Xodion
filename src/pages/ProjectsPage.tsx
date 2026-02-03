import React from 'react';
import Layout from '../components/Layout';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const projects = [
    {
        id: 1,
        title: 'The George Institute',
        subtitle: 'for Global Health',
        description: 'The George Institute for Global Health partnered with Marumeo to transform its fragmented multi-site setup into a unified global platform. Over seven years and multiple project phases, we migrated more than 15,000 pages, streamlined complex data structures, and eventually consolidated five regional sites into one authoritative Drupal 10 platform. The result is a...',
        image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&h=300&fit=crop',
        liveUrl: '#',
        tags: ['HEALTH RESEARCH', 'NOT FOR PROFIT']
    },
    {
        id: 2,
        title: 'The Centre for Sex and Gender Equity in Health and Medicine',
        subtitle: 'for Global Health',
        description: 'A future-focused platform for the Centre for Sex and Gender Equity in Health and Medicine, built to drive systemic change. How sex and gender are considered in research, education, and clinical care. From a modern user-friendly back-end system to a beautifully designed and culturally empowered front-end, the site continues to grow.',
        image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400&h=300&fit=crop',
        liveUrl: '#',
        tags: ['HEALTH RESEARCH', 'NOT FOR PROFIT']
    },
    {
        id: 3,
        title: 'HeatNexus',
        subtitle: 'Global Heat Platform',
        description: 'A multi-year, multi-country charity platform that empowers HeatNexus to showcase global climate research and tackle the health impacts of extreme heat.',
        image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&h=300&fit=crop',
        liveUrl: '#',
        tags: ['HEALTH RESEARCH', 'NOT FOR PROFIT']
    },
    {
        id: 4,
        title: 'Clinical Trials Hub',
        subtitle: 'Health Translation',
        description: 'A straightforward, responsive site was reimagined into My Clinical Trial Partner, a free interactive tool that helps researchers plan, manage, and collaborate on clinical trials with clarity. Developed as part of a trial project, the hub combines user strategy, flexible tools, and high performance to support the future of clinical research.',
        image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&h=300&fit=crop',
        liveUrl: '#',
        tags: ['HEALTH RESEARCH', 'NOT FOR PROFIT']
    },
    {
        id: 5,
        title: 'BigasanHub',
        subtitle: 'Inventory Management System',
        description: 'A comprehensive inventory management system designed specifically for rice distribution businesses. BigasanHub streamlines stock tracking, bundle management, and sales operations with real-time analytics. The platform provides an intuitive interface for managing rice inventory, tracking bundles, and generating detailed reports for business insights.',
        image: '/bigasanhub.png',
        logo: '/logobigasanhub.png',
        liveUrl: '#',
        tags: ['INVENTORY', 'MANAGEMENT SYSTEM']
    },
    {
        id: 6,
        title: 'Jams Branded Collection',
        subtitle: 'Bundle Inventory System',
        description: 'An innovative inventory management solution for jams and preserves bundling operations. The system efficiently manages product bundles, tracks stock levels, and optimizes distribution workflows. Built with modern technologies to provide seamless inventory control and comprehensive reporting for jams collection management.',
        image: '/jams.jpg',
        logo: '/jamslogo.png',
        liveUrl: '#',
        tags: ['INVENTORY', 'E-COMMERCE']
    }
];

const ProjectsPage: React.FC = () => {
    return (
        <Layout>
            {/* Hero Section */}
            <section className="relative pt-32 pb-16 bg-white">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="max-w-3xl"
                    >
                        <h1 className="font-heading font-bold text-5xl md:text-6xl text-gray-900 mb-6">
                            Our Projects
                        </h1>
                        <p className="text-xl text-gray-600 leading-relaxed">
                            Explore our portfolio of successful digital solutions that have transformed
                            businesses and delivered exceptional results.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Projects List */}
            <section className="py-16 bg-white">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="space-y-12">
                        {projects.map((project, index) => (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="group"
                            >
                                <div className="flex flex-col md:flex-row gap-8 pb-12 border-b border-gray-200 last:border-b-0">
                                    {/* Image */}
                                    <div className="md:w-96 flex-shrink-0">
                                        <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
                                            <img
                                                src={project.image}
                                                alt={project.title}
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                            />
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="flex-1 flex flex-col">
                                        {/* Logo (if exists) */}
                                        {project.logo && (
                                            <div className="mb-4">
                                                <img src={project.logo} alt={`${project.title} logo`} className="h-12 w-auto" />
                                            </div>
                                        )}

                                        {/* Title */}
                                        <h3 className="font-heading font-bold text-3xl md:text-4xl text-gray-900 mb-4 group-hover:text-indigo-600 transition-colors">
                                            {project.title}
                                        </h3>

                                        {/* Description */}
                                        <p className="text-gray-600 leading-relaxed mb-6 flex-1 text-lg">
                                            {project.description}
                                        </p>

                                        {/* Footer */}
                                        <div className="flex flex-wrap items-center gap-4">
                                            {/* Tags */}
                                            <div className="flex flex-wrap gap-2 flex-1">
                                                {project.tags.map((tag) => (
                                                    <span
                                                        key={tag}
                                                        className="px-4 py-1.5 border border-gray-300 text-gray-700 rounded-full text-xs font-medium uppercase tracking-wide"
                                                    >
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                            <a
                                                href={project.liveUrl}
                                                className="inline-flex items-center justify-center w-12 h-12 rounded-full border-2 border-gray-300 text-gray-700 hover:border-indigo-600 hover:text-indigo-600 hover:bg-indigo-50 transition-all"
                                                aria-label="View project"
                                            >
                                                <ArrowUpRight size={24} strokeWidth={2} />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="font-heading font-bold text-4xl md:text-5xl text-gray-900 mb-6">
                            Have a project in mind?
                        </h2>
                        <p className="text-xl text-gray-600 mb-8">
                            Let's discuss how we can bring your vision to life
                        </p>
                        <button className="bg-indigo-600 text-white text-lg font-bold px-10 py-4 rounded-full hover:bg-indigo-700 hover:-translate-y-0.5 transition-all shadow-lg">
                            Start a Project
                        </button>
                    </motion.div>
                </div>
            </section>
        </Layout>
    );
};

export default ProjectsPage;
