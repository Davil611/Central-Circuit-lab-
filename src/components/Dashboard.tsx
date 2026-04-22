/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { SUBJECTS, PROJECTS, SIMULATIONS } from '../constants';
import { motion } from 'framer-motion';
import { ArrowRight, Book, Activity, Calculator, ListChecks } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Dashboard() {
  const stats = [
    { label: 'Overall Completion', value: '64%', icon: Activity, color: 'bg-blue-100 text-blue-600' },
    { label: 'Projects Done', value: '12/18', icon: Book, color: 'bg-green-100 text-green-600' },
    { label: 'Pending Vivas', value: '04', icon: ListChecks, color: 'bg-yellow-100 text-yellow-600' },
  ];

  return (
    <div className="grid grid-cols-12 gap-8">
      {/* Left Column */}
      <div className="col-span-12 lg:col-span-8 flex flex-col gap-8">
        {/* Welcome Section */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-slate-800 dark:text-white">Core Subjects</h2>
            <Link to="/subjects" className="text-blue-600 text-sm font-semibold hover:underline">View All</Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {SUBJECTS.slice(0, 3).map((subject, i) => (
              <motion.div 
                key={subject.id}
                whileHover={{ y: -5 }}
                className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all dark:bg-slate-900 dark:border-slate-800"
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-3 ${
                  i === 0 ? 'bg-orange-100 text-orange-600' : 
                  i === 1 ? 'bg-blue-100 text-blue-600' : 
                  'bg-purple-100 text-purple-600'
                }`}>
                   <Book size={24} />
                </div>
                <h3 className="font-bold text-slate-800 dark:text-white">{subject.title}</h3>
                <p className="text-xs text-slate-500 mt-1">24 Lessons • 8 Labs</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Labs Section */}
        <section>
          <h2 className="text-xl font-bold text-slate-800 mb-6 dark:text-white">Interactive Lab Simulations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {SIMULATIONS.slice(0, 2).map((sim, i) => (
              <Link 
                to="/lab" 
                key={sim.id}
                className="relative bg-slate-900 rounded-3xl h-56 overflow-hidden group border border-slate-800"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent p-8 flex flex-col justify-end">
                  <p className="text-blue-400 text-xs font-bold uppercase tracking-widest mb-1">Virtual Lab {i + 1 < 10 ? `0${i+1}` : i+1}</p>
                  <h3 className="text-white font-bold text-xl">{sim.title}</h3>
                  <p className="text-white/60 text-sm mt-1">{sim.description}</p>
                </div>
                <div className="absolute top-6 right-6 bg-white/10 backdrop-blur-md rounded-full px-4 py-1 text-[10px] font-bold text-white uppercase tracking-wider">
                  Simulation Active
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Projects Preview */}
        <section className="bg-slate-100 border border-dashed border-slate-300 rounded-[2rem] p-8 dark:bg-slate-900 dark:border-slate-800">
           <p className="text-xs font-bold text-slate-400 uppercase mb-4 tracking-widest">Latest Practical Records</p>
           <div className="space-y-4">
             {PROJECTS.map(proj => (
               <Link to="/projects" key={proj.id} className="flex items-center justify-between group p-3 hover:bg-white/50 rounded-xl transition-all">
                  <div>
                    <p className="text-sm font-semibold text-slate-800 dark:text-white">{proj.title}</p>
                    <p className="text-xs text-slate-500">Exp. {proj.id.toUpperCase()}</p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-blue-500 group-hover:translate-x-1 transition-all" />
               </Link>
             ))}
           </div>
        </section>
      </div>

      {/* Right Column */}
      <div className="col-span-12 lg:col-span-4 flex flex-col gap-6">
        {/* Progress Card */}
        <div className="bg-white rounded-[2rem] p-8 border border-slate-200 shadow-sm dark:bg-slate-900 dark:border-slate-800">
          <h3 className="font-bold text-slate-800 mb-6 dark:text-white">Learning Analytics</h3>
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold text-slate-500 uppercase">Course Completion</span>
            <span className="text-sm font-bold text-blue-600">64%</span>
          </div>
          <div className="w-full bg-slate-100 h-2 rounded-full mb-8 dark:bg-slate-800">
            <div className="bg-blue-500 h-2 rounded-full" style={{ width: '64%' }}></div>
          </div>
          
          <div className="space-y-6">
            {stats.map(stat => (
              <div key={stat.label} className="flex items-center gap-4">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold ${stat.color}`}>
                  <stat.icon size={18} />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-800 dark:text-white">{stat.value}</p>
                  <p className="text-[10px] text-slate-500 uppercase font-medium">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tools Card */}
        <div className="bg-[#1E3A8A] rounded-[2rem] p-8 text-white shadow-xl shadow-blue-900/20">
          <h3 className="font-bold mb-6 flex items-center gap-2">
            <Activity size={20} className="text-blue-400" />
            Quick Tools
          </h3>
          <div className="grid grid-cols-2 gap-4">
            <Link to="/calculator" className="bg-white/10 hover:bg-white/20 p-4 rounded-2xl text-center transition-all">
              <p className="text-[10px] opacity-70 uppercase font-bold tracking-tighter">Ohm's Law</p>
              <p className="text-sm font-bold mt-1">Calculator</p>
            </Link>
            <button className="bg-white/10 hover:bg-white/20 p-4 rounded-2xl text-center transition-all">
              <p className="text-[10px] opacity-70 uppercase font-bold tracking-tighter">Unit</p>
              <p className="text-sm font-bold mt-1">Converter</p>
            </button>
          </div>
          <button className="w-full mt-6 py-4 bg-white text-[#1E3A8A] font-bold rounded-2xl text-sm shadow-lg hover:bg-blue-50 transition-all active:scale-95">
            Download Records (PDF)
          </button>
        </div>
      </div>
    </div>
  );
}
