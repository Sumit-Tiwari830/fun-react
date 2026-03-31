import React from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()

    return (
        /* Added 'pt-40' to push the content down below the fixed header */
        <div className="min-h-screen bg-[#020617] flex items-start justify-center pt-40 pb-20 px-4">
            <div className="relative group max-w-md w-full">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-400 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>

                <div className="relative bg-slate-900 border border-white/10 rounded-3xl p-8 flex flex-col items-center text-center shadow-2xl">
                    <div className="relative mb-6">
                        <div className="absolute inset-0 bg-blue-500 rounded-2xl blur-xl opacity-20"></div>
                        <img
                            src={data.avatar_url}
                            alt="Github Profile"
                            className="relative w-40 h-40 rounded-2xl border-2 border-white/10 object-cover shadow-2xl"
                        />
                    </div>

                    <h2 className="text-3xl font-black text-white tracking-tighter mb-2">
                        {data.name || "Github User"}
                    </h2>

                    <p className="text-blue-400 font-bold text-sm uppercase tracking-widest mb-6">
                        @{data.login}
                    </p>

                    <div className="grid grid-cols-2 gap-4 w-full">
                        <div className="bg-white/5 border border-white/5 p-4 rounded-2xl">
                            <div className="text-2xl font-black text-white">{data.followers}</div>
                            <div className="text-[10px] text-slate-500 uppercase font-bold tracking-wider">Followers</div>
                        </div>
                        <div className="bg-white/5 border border-white/5 p-4 rounded-2xl">
                            <div className="text-2xl font-black text-white">{data.public_repos}</div>
                            <div className="text-[10px] text-slate-500 uppercase font-bold tracking-wider">Repositories</div>
                        </div>
                    </div>

                    <a
                        href={data.html_url}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-8 w-full py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-all active:scale-95 shadow-lg shadow-blue-500/20"
                    >
                        View Profile
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/Sumit-Tiwari830')
    if (!response.ok) throw new Error("Failed to fetch Github data")
    return response.json()
}