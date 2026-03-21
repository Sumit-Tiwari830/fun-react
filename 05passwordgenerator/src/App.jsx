import { useState, useCallback, useEffect, useRef } from 'react'

function App() {
  const [length, setLength] = useState(12)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState('')
  const [copied, setCopied] = useState(false)

  const passwordRef = useRef(null)

  const generatePassword = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*()_+"

    for (let i = 0; i < length; i++) {
      const charIndex = Math.floor(Math.random() * str.length)
      pass += str.charAt(charIndex)
    }

    setPassword(pass)
    setCopied(false)
  }, [length, numberAllowed, charAllowed])

  const copyPasswordToClipboard = () => {
    window.navigator.clipboard.writeText(password)
    passwordRef.current?.select()
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  useEffect(() => {
    generatePassword()
  }, [length, numberAllowed, charAllowed, generatePassword])

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950 px-4">
      <div className="w-full max-w-lg bg-slate-900 border border-slate-800 shadow-2xl rounded-2xl p-8 transition-all hover:border-blue-500/50">

        <h1 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
          Password Generator
        </h1>

        <div className="relative flex items-center bg-slate-800 rounded-xl overflow-hidden mb-8 border border-slate-700">
          <input
            type="text"
            value={password}
            className="w-full py-4 px-6 bg-transparent text-emerald-400 text-xl font-mono outline-none tracking-wider"
            placeholder="Generating..."
            readOnly
            ref={passwordRef}
          />
          <button
            onClick={copyPasswordToClipboard}
            className={`px-6 py-4 font-semibold transition-all duration-300 shrink-0 ${copied
              ? 'bg-emerald-500 text-white'
              : 'bg-blue-600 hover:bg-blue-500 text-white'
              }`}
          >
            {copied ? 'Copied!' : 'Copy'}
          </button>
        </div>

        <div className="space-y-6">

          <div className="flex flex-col gap-3">
            <div className="flex justify-between items-center">
              <label className="text-slate-300 font-medium">Password Length</label>
              <span className="bg-slate-800 text-blue-400 px-3 py-1 rounded-md font-mono border border-slate-700">
                {length}
              </span>
            </div>
            <input
              type="range"
              min={6}
              max={50}
              value={length}
              className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
              onChange={(e) => setLength(Number(e.target.value))}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <label className="flex items-center gap-3 p-3 bg-slate-800/50 rounded-xl border border-slate-700 cursor-pointer hover:bg-slate-800 transition-colors">
              <input
                type="checkbox"
                checked={numberAllowed}
                className="w-5 h-5 rounded border-slate-600 text-blue-500 focus:ring-blue-500 bg-slate-700"
                onChange={() => setNumberAllowed((prev) => !prev)}
              />
              <span className="text-slate-300">Numbers</span>
            </label>

            <label className="flex items-center gap-3 p-3 bg-slate-800/50 rounded-xl border border-slate-700 cursor-pointer hover:bg-slate-800 transition-colors">
              <input
                type="checkbox"
                checked={charAllowed}
                className="w-5 h-5 rounded border-slate-600 text-blue-500 focus:ring-blue-500 bg-slate-700"
                onChange={() => setCharAllowed((prev) => !prev)}
              />
              <span className="text-slate-300">Symbols</span>
            </label>
          </div>

          <button
            onClick={generatePassword}
            className="w-full py-3 mt-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-xl border border-slate-700 font-medium transition-all active:scale-[0.98]"
          >
            Regenerate New Password
          </button>

        </div>
      </div>
    </div>
  )
}

export default App