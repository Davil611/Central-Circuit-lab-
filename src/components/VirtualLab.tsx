/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { SIMULATIONS } from '../constants';
import OhmsLawSimulation from './OhmsLawSimulation';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Activity, ShieldCheck, Zap } from 'lucide-react';

export default function VirtualLab() {
  const [activeSim, setActiveSim] = useState<string | null>(null);

  if (activeSim === 'ohm-law') {
    return (
      <div className="space-y-8">
        <button 
          onClick={() => setActiveSim(null)}
          className="text-sm font-semibold text-blue-600 hover:underline"
        >
          ← Back to Labs
        </button>
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold">Ohm's Law Master Lab</h2>
          <div className="flex items-center gap-2 rounded-full bg-emerald-100 px-4 py-1.5 text-xs font-bold text-emerald-600 dark:bg-emerald-900/30">
            <ShieldCheck size={14} /> LIVE SIMULATION
          </div>
        </div>
        <OhmsLawSimulation />
      </div>
    );
  }

  return (
    <div className="space-y-10">
      <div className="max-w-2xl">
        <h2 className="text-3xl font-bold tracking-tight">Virtual Laboratory</h2>
        <p className="mt-2 text-slate-500 dark:text-slate-400">Interactive 3D and 2D environments to test electrical theories safely.</p>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {SIMULATIONS.map((sim, i) => (
          <motion.div
            key={sim.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="group overflow-hidden rounded-[2rem] bg-white p-2 shadow-sm transition-all hover:shadow-md dark:bg-slate-900 border border-slate-200 dark:border-slate-800"
          >
            <div className="relative bg-slate-950 rounded-[1.8rem] h-56 overflow-hidden flex flex-col items-center justify-center p-8">
               <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-blue-600/20 to-transparent" />
               <Activity className="text-blue-500 mb-4 group-hover:scale-110 transition-transform relative z-10" size={42} />
               <h3 className="text-lg font-bold text-white relative z-10 tracking-tight">{sim.title}</h3>
               <p className="mt-2 text-center text-xs text-slate-400 leading-relaxed max-w-xs relative z-10">{sim.description}</p>
            </div>
            <div className="p-5">
              <button 
                onClick={() => setActiveSim(sim.id)}
                className="w-full rounded-xl bg-[#1E3A8A] py-3.5 font-bold text-white shadow-lg shadow-blue-900/10 active:scale-95 transition-transform text-sm"
              >
                Launch Simulation
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
