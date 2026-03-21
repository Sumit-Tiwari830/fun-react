import React, { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`fixed z-50 top-0 w-full transition-all duration-300 px-4 lg:px-12 ${isScrolled ? 'pt-2' : 'pt-6'}`}>
            <nav className={`mx-auto max-w-screen-xl transition-all duration-500 border border-white/10 shadow-2xl rounded-[24px] px-6 py-3 ${isScrolled
                    ? 'backdrop-blur-xl bg-slate-900/80 scale-[0.98]'
                    : 'backdrop-blur-md bg-white/5 shadow-none'
                }`}>
                <div className="flex flex-wrap justify-between items-center">
                    <Link to="/" className="flex items-center group">
                        <div className="relative w-11 h-11 flex items-center justify-center">
                            <div className="absolute inset-0 bg-blue-600 rounded-xl blur-md opacity-40 group-hover:opacity-80 transition-opacity"></div>
                            <svg viewBox="0 0 100 100" className="relative w-full h-full text-white fill-current drop-shadow-lg transform group-hover:scale-110 transition-transform duration-500">
                                <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="8" className="opacity-30" />
                                <path d="M50 15 A35 35 0 0 1 85 50 L70 50 A20 20 0 0 0 50 30 Z" fill="currentColor" className="animate-pulse" />
                                <rect x="42" y="42" width="16" height="16" rx="4" />
                            </svg>
                        </div>
                        <div className="ml-4 flex flex-col">
                            <span className="text-2xl font-black text-white tracking-tighter leading-none">OSPAT<span className="text-blue-500">.</span></span>
                            <span className="text-[9px] text-slate-400 font-bold tracking-[0.2em] uppercase">Innovative Systems</span>
                        </div>
                    </Link>

                    <div className="hidden lg:flex items-center space-x-1">
                        {[
                            { name: 'Home', path: '/' },
                            { name: 'About', path: '/about' },
                            { name: 'Contact', path: '/contact' },
                            { name: 'Github', path: '/github' },
                        ].map((link) => (
                            <NavLink
                                key={link.name}
                                to={link.path}
                                className={({ isActive }) =>
                                    `px-5 py-2 rounded-xl text-sm font-semibold transition-all duration-300 ${isActive
                                        ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30'
                                        : 'text-slate-300 hover:bg-white/10 hover:text-white'
                                    }`
                                }
                            >
                                {link.name}
                            </NavLink>
                        ))}
                    </div>

                    <div className="flex items-center gap-4">
                        <Link to="/login" className="hidden sm:block text-slate-300 hover:text-white font-bold text-sm transition-colors">Sign In</Link>
                        <Link to="/deploy" className="group relative inline-flex items-center justify-center px-6 py-2.5 font-bold text-white bg-slate-800 rounded-xl border border-white/10 hover:bg-slate-700 active:scale-95 transition-all">
                            <span>Deploy Now</span>
                        </Link>
                    </div>
                </div>
            </nav>
        </header>
    );
}