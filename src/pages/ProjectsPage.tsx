import React from 'react';
import Layout from '../components/Layout';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

interface Project {
    id: number;
    title: string;
    subtitle: string;
    description: string;
    image: string;
    liveUrl: string;
    tags: string[];
    logo?: string;
}

const projects: Project[] = [
    {
        id: 1,
        title: 'Mamasusan BBQ',
        subtitle: 'Inventory Management System',
        description: 'A comprehensive inventory management system designed to streamline operations for Mamasusan BBQ. This system optimizes stock tracking, supply management, and provides real-time analytics to ensure efficient business workflows.',
        image: '/project1.png',
        logo: '/mamasusanlogo.jpg',
        liveUrl: '#',
        tags: ['INVENTORY', 'MANAGEMENT SYSTEM']
    },
    {
        id: 2,
        title: 'Shared Marketing MLM System',
        subtitle: 'Networking Platform',
        description: 'A robust multi-level marketing (MLM) platform built for shared marketing initiatives. The system features advanced networking tools, member hierarchy management, and precise commission tracking to empower growth and transparency.',
        image: '/project2.png',
        logo: '/sharedlogo.png',
        liveUrl: '#',
        tags: ['NETWORKING', 'MLM SYSTEM']
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
