import React from 'react'

export default function Contact() {
    return (
        <div className="relative min-h-screen bg-[#020617] text-white pt-32 pb-20 overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl">
                <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] animate-pulse"></div>
            </div>

            <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12">
                <div className="text-center mb-16">
                    <h1 className="text-5xl sm:text-6xl font-black tracking-tighter mb-4">
                        Get in <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">Touch</span>
                    </h1>
                    <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                        Have a question about OSPAT systems? We're here to help you scale your next big project.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <div className="space-y-6">
                        <div className="p-8 bg-white/5 border border-white/10 rounded-3xl hover:border-blue-500/30 transition-all group">
                            <h3 className="text-blue-500 font-bold uppercase tracking-widest text-xs mb-4">Email Us</h3>
                            <p className="text-xl font-bold">kiransumit2232@gmail.com</p>
                        </div>

                        <div className="p-8 bg-white/5 border border-white/10 rounded-3xl hover:border-blue-500/30 transition-all group">
                            <h3 className="text-blue-500 font-bold uppercase tracking-widest text-xs mb-4">Call Us</h3>
                            <p className="text-xl font-bold">+91 9589045802</p>
                        </div>

                        <div className="p-8 bg-white/5 border border-white/10 rounded-3xl hover:border-blue-500/30 transition-all group">
                            <h3 className="text-blue-500 font-bold uppercase tracking-widest text-xs mb-4">Visit Us</h3>
                            <p className="text-xl font-bold leading-relaxed">
                                122, Arera Colony, E-Sector<br />
                                Bhopal, Madhya Pradesh 462016<br />
                                India
                            </p>
                        </div>
                    </div>

                    <div className="bg-slate-900/50 backdrop-blur-xl border border-white/10 p-8 rounded-[32px] shadow-2xl">
                        <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                            <div>
                                <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2 ml-1">Full Name</label>
                                <input type="text" placeholder="John Doe" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all" />
                            </div>
                            <div>
                                <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2 ml-1">Email Address</label>
                                <input type="email" placeholder="name@company.com" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all" />
                            </div>
                            <div>
                                <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2 ml-1">Message</label>
                                <textarea rows="4" placeholder="How can we help?" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all resize-none"></textarea>
                            </div>
                            <button className="w-full py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-2xl shadow-lg shadow-blue-500/20 transition-all active:scale-95">
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}