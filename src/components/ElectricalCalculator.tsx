/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calculator as CalcIcon } from 'lucide-react';

export default function ElectricalCalculator() {
  const [v, setV] = useState<string>('');
  const [i, setI] = useState<string>('');
  const [r, setR] = useState<string>('');
  const [p, setP] = useState<string>('');

  const calculate = (type: 'v' | 'i' | 'r' | 'p') => {
    const valV = parseFloat(v);
    const valI = parseFloat(i);
    const valR = parseFloat(r);
    const valP = parseFloat(p);

    if (type === 'v') {
      if (valI && valR) setV((valI * valR).toFixed(2));
      else if (valP && valI) setV((valP / valI).toFixed(2));
    } else if (type === 'i') {
      if (valV && valR) setI((valV / valR).toFixed(2));
      else if (valP && valV) setI((valP / valV).toFixed(2));
    } else if (type === 'r') {
      if (valV && valI) setR((valV / valI).toFixed(2));
    } else if (type === 'p') {
      if (valV && valI) setP((valV * valI).toFixed(2));
    }
  };

  const clear = () => {
    setV(''); setI(''); setR(''); setP('');
  };

  return (
    <div className="max-w-2xl mx-auto space-y-10">
      <div className="text-center">
        <h2 className="text-3xl font-extrabold tracking-tight">Engineering Calculator</h2>
        <p className="mt-2 text-slate-500">Quickly solve Voltage, Current, Resistance, and Power problems.</p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div className="space-y-4 rounded-2xl bg-white p-8 shadow-sm dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
          <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Voltage (Volts)</label>
          <input 
            type="number" value={v} onChange={(e) => setV(e.target.value)}
            className="w-full bg-slate-50 p-4 rounded-xl text-lg font-mono focus:ring-1 focus:ring-blue-300 dark:bg-slate-800 border-none outline-none"
            placeholder="0.00"
          />
          <button onClick={() => calculate('v')} className="w-full rounded-xl bg-[#1E3A8A] py-3.5 font-bold text-white shadow-lg shadow-blue-900/10 active:scale-95 transition-transform text-sm">Calculate V</button>
        </div>

        <div className="space-y-4 rounded-2xl bg-white p-8 shadow-sm dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
          <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Current (Amps)</label>
          <input 
            type="number" value={i} onChange={(e) => setI(e.target.value)}
            className="w-full bg-slate-50 p-4 rounded-xl text-lg font-mono focus:ring-1 focus:ring-blue-300 dark:bg-slate-800 border-none outline-none"
            placeholder="0.00"
          />
          <button onClick={() => calculate('i')} className="w-full rounded-xl bg-[#1E3A8A] py-3.5 font-bold text-white shadow-lg shadow-blue-900/10 active:scale-95 transition-transform text-sm">Calculate I</button>
        </div>

        <div className="space-y-4 rounded-2xl bg-white p-8 shadow-sm dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
          <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Resistance (Ohms)</label>
          <input 
            type="number" value={r} onChange={(e) => setR(e.target.value)}
            className="w-full bg-slate-50 p-4 rounded-xl text-lg font-mono focus:ring-1 focus:ring-blue-300 dark:bg-slate-800 border-none outline-none"
            placeholder="0.00"
          />
          <button onClick={() => calculate('r')} className="w-full rounded-xl bg-[#1E3A8A] py-3.5 font-bold text-white shadow-lg shadow-blue-900/10 active:scale-95 transition-transform text-sm">Calculate R</button>
        </div>

        <div className="space-y-4 rounded-2xl bg-white p-8 shadow-sm dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
          <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Power (Watts)</label>
          <input 
            type="number" value={p} onChange={(e) => setP(e.target.value)}
            className="w-full bg-slate-50 p-4 rounded-xl text-lg font-mono focus:ring-1 focus:ring-blue-300 dark:bg-slate-800 border-none outline-none"
            placeholder="0.00"
          />
          <button onClick={() => calculate('p')} className="w-full rounded-xl bg-[#1E3A8A] py-3.5 font-bold text-white shadow-lg shadow-blue-900/10 active:scale-95 transition-transform text-sm">Calculate P</button>
        </div>
      </div>

      <div className="flex justify-center">
        <button 
          onClick={clear}
          className="rounded-full bg-slate-900 px-10 py-4 font-bold text-white transition-all hover:bg-slate-800 active:scale-95"
        >
          Reset All Fields
        </button>
      </div>
    </div>
  );
}
