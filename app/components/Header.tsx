import React from 'react';

const Header: React.FC = () => {
    return (
        <header className="bg-blue-600 text-white p-4 shadow-md fixed w-full top-0 z-50 flex items-center h-16">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-xl font-bold">Idea Storage</h1>
                <nav>
                    <ul className="flex space-x-4">
                        <li>
                            <a href="/" className="hover:text-gray-200">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="/about" className="hover:text-gray-200">
                                About
                            </a>
                        </li>
                        <li>
                            <a href="/contact" className="hover:text-gray-200">
                                Contact
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
