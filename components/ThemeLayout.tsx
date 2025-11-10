import React, { useState, ReactNode } from 'react';

const Modal: React.FC<{ title: string; children: ReactNode; onClose: () => void }> = ({ title, children, onClose }) => {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center" onClick={onClose}>
            <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl max-h-[80vh] overflow-y-auto p-6 sm:p-8" onClick={e => e.stopPropagation()}>
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
                    <button onClick={onClose} className="text-gray-500 hover:text-gray-800">&times;</button>
                </div>
                <div className="text-gray-600 prose">{children}</div>
            </div>
        </div>
    );
};


const ThemeLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [modalContent, setModalContent] = useState<{ title: string; content: ReactNode } | null>(null);

    const openModal = (title: string, content: ReactNode) => {
        setModalContent({ title, content });
    };

    const closeModal = () => {
        setModalContent(null);
    };

    const navLinks = [
        { name: 'About', content: <p>This application is a powerful readability checker named Doodax, designed to provide a free, powerful tool for writers. Our mission is to help make all writing clear and bold. Built with React and love.</p> },
        { name: 'Contact', content: <p>For inquiries, please reach out to us at <a href="mailto:contact@example.com">contact@example.com</a>. We'd love to hear your feedback!</p> },
        { name: 'Guide', content: <p>Using the tool is simple: paste your text, get an instant readability score, and edit the highlighted sentences to improve clarity. Export your work when you're done.</p> },
        { name: 'Privacy Policy', content: <p>We respect your privacy. The text you analyze is processed in your browser and is never stored on our servers. We do not collect any personal data.</p> },
        { name: 'Terms of Service', content: <p>By using this service, you agree to not submit any content that is unlawful or malicious. This tool is for educational and professional purposes only.</p> },
        { name: 'DMCA', content: <p>If you believe your copyrighted work has been infringed upon, please contact our DMCA agent at <a href="mailto:dmca@example.com">dmca@example.com</a> with the required information.</p> },
    ];
    
    return (
        <div className="relative min-h-screen bg-gray-900 text-white font-sans overflow-x-hidden">
            <div className="absolute inset-0 z-0">
                <style>{`
                    @keyframes move-bg {
                        0% { background-position: 0% 50%; }
                        50% { background-position: 100% 50%; }
                        100% { background-position: 0% 50%; }
                    }
                    .cosmic-background {
                        background: linear-gradient(270deg, #9B51E0, #3498db, #e74c3c, #f1c40f, #9B51E0);
                        background-size: 1000% 1000%;
                        animation: move-bg 30s ease infinite;
                    }
                `}</style>
                <div className="cosmic-background h-full w-full"></div>
            </div>

            <div className="relative z-10 flex flex-col min-h-screen">
                <header className="bg-white/10 backdrop-blur-md shadow-lg sticky top-0 z-30">
                    <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex items-center justify-between h-16">
                            <div className="flex items-center">
                                <div className="flex-shrink-0">
                                    <span className="text-white text-2xl font-bold">Doodax</span>
                                </div>
                            </div>
                            <div className="hidden md:block">
                                <div className="ml-10 flex items-baseline space-x-4">
                                     {navLinks.map(link => (
                                        <button key={link.name} onClick={() => openModal(link.name, link.content)} className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                                            {link.name}
                                        </button>
                                    ))}
                                </div>
                            </div>
                            <div>
                                 <a href="#" className="bg-custom-purple text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-purple-800 transition">Try Editor Pro for free</a>
                            </div>
                        </div>
                    </nav>
                </header>

                <div className="flex-grow">
                    {children}
                </div>
                
                <footer className="bg-gray-800/50 backdrop-blur-md">
                    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-8">
                            <a href="https://github.com/hsinidev" target="_blank" rel="noopener noreferrer" className="text-lg font-semibold text-custom-gold hover:text-yellow-300">
                                Powered by HSINI MOHAMED
                            </a>
                        </div>
                        <div className="mt-8 border-t border-gray-700 pt-8 md:flex md:items-center md:justify-between">
                            <div className="flex space-x-6 md:order-2 justify-center">
                                 {navLinks.slice(1).map(link => (
                                    <button key={link.name} onClick={() => openModal(link.name, link.content)} className="text-gray-400 hover:text-gray-300 text-sm">
                                        {link.name}
                                    </button>
                                ))}
                            </div>
                            <p className="mt-8 text-base text-gray-400 md:mt-0 md:order-1 text-center">&copy; 2024 Doodax. All rights reserved.</p>
                        </div>
                    </div>
                </footer>
            </div>
            {modalContent && <Modal title={modalContent.title} onClose={closeModal}>{modalContent.content}</Modal>}
        </div>
    );
};

export default ThemeLayout;