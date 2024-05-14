import React from 'react';
import '../styles/globals.css'; // Tailwind CSS 및 글로벌 스타일 적용
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';

const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <html lang="en">
            <head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>My Next.js App</title>
            </head>
            <body className="min-h-screen flex flex-col bg-gray-50">
                <Header />
                <div className="flex flex-1 pt-16">
                    <Sidebar />
                    <main className="flex-1 p-6 ml-64 mt-16">{children}</main>
                </div>
                <Footer />
            </body>
        </html>
    );
};

export default RootLayout;
