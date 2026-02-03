import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import ChatbotAssistant from './ChatbotAssistant';

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow">
                {children}
            </main>
            <Footer />
            <ChatbotAssistant />
        </div>
    );
};

export default Layout;
