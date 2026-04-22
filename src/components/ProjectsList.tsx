/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { PROJECTS } from '../constants';
import { motion } from 'framer-motion';
import { ListChecks, ChevronRight, Clock, Star } from 'lucide-react';
import { useState } from 'react';

export default function ProjectsList() {
  const [selectedProject, setSelectedProject] = useState<any>(null);

  if (selectedProject) {
    return (
      <div className="space-y-8 pb-20">
        <button 
          onClick={() => setSelectedProject(null)}
          className="text-sm font-semibold text-blue-600 hover:underline mb-4"
        >
          ← Back to Projects
        </button>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
          {/* Main Info */}
          <div className="lg:col-span-2 space-y-10">
            <section>
              <h2 className="text-4xl font-extrabold tracking-tight">{selectedProject.title}</h2>
              <div className="mt-4 flex items-center gap-4 text-sm text-slate-500">
                <span className="rounded-full bg-blue-100 px-3 py-1 font-bold text-blue-600 dark:bg-blue-900/30 font-mono">ID: {selectedProject.id.toUpperCase()}</span>
                <span className="flex items-center gap-1"><Clock size={16} /> 45 Mins</span>
                <span className="flex items-center gap-1"><Star size={16} className="text-yellow-500" /> Advanced</span>
              </div>
            </section>

            <section className="rounded-3xl bg-white p-8 shadow-sm dark:bg-slate-900 border border-slate-100 dark:border-slate-800">
              <h3 className="text-xl font-bold mb-4">Objective</h3>
              <p className="text-slate-600 dark:text-slate-400">{selectedProject.objective}</p>
            </section>

            <section className="rounded-3xl bg-white p-8 shadow-sm dark:bg-slate-900 border border-slate-100 dark:border-slate-800">
              <h3 className="text-xl font-bold mb-6">Step-by-step Procedure</h3>
              <div className="space-y-6">
                {selectedProject.procedure.map((step: string, i: number) => (
                  <div key={i} className="flex gap-4">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">
                      {i + 1}
                    </div>
                    <p className="pt-1 text-slate-600 dark:text-slate-400">{step}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="rounded-3xl bg-blue-600 p-8 text-white shadow-xl shadow-blue-500/20">
              <h3 className="text-xl font-bold mb-4">Result</h3>
              <p className="text-blue-50 font-medium italic">"{selectedProject.result}"</p>
            </section>
          </div>

          {/* Sidebar Info */}
          <div className="space-y-8">
            <div className="rounded-3xl bg-slate-900 p-8 text-white">
              <h3 className="text-xl font-bold mb-6">Components</h3>
              <ul className="space-y-3">
                {selectedProject.components.map((c: string) => (
                  <li key={c} className="flex items-center gap-3 text-sm text-slate-400">
                    <div className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                    {c}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm dark:bg-slate-900 border border-slate-100 dark:border-slate-800">
              <h3 className="text-xl font-bold mb-6">Viva Questions</h3>
              <div className="space-y-6">
                {selectedProject.vivaQuestions.map((v: any, i: number) => (
                  <div key={i} className="space-y-2">
                    <p className="text-sm font-bold text-blue-600 font-mono">Q: {v.question}</p>
                    <p className="text-sm text-slate-600 dark:text-slate-400">A: {v.answer}</p>
                  </div>
                ))}
              </div>
            </div>

            <button className="w-full rounded-2xl bg-slate-200 py-4 font-bold text-slate-900 transition-colors hover:bg-slate-300 dark:bg-slate-800 dark:text-white">
              Download PDF Note
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-10">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Practical Work</h2>
        <p className="mt-2 text-slate-500 dark:text-slate-400">Hands-on projects for real-world electrical understanding.</p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {PROJECTS.map((project, i) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            onClick={() => setSelectedProject(project)}
            className="group cursor-pointer overflow-hidden rounded-2xl bg-white shadow-sm transition-all hover:shadow-md dark:bg-slate-900 border border-slate-200 dark:border-slate-800"
          >
            <div className="flex h-full flex-col p-7">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition-colors group-hover:bg-[#1E3A8A] group-hover:text-white dark:bg-slate-800">
                <ListChecks size={24} />
              </div>
              <h3 className="text-lg font-bold group-hover:text-blue-600 transition-colors text-slate-800 dark:text-white uppercase tracking-tight">{project.title}</h3>
              <p className="mt-3 line-clamp-2 text-xs text-slate-500 dark:text-slate-400">
                {project.objective}
              </p>
              <div className="mt-auto pt-8 flex items-center justify-between text-[10px] font-bold uppercase tracking-widest text-slate-400">
                <span>Components: {project.components.length}</span>
                <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
