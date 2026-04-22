/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { SUBJECTS } from '../constants';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen } from 'lucide-react';

export default function SubjectsList() {
  return (
    <div className="space-y-10">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Academic Subjects</h2>
        <p className="mt-2 text-slate-500 dark:text-slate-400">Comprehensive curriculum for Diploma Electrical Engineering.</p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {SUBJECTS.map((subject, i) => (
          <motion.div
            key={subject.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.05 }}
            className="group relative overflow-hidden rounded-2xl bg-white p-7 shadow-sm transition-all hover:shadow-md dark:bg-slate-900 border border-slate-200 dark:border-slate-800"
          >
            <div className={`mb-6 flex h-14 w-14 items-center justify-center rounded-xl transition-all ${
              i % 3 === 0 ? 'bg-orange-100 text-orange-600' :
              i % 3 === 1 ? 'bg-blue-100 text-blue-600' :
              'bg-purple-100 text-purple-600'
            }`}>
              <BookOpen size={28} />
            </div>
            <h3 className="text-lg font-bold text-slate-800 dark:text-white group-hover:text-blue-600 transition-colors uppercase tracking-tight">{subject.title}</h3>
            <p className="mt-2 text-xs leading-relaxed text-slate-500 dark:text-slate-400">
              {subject.description}
            </p>
            
            <div className="mt-8 flex items-center justify-between border-t border-slate-100 pt-6 dark:border-slate-800">
              <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Semester 4 • 24 Lessons</span>
              <Link 
                to={`/subjects/${subject.id}`} 
                className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-50 text-slate-400 transition-all hover:bg-[#1E3A8A] hover:text-white dark:bg-slate-800 dark:text-white"
              >
                <ArrowRight size={16} />
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
