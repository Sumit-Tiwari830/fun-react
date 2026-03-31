// import { useState } from 'react'
// import useCurrencyInfo from './hooks/useCurrencyInfo'
// import InputBox from './components/InputBox'

// function App() {
//   const [amount, setAmount] = useState(0)
//   const [from, setFrom] = useState('usd')
//   const [to, setTo] = useState('inr')
//   const [convertedAmount, setConvertedAmount] = useState(0)
//   const [animate, setAnimate] = useState(false)

//   const currencyInfo = useCurrencyInfo(from)
//   const options = Object.keys(currencyInfo)

//   const swap = () => {
//     setAnimate(true)
//     setFrom(to)
//     setTo(from)
//     setConvertedAmount(amount)
//     setAmount(convertedAmount)
//     setTimeout(() => setAnimate(false), 500)
//   }

//   const convert = () => {
//     setConvertedAmount(amount * currencyInfo[to])
//   }

//   return (
//     <div className="w-full h-screen flex flex-col justify-center items-center bg-[#020617] relative overflow-hidden font-sans">
//       <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] animate-pulse"></div>
//       <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-emerald-600/10 rounded-full blur-[120px]"></div>

//       <div
//         className="absolute inset-0 opacity-40 bg-cover bg-center"
//         style={{ backgroundImage: `url('https://images.pexels.com/photos/4497591/pexels-photo-4497591.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')` }}
//       ></div>

//       <div className="relative z-10 w-full max-w-[500px] px-6">
//         <div className="flex justify-between items-center mb-10">
//           <div className="flex items-center gap-2">
//             <div className="w-10 h-10 bg-gradient-to-tr from-blue-600 to-cyan-400 rounded-xl rotate-12 flex items-center justify-center shadow-lg shadow-blue-500/20">
//               <span className="text-white font-black text-xl -rotate-12">$</span>
//             </div>
//             <h1 className="text-2xl font-bold text-white tracking-tight">Vault<span className="text-blue-400">Flow</span></h1>
//           </div>
//           <div className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] text-emerald-400 font-bold tracking-widest uppercase">
//             ● Live Market
//           </div>
//         </div>

//         <div className="group relative">
//           <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-[32px] blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>

//           <div className="relative border border-white/20 rounded-[30px] backdrop-blur-3xl bg-slate-900/60 p-1 shadow-2xl">
//             <div className="bg-slate-900/40 rounded-[28px] p-6 pb-8">
//               <form onSubmit={(e) => { e.preventDefault(); convert(); }}>
//                 <div className="mb-2">
//                   <InputBox
//                     label="You Send"
//                     amount={amount}
//                     currencyOptions={options}
//                     onCurrencyChange={(currency) => setFrom(currency)}
//                     onAmountChange={(amount) => setAmount(amount)}
//                     selectedCurrency={from}
//                   />
//                 </div>

//                 <div className="relative h-4 flex justify-center items-center">
//                   <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
//                   <button
//                     type="button"
//                     onClick={swap}
//                     className={`absolute z-30 w-12 h-12 bg-[#0f172a] border border-white/20 rounded-2xl flex items-center justify-center shadow-2xl transition-all duration-500 hover:border-blue-500 group/btn ${animate ? 'rotate-180 scale-110' : ''}`}
//                   >
//                     <svg className="w-6 h-6 text-blue-400 group-hover/btn:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M7 16V4M7 4L3 8M7 4L11 8M17 8v12M17 20l4-4M17 20l-4-4" />
//                     </svg>
//                   </button>
//                 </div>

//                 <div className="mt-2 mb-8">
//                   <InputBox
//                     label="You Receive"
//                     currencyOptions={options}
//                     amount={convertedAmount}
//                     onCurrencyChange={(currency) => setTo(currency)}
//                     selectedCurrency={to}
//                     amountDisabled
//                   />
//                 </div>

//                 <button
//                   type="submit"
//                   className="w-full py-5 bg-gradient-to-r from-blue-600 to-blue-500 hover:to-blue-400 text-white rounded-2xl font-bold text-lg shadow-[0_20px_40px_-10px_rgba(37,99,235,0.5)] transition-all active:scale-[0.96] flex items-center justify-center gap-3 border-t border-white/20"
//                 >
//                   Confirm Exchange
//                   <svg className="w-5 h-5 opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
//                 </button>
//               </form>
//             </div>
//           </div>
//         </div>

//         <div className="mt-8 flex justify-between items-center px-4">
//           <div className="text-slate-400 text-xs">
//             1 {from.toUpperCase()} = <span className="text-white font-mono">{currencyInfo[to]?.toFixed(4)}</span> {to.toUpperCase()}
//           </div>
//           <div className="flex -space-x-2">
//             {[1, 2, 3].map((i) => (
//               <div key={i} className="w-6 h-6 rounded-full border-2 border-slate-900 bg-slate-800 flex items-center justify-center text-[8px] text-white font-bold">U{i}</div>
//             ))}
//             <div className="pl-4 text-[10px] text-slate-500 font-medium">+12k Users</div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default App
import { useState } from 'react'
import './App.css'
import useCurrencyInfo from './hooks/useCurrencyInfo'
import InputBox from './components/InputBox'

function App() {
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState('usd')
  const [to, setTo] = useState('inr')
  const [convertedAmount, setConvertedAmount] = useState(0)

  const currencyInfo = useCurrencyInfo(from)
  const options = Object.keys(currencyInfo)

  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to])
  }

  return (
    <div className='w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat'
      style={{ backgroundImage: `url(https://images.pexels.com/photos/4497591/pexels-photo-4497591.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)` }}
    >
      <div className='w-full'>
        <div className='w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30'>
          <form onSubmit={(e) => {
            e.preventDefault()
            convert()
          }}>
            <div className='w-full mb-1'>
              <InputBox
                label="from"
                amount={amount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setFrom(currency)}
                onAmountChange={(amount) => setAmount(amount)}
                selectedCurrency={from}
              />
            </div>

            <div className='relative w-full h-0.5'>
              <button
                className='absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5'
                onClick={swap}
              >Swap</button>
            </div>

            <div className='w-full mb-1'>
              <InputBox
                label="to"
                currencyOptions={options}
                amount={convertedAmount}
                onCurrencyChange={(currency) => setTo(currency)}
                selectedCurrency={to}
                amountDisabled
              />
            </div>

            <button
              type='submit'
              className='w-full bg-blue-600 text-white px-4 py-3 rounded-lg'
            >
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default App