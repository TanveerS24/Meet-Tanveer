import React from 'react'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-950 text-white p-6">
      <div className="max-w-xl text-center space-y-6">
        <div className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
          Clean Slate Ready
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
          Project Reset Successfully
        </h1>
        <p className="text-slate-400 text-lg leading-relaxed">
          The project structure has been cleared and reset with a clean React + Vite foundation. What would you like to build next?
        </p>
      </div>
    </div>
  )
}
