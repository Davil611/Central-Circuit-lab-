/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function OhmsLawSimulation() {
  const [voltage, setVoltage] = useState(12);
  const [resistance, setResistance] = useState(10);
  const current = voltage / resistance;

  return (
    <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
      {/* Controls */}
      <div className="space-y-8">
        <div className="rounded-2xl bg-white p-6 shadow-sm dark:bg-slate-900 border border-slate-100 dark:border-slate-800">
          <h3 className="mb-6 text-xl font-bold">Circuit Parameters</h3>
          
          <div className="space-y-6">
            <div>
              <div className="flex justify-between mb-2">
                <label className="text-sm font-semibold">Voltage (V)</label>
                <span className="font-mono text-blue-600">{voltage.toFixed(1)}V</span>
              </div>
              <input 
                type="range" min="0" max="50" step="0.5" 
                value={voltage} 
                onChange={(e) => setVoltage(parseFloat(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
              />
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <label className="text-sm font-semibold">Resistance (Ω)</label>
                <span className="font-mono text-blue-600">{resistance.toFixed(1)}Ω</span>
              </div>
              <input 
                type="range" min="1" max="100" step="1" 
                value={resistance} 
                onChange={(e) => setResistance(parseFloat(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
              />
            </div>
          </div>
        </div>

        <div className="rounded-2xl bg-blue-600 p-6 text-white text-center shadow-lg shadow-blue-500/20">
          <p className="text-sm font-semibold uppercase tracking-wider opacity-80">Calculated Current (I)</p>
          <p className="text-5xl font-bold my-2 font-mono">{current.toFixed(3)}A</p>
          <p className="text-sm opacity-60">I = V / R</p>
        </div>
      </div>

      {/* Visualizer */}
      <div className="flex flex-col items-center justify-center rounded-2xl bg-slate-900 p-10 text-white min-h-[400px]">
        <div className="relative h-64 w-64">
          {/* Wire Ring */}
          <div className="absolute inset-0 rounded-full border-4 border-slate-700" />
          
          {/* Flowing Electrons */}
          {Array.from({ length: 12 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-3 w-3 rounded-full bg-yellow-400 shadow-[0_0_10px_rgba(250,204,21,0.8)]"
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: Math.max(0.2, 5 / current),
                repeat: Infinity,
                ease: "linear",
                delay: (i * 0.4) / current
              }}
              style={{
                top: '50%',
                left: '50%',
                marginTop: '-6px',
                marginLeft: '-6px',
                transformOrigin: '120px center',
              }}
            />
          ))}

          {/* Central Lamp/Resistor */}
          <motion.div 
            className="absolute inset-0 m-auto flex h-24 w-24 items-center justify-center rounded-full bg-slate-800 border-2 border-slate-700"
            animate={{
              boxShadow: `0 0 ${current * 10}px ${current * 2}px rgba(255, 255, 0, ${Math.min(1, current / 2)})`
            }}
          >
            <Zap className={current > 0.1 ? 'text-yellow-400' : 'text-slate-600'} size={40} />
          </motion.div>
        </div>
        
        <div className="mt-10 text-center">
          <h4 className="text-lg font-bold">Electron Flow Visualization</h4>
          <p className="text-sm text-slate-400 mt-2">Speed of electrons proportional to current magnitude.</p>
        </div>
      </div>
    </div>
  );
}

function Zap({ size, className }: { size: number, className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
    </svg>
  );
}
