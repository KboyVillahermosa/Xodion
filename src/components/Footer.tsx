import React from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
    return (
        <footer className="relative bg-dot-pattern border-t border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
                    {/* Company Info */}
                    <div className="space-y-4">
                        <img src="/logo.png" alt="Limehills" className="h-10 w-auto" />
                        <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                            Creating human-focused digital experiences that drive results for forward-thinking organizations.
                        </p>
                        <div className="flex gap-3 pt-2">
                            <a
                                href="#"
                                className="w-10 h-10 rounded-full bg-indigo-100 hover:bg-indigo-600 text-indigo-600 hover:text-white flex items-center justify-center transition-all duration-300 hover:scale-110"
                                aria-label="Facebook"
                            >
                                <Facebook size={18} />
                            </a>
                            <a
                                href="#"
                                className="w-10 h-10 rounded-full bg-indigo-100 hover:bg-indigo-600 text-indigo-600 hover:text-white flex items-center justify-center transition-all duration-300 hover:scale-110"
                                aria-label="Twitter"
                            >
                                <Twitter size={18} />
                            </a>
                            <a
                                href="#"
                                className="w-10 h-10 rounded-full bg-indigo-100 hover:bg-indigo-600 text-indigo-600 hover:text-white flex items-center justify-center transition-all duration-300 hover:scale-110"
                                aria-label="LinkedIn"
                            >
                                <Linkedin size={18} />
                            </a>
                            <a
                                href="#"
                                className="w-10 h-10 rounded-full bg-indigo-100 hover:bg-indigo-600 text-indigo-600 hover:text-white flex items-center justify-center transition-all duration-300 hover:scale-110"
                                aria-label="Instagram"
                            >
                                <Instagram size={18} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-heading font-bold text-base sm:text-lg text-gray-900 mb-4 sm:mb-6">Quick Links</h4>
                        <ul className="space-y-2 sm:space-y-3">
                            {['About Us', 'Services', 'Portfolio', 'Roadmap', 'Contact'].map((link) => (
                                <li key={link}>
                                    <a
                                        href={`#${link.toLowerCase().replace(' ', '-')}`}
                                        className="text-sm sm:text-base text-gray-600 hover:text-indigo-600 transition-colors duration-200 inline-block hover:translate-x-1 transform"
                                    >
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="font-heading font-bold text-base sm:text-lg text-gray-900 mb-4 sm:mb-6">Services</h4>
                        <ul className="space-y-2 sm:space-y-3">
                            {['Web Development', 'WordPress', 'Drupal', 'Accessibility', 'Performance'].map((service) => (
                                <li key={service}>
                                    <a
                                        href="#services"
                                        className="text-sm sm:text-base text-gray-600 hover:text-indigo-600 transition-colors duration-200 inline-block hover:translate-x-1 transform"
                                    >
                                        {service}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="font-heading font-bold text-base sm:text-lg text-gray-900 mb-4 sm:mb-6">Contact Us</h4>
                        <ul className="space-y-3 sm:space-y-4">
                            <li className="flex items-start gap-3 text-gray-600 text-sm sm:text-base">
                                <Mail size={20} className="text-indigo-600 mt-0.5 flex-shrink-0" />
                                <a href="mailto:support@limehills.tech" className="hover:text-indigo-600 transition-colors break-all">
                                    support@limehills.tech
                                </a>
                            </li>
                            <li className="flex items-start gap-3 text-gray-600 text-sm sm:text-base">
                                <Phone size={20} className="text-indigo-600 mt-0.5 flex-shrink-0" />
                                <a href="tel:+1234567890" className="hover:text-indigo-600 transition-colors">
                                    +63967176633
                                </a>
                            </li>
                            <li className="flex items-start gap-3 text-gray-600 text-sm sm:text-base">
                                <MapPin size={20} className="text-indigo-600 mt-0.5 flex-shrink-0" />
                                <span>
                                    City Time Square<br />
                                    Mandaue City, Cebu 6000
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-200">
                    <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
                        <p className="text-gray-600 text-xs sm:text-sm">
                            © {new Date().getFullYear()} LimeHills. All rights reserved.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
                            <a href="#privacy" className="text-gray-600 hover:text-indigo-600 text-xs sm:text-sm transition-colors">
                                Privacy Policy
                            </a>
                            <a href="#terms" className="text-gray-600 hover:text-indigo-600 text-xs sm:text-sm transition-colors">
                                Terms of Service
                            </a>
                            <a href="#cookies" className="text-gray-600 hover:text-indigo-600 text-xs sm:text-sm transition-colors">
                                Cookie Policy
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
