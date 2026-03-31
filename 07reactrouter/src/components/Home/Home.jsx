import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <div className="min-h-screen bg-[#020617] text-white overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl">
                <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] animate-pulse"></div>
                <div className="absolute bottom-[10%] right-[-5%] w-[400px] h-[400px] bg-orange-600/10 rounded-full blur-[100px]"></div>
            </div>

            <div className="relative z-10 mx-auto w-full max-w-7xl px-6 sm:px-16">

                {/* Hero Section */}
                <aside className="relative flex flex-col sm:flex-row items-center justify-between py-16 sm:py-32 gap-12">

                    {/* Left Side: Animated React Logo Group */}
                    <div className="relative w-full sm:w-1/2 flex justify-center sm:justify-start order-2 sm:order-1">
                        <div className="relative group">
                            {/* Glow Effect behind logo */}
                            <div className="absolute -inset-4 bg-blue-500/20 rounded-full blur-2xl group-hover:bg-blue-500/40 transition duration-1000"></div>

                            <img
                                className="relative w-64 sm:w-96 animate-[spin_20s_linear_infinite]"
                                src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
                                alt="React Logo"
                            />

                            {/* Floating Tech Badges */}
                            <div className="absolute -top-4 -right-4 bg-slate-900/80 backdrop-blur-md border border-white/10 p-3 rounded-2xl shadow-2xl animate-bounce">
                                <img className="w-8 h-8" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JS" />
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Content */}
                    <div className="w-full sm:w-1/2 text-center sm:text-right space-y-8 order-1 sm:order-2">
                        <div className="inline-block px-4 py-1.5 mb-4 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-bold tracking-widest uppercase">
                            Master Modern Web Dev
                        </div>

                        <h1 className="text-5xl sm:text-7xl font-black tracking-tighter leading-tight">
                            Learn <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">React</span>
                            <br />
                            & ReactDOM
                        </h1>

                        <p className="text-slate-400 text-lg sm:text-xl max-w-lg sm:ml-auto leading-relaxed">
                            Build lightning-fast, scalable user interfaces with the world's most popular JavaScript library.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center sm:justify-end pt-4">
                            <Link
                                className="px-8 py-4 bg-orange-600 hover:bg-orange-500 text-white font-bold rounded-2xl shadow-[0_10px_20px_rgba(234,88,12,0.3)] transition-all active:scale-95 flex items-center justify-center gap-2 group"
                                to="/"
                            >
                                Start Learning
                                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                            </Link>

                            <button className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold rounded-2xl transition-all">
                                Documentation
                            </button>
                        </div>
                    </div>
                </aside>

                {/* Features Section / Footer Branding */}
                <div className="border-t border-white/10 py-16">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center sm:text-left">
                        <div className="p-8 rounded-3xl bg-white/5 border border-white/5 hover:border-blue-500/30 transition-colors">
                            <h3 className="text-xl font-bold mb-2">Declarative</h3>
                            <p className="text-slate-400 text-sm">React makes it painless to create interactive UIs.</p>
                        </div>
                        <div className="p-8 rounded-3xl bg-white/5 border border-white/5 hover:border-blue-500/30 transition-colors">
                            <h3 className="text-xl font-bold mb-2">Component-Based</h3>
                            <p className="text-slate-400 text-sm">Build encapsulated components that manage their own state.</p>
                        </div>
                        <div className="p-8 rounded-3xl bg-white/5 border border-white/5 hover:border-blue-500/30 transition-colors">
                            <h3 className="text-xl font-bold mb-2">ReactDOM</h3>
                            <p className="text-slate-400 text-sm">Seamlessly render components into the browser DOM.</p>
                        </div>
                    </div>

                    <h2 className="text-center text-3xl sm:text-5xl mt-20 font-black opacity-20 tracking-tighter uppercase">
                        React + ReactDOM = Powerful UI 🚀
                    </h2>
                </div>
            </div>
        </div>
    )
}