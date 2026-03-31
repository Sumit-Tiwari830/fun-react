import React from 'react'
import { Link } from 'react-router-dom'

export default function About() {
    return (
        <div className="relative min-h-screen bg-[#020617] text-white pt-32 pb-20 overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl">
                <div className="absolute top-[20%] right-[-10%] w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px]"></div>
                <div className="absolute bottom-0 left-[-10%] w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-[100px]"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid md:grid-cols-2 gap-16 items-center">

                    <div className="space-y-8">
                        <div className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-bold tracking-widest uppercase">
                            Our Mission
                        </div>

                        <h2 className="text-5xl md:text-6xl font-black leading-tight tracking-tighter">
                            Engineering the <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">Future</span> of Web
                        </h2>

                        <div className="space-y-4 text-slate-400 text-lg leading-relaxed">
                            <p>
                                OSPAT is built on the foundation of React 19, focusing on creating fast,
                                scalable, and highly interactive user interfaces that push the boundaries
                                of modern web standards.
                            </p>
                            <p>
                                Our component-based architecture ensures that every system we build is
                                modular, reusable, and optimized for maximum performance across all
                                devices and network conditions.
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-4 pt-4">
                            <Link
                                to="/"
                                className="px-8 py-3 rounded-2xl bg-blue-600 hover:bg-blue-500 text-white font-bold shadow-lg shadow-blue-500/20 transition-all active:scale-95"
                            >
                                Back to Dashboard
                            </Link>

                            <Link
                                to="/github"
                                className="px-8 py-3 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 text-white font-bold transition-all active:scale-95"
                            >
                                View Source
                            </Link>
                        </div>
                    </div>

                    <div className="relative group">
                        <div className="absolute -inset-4 bg-gradient-to-tr from-blue-600 to-cyan-400 rounded-[2rem] blur-2xl opacity-20 group-hover:opacity-40 transition duration-1000"></div>
                        <div className="relative p-2 bg-white/5 border border-white/10 rounded-[2rem] backdrop-blur-3xl shadow-2xl">
                            <img
                                className="rounded-[1.5rem] w-full object-cover aspect-square md:aspect-auto"
                                src="https://images.unsplash.com/photo-1555066931-4365d14bab8c"
                                alt="OSPAT Development Environment"
                            />
                            <div className="absolute bottom-6 left-6 right-6 p-6 bg-slate-900/90 backdrop-blur-md border border-white/10 rounded-2xl">
                                <p className="text-sm font-medium text-slate-300 italic">
                                    "Precision in every line of code, performance in every pixel."
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}