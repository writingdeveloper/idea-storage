import React from 'react';

const Sidebar: React.FC = () => {
    return (
        <aside className="bg-gray-100 p-4 w-64 fixed top-16 h-full flex-shrink-0">
            <nav>
                <ul className="space-y-2">
                    <li>
                        <a href="/" className="block p-2 rounded hover:bg-gray-200">
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="/about" className="block p-2 rounded hover:bg-gray-200">
                            About
                        </a>
                    </li>
                    <li>
                        <a href="/contact" className="block p-2 rounded hover:bg-gray-200">
                            Contact
                        </a>
                    </li>
                </ul>
            </nav>
        </aside>
    );
};

export default Sidebar;
