import React from 'react';
import { motion } from 'framer-motion';

const strategyItems = [
    {
        id: '01',
        title: 'Strategic industry expertise',
        heading: 'We have specific industry experience.',
        description: 'With deep knowledge in sectors like health, research, education, not-for-profits, retail, and government, we develop tailored strategies that align with your specific goals and drive impactful results.'
    },
    {
        id: '02',
        title: 'Custom solutions built to grow',
        heading: 'Every project is unique, and so are our solutions.',
        description: 'We design and develop digital experiences that are perfectly aligned with your needs today and flexible enough to scale with your growth tomorrow.'
    },
    {
        id: '03',
        title: 'Performance and security',
        heading: 'We build websites that are fast, reliable, and secure.',
        description: 'With a focus on top-tier performance and robust security, your site delivers a seamless experience while staying protected from threats.'
    },
    {
        id: '04',
        title: 'Engineered for editor bliss',
        heading: 'We design websites with an intuitive system that editors love.',
        description: 'Easy to use and truly enjoyable, our platform empowers your team to update and maintain your site effortlessly.'
    },
    {
        id: '05',
        title: 'Long-Term partnership',
        heading: "We're here for the long run.",
        description: 'Our dedication to ongoing support means that after your site goes live, we continue to work with you to optimise, evolve, and ensure lasting success.'
    },
    {
        id: '06',
        title: 'Data-driven decisions',
        heading: 'We rely on data to drive every decision.',
        description: 'Our strategies are built on insights, ensuring your digital solutions are effective, aligned with your goals, and deliver measurable results.'
    }
];

const StrategicPartner: React.FC = () => {
    return (
        <section className="py-24 bg-white text-gray-900">
            <div className="max-w-7xl mx-auto px-6">

                {/* Header */}
                <div className="text-center max-w-4xl mx-auto mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-heading font-bold mb-6 tracking-tight"
                    >
                        We are your digital strategic <span className="text-indigo-600">partner</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-gray-500 text-lg md:text-xl leading-relaxed"
                    >
                        As your strategic partner, we dive deep into your goals, craft custom solutions, and stay with you every step of the way to ensure your digital presence is not only beautiful but impactful.
                    </motion.p>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-indigo-600 font-medium mt-6"
                    >
                        Together, we'll build your digital future.
                    </motion.p>
                </div>

                {/* List */}
                <div className="flex flex-col">
                    {strategyItems.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group border-t border-gray-100 py-12 md:py-16 hover:bg-gray-50/50 transition-colors duration-300 rounded-3xl px-4 md:px-8"
                        >
                            <div className="flex flex-col md:flex-row gap-8 md:gap-16">

                                {/* Left Side: Number & Title */}
                                <div className="md:w-5/12 flex items-baseline gap-6 md:gap-8">
                                    <span className="text-sm font-bold font-mono text-gray-400 group-hover:text-indigo-600 transition-colors duration-300">
                                        {item.id}
                                    </span>
                                    <h3 className="text-2xl md:text-3xl font-bold font-heading text-gray-900 group-hover:text-indigo-900 transition-colors duration-300">
                                        {item.title}
                                    </h3>
                                </div>

                                {/* Right Side: Description */}
                                <div className="md:w-7/12">
                                    <h4 className="text-lg font-bold text-gray-900 mb-3">
                                        {item.heading}
                                    </h4>
                                    <p className="text-gray-500 leading-relaxed text-base md:text-lg">
                                        {item.description}
                                    </p>
                                </div>

                            </div>
                        </motion.div>
                    ))}
                    <div className="border-t border-gray-100 mx-4 md:mx-8" />
                </div>

            </div>
        </section>
    );
};

export default StrategicPartner;
