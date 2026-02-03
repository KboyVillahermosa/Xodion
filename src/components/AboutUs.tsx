import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const AboutUs: React.FC = () => {
    return (
        <section className="py-24 bg-gray-50 overflow-hidden">
            <div className="w-full">
                <div className="grid lg:grid-cols-2 gap-0 items-center">

                    {/* Left Side - Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative w-full"
                    >
                        <div className="relative overflow-hidden" style={{
                            clipPath: 'polygon(0 0, 85% 0, 100% 50%, 85% 100%, 0 100%)'
                        }}>
                            <img
                                src="/s3.jpg"
                                alt="Team collaboration"
                                className="w-full h-[600px] object-cover"
                            />


                        </div>
                        <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-[#00B4D8] rounded-[2rem] transform rotate-12 z-10 shadow-lg mix-blend-multiply opacity-90"></div>
                    </motion.div>

                    {/* Right Side - Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="flex flex-col justify-center px-6 lg:px-20 xl:px-32 py-12 lg:py-0 relative"
                    >
                        {/* Small Header */}
                        <div className="flex items-center gap-2 mb-4">
                            <span className="text-xs font-bold tracking-widest text-gray-900 uppercase">
                                Above all, we care
                            </span>
                            <Heart className="w-3 h-3 text-pink-500 fill-pink-500" />
                        </div>

                        {/* Main Heading */}
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-gray-900 mb-6 leading-tight">
                            Large enough for big projects, small enough to provide personalised support
                        </h2>

                        {/* Description Paragraphs */}
                        <div className="space-y-4 mb-8">
                            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                                At Limehills, we pride ourselves on our ability to translate your organisation's strategy into an engaging digital platform that not only captures attention but also converts your target audience into loyal customers.
                            </p>
                            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                                We're small enough to provide personalised care and attention to your project, yet our team boasts extensive experience and expertise, ensuring that we deliver top-notch results every time. With us, you can trust that your vision will be brought to life with precision and passion.
                            </p>
                        </div>

                        {/* CTA Button */}
                        <div>
                            <a
                                href="#"
                                className="inline-block px-6 py-3 border-2 border-indigo-600 text-indigo-600 font-bold rounded-full hover:bg-indigo-600 hover:text-white transition-all duration-300 text-xs md:text-sm"
                            >
                                Learn more about us
                            </a>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default AboutUs;
