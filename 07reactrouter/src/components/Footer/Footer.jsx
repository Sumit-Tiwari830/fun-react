import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <footer className="bg-[#020617] border-t border-white/5 pt-16 pb-8">
            <div className="mx-auto w-full max-w-screen-xl px-6 lg:px-12">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12">

                    {/* BRAND SECTION */}
                    <div className="md:col-span-5 space-y-6">
                        <Link to="/" className="flex items-center group">
                            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center shadow-lg group-hover:rotate-12 transition-transform">
                                <span className="text-white font-bold text-xl">O</span>
                            </div>
                            <span className="ml-3 text-2xl font-black text-white tracking-tighter">
                                OSPAT<span className="text-blue-500">.</span>
                            </span>
                        </Link>
                        <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
                            Empowering the next generation of modern interfaces with OSPAT systems. Fast, secure, and infinitely scalable.
                        </p>
                        <div className="flex gap-4">
                            {/* Social Icons with Glass Effect */}
                            {['github', 'discord', 'twitter'].map((platform) => (
                                <a
                                    key={platform}
                                    href={`https://${platform}.com`}
                                    className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-blue-600 hover:border-blue-500 transition-all duration-300 group"
                                >
                                    <span className="sr-only">{platform}</span>
                                    {/* Simplified Icon Placeholder */}
                                    <div className="w-5 h-5 bg-slate-400 group-hover:bg-white transition-colors rounded-sm" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* LINKS GRID */}
                    <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
                        <div>
                            <h2 className="mb-6 text-xs font-bold text-white uppercase tracking-widest">Resources</h2>
                            <ul className="text-slate-400 font-medium space-y-4">
                                <li><Link to="/" className="hover:text-blue-500 transition-colors">Documentation</Link></li>
                                <li><Link to="/about" className="hover:text-blue-500 transition-colors">API Status</Link></li>
                                <li><Link to="/" className="hover:text-blue-500 transition-colors">Open Source</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-xs font-bold text-white uppercase tracking-widest">Company</h2>
                            <ul className="text-slate-400 font-medium space-y-4">
                                <li><a href="https://github.com/Sumit-Tiwari830" className="hover:text-blue-500 transition-colors" target="_blank" rel="noreferrer">GitHub</a></li>
                                <li><Link to="/" className="hover:text-blue-500 transition-colors">Discord</Link></li>
                                <li><Link to="/" className="hover:text-blue-500 transition-colors">Careers</Link></li>
                            </ul>
                        </div>
                        <div className="col-span-2 sm:col-span-1">
                            <h2 className="mb-6 text-xs font-bold text-white uppercase tracking-widest">Legal</h2>
                            <ul className="text-slate-400 font-medium space-y-4">
                                <li><Link to="#" className="hover:text-blue-500 transition-colors">Privacy Policy</Link></li>
                                <li><Link to="#" className="hover:text-blue-500 transition-colors">Terms</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* BOTTOM BAR */}
                <div className="mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4">
                    <span className="text-xs text-slate-500 font-medium">
                        © 2026 <span className="text-slate-300">OSPAT</span>. Built by
                        <a href="https://github.com/Sumit-Tiwari830" className="ml-1 text-blue-500 hover:underline">Sumit Tiwari</a>
                    </span>
                    <div className="flex items-center gap-2 text-[10px] text-slate-500 font-bold uppercase tracking-tighter">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                        All Systems Operational
                    </div>
                </div>
            </div>
        </footer>
    );
}