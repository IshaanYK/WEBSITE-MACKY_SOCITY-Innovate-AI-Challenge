import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Guests', path: '/guests' },
        { name: 'Team', path: '/team' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'glass py-4' : 'bg-transparent py-6'}`}>
            <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
                <Link to="/" className="cursor-pointer">
                    <span className="text-2xl font-bold tracking-tighter">
                        INNOVATE<span className="text-neon-blue">AI</span>
                    </span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex space-x-8 items-center">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            to={item.path}
                            className={`text-sm font-medium transition-colors cursor-pointer ${location.pathname === item.path ? 'text-neon-blue' : 'hover:text-neon-purple text-white'
                                }`}
                        >
                            {item.name}
                        </Link>
                    ))}
                    <Link
                        to="/contact"
                        className="px-5 py-2 rounded-full border border-neon-blue text-neon-blue hover:bg-neon-blue hover:text-black transition-all cursor-pointer font-medium"
                    >
                        Register Now
                    </Link>
                </div>

                {/* Mobile Nav Toggle */}
                <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Nav Menu */}
            {isOpen && (
                <div className="md:hidden glass absolute top-full left-0 w-full flex flex-col items-center py-6 space-y-4 shadow-2xl">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            to={item.path}
                            onClick={() => setIsOpen(false)}
                            className={`text-lg font-medium transition-colors cursor-pointer ${location.pathname === item.path ? 'text-neon-blue' : 'hover:text-neon-purple text-white'
                                }`}
                        >
                            {item.name}
                        </Link>
                    ))}
                    <Link
                        to="/contact"
                        onClick={() => setIsOpen(false)}
                        className="px-6 py-2 rounded-full bg-neon-blue text-black font-semibold mt-4"
                    >
                        Register Now
                    </Link>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
