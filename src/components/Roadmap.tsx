import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const roadmapItems = [
    {
        id: 1,
        number: '01',
        title: 'Strategy',
        subtitle: 'Digital Foundation',
        tags: ['DIGITAL STRATEGY', 'CONTENT STRATEGY', 'WEB ACCESSIBILITY'],
        heading: 'It all starts with the right strategy.',
        description: 'We partner with you from the outset to plan and execute an online experience that engages your audience and drives action. Our strategic approach ensures every decision is data-driven and aligned with your business goals.',
        image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop'
    },
    {
        id: 2,
        number: '02',
        title: 'User Experience and Web Design',
        subtitle: 'Design Excellence',
        tags: ['UX / UI DESIGN', 'WEBSITE REDESIGN'],
        heading: 'Design is the perfect balance of form and function.',
        description: 'Our experienced design team delivers stunning websites that combine aesthetic appeal with user-focused design, making your digital presence not only beautiful but also intuitive and effective.',
        image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=300&fit=crop'
    },
    {
        id: 3,
        number: '03',
        title: 'Web Development',
        subtitle: 'Technical Excellence',
        tags: ['WORDPRESS', 'DRUPAL', 'PLATFORM MIGRATIONS', 'API INTEGRATIONS'],
        heading: 'Where performance, security, and editor experience come first.',
        description: 'Our team specializes in complex, custom WordPress and Drupal development. We craft flexible and secure websites that deliver top performance and make content management a joy for your editors.',
        image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop'
    },
    {
        id: 4,
        number: '04',
        title: 'Ongoing Support and Optimisation',
        subtitle: 'Continuous Care',
        tags: ['CARE PLANS', 'WEBSITE AUDITS', 'SECURITY UPDATES'],
        heading: 'Continuous improvement, security, and peace of mind.',
        description: 'Our support packages cover everything from technical assistance to security updates and web hosting. We keep your website secure, up-to-date, and running smoothly.',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop'
    }
];

const Roadmap: React.FC = () => {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="mb-16 text">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="font-heading font-bold text-5xl md:text-6xl text-gray-900 mb-6">
                            Your <span className="text-indigo-600">roadmap</span> to a successful <span className="text-indigo-600">digital project</span>
                        </h2>
                        <p className="text-xl text-gray-600 leading-relaxed max-w-3xl">
                            From strategy to ongoing support, we guide you through every step of your digital journey.
                        </p>
                    </motion.div>
                </div>

                {/* Roadmap Items */}
                <div className="space-y-16">
                    {roadmapItems.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group"
                        >
                            <div className="flex flex-col md:flex-row gap-10 pb-16 border-b border-gray-200 last:border-b-0">
                                {/* Image */}
                                <div className="md:w-[400px] flex-shrink-0">
                                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                        {/* Number Overlay */}
                                        <div className="absolute top-6 left-6 w-16 h-16 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center">
                                            <span className="text-2xl font-bold text-indigo-600">{item.number}</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="flex-1 flex flex-col">
                                    {/* Logo */}
                                    <div className="mb-6">
                                        <img src="/logo1.png" alt="Xodion" className="h-16 w-auto" />
                                    </div>

                                    {/* Title */}
                                    <h3 className="font-heading font-bold text-2xl text-indigo-600 mb-3 group-hover:text-indigo-700 transition-colors">
                                        {item.title}
                                    </h3>

                                    {/* Heading */}
                                    <h4 className="font-semibold text-lg text-gray-900 mb-3">
                                        {item.heading}
                                    </h4>

                                    {/* Description */}
                                    <p className="text-gray-700 leading-relaxed mb-6 flex-1">
                                        {item.description}
                                    </p>

                                    {/* Footer */}
                                    <div className="flex flex-wrap items-center gap-4">
                                        {/* Tags */}
                                        <div className="flex flex-wrap gap-2 flex-1">
                                            {item.tags.map((tag) => (
                                                <span
                                                    key={tag}
                                                    className="px-4 py-1.5 border border-gray-300 text-gray-700 rounded-full text-xs font-medium uppercase tracking-wide"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>

                                        {/* Arrow Link */}
                                        <a
                                            href="#"
                                            className="inline-flex items-center justify-center w-14 h-14 rounded-full border-2 border-gray-300 text-gray-700 hover:border-indigo-600 hover:text-indigo-600 hover:bg-indigo-50 transition-all"
                                            aria-label="Learn more"
                                        >
                                            <ArrowUpRight size={26} strokeWidth={2} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* CTA */}
                <div className="mt-16 text-center">
                    <a
                        href="#"
                        className="inline-flex items-center gap-2 text-indigo-600 font-semibold hover:text-indigo-700 transition-colors group"
                    >
                        See all our services
                        <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Roadmap;
