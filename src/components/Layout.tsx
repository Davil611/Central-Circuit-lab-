/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ReactNode, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { 
  Home, 
  BookOpen, 
  FlaskConical, 
  Settings, 
  Calculator as CalcIcon, 
  ListChecks, 
  Moon, 
  Sun,
  Menu,
  X,
  Search
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  const navItems = [
    { name: 'Home Dashboard', path: '/', icon: Home },
    { name: 'Subjects', path: '/subjects', icon: BookOpen },
    { name: 'Projects', path: '/projects', icon: ListChecks },
    { name: 'Virtual Lab', path: '/lab', icon: FlaskConical },
    { name: 'Electrical Calculator', path: '/calculator', icon: CalcIcon },
  ];

  return (
    <div className={`min-h-screen ${isDarkMode ? 'dark bg-slate-950 text-slate-100' : 'bg-[#F8FAFC] text-slate-800'} transition-colors duration-300 font-sans pb-20 lg:pb-0`}>
      {/* Sidebar - Desktop */}
      <aside className="fixed left-0 top-0 hidden h-full w-64 bg-[#1E3A8A] text-white flex flex-col lg:flex overflow-hidden border-r border-white/5">
        <div className="p-6 flex items-center gap-3">
          <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-[#1E3A8A] font-bold text-xl shadow-inner">
            VL
          </div>
          <span className="font-bold tracking-tight text-lg">Virtual Lab</span>
        </div>

        <nav className="flex-1 px-4 py-6 space-y-1">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) => 
                `flex items-center gap-3 rounded-lg p-3 text-sm transition-all ${
                  isActive 
                    ? 'bg-white/10 text-white font-medium shadow-sm' 
                    : 'text-white/70 hover:bg-white/5'
                }`
              }
            >
              <div className={`w-2 h-2 rounded-full transition-all ${item.path === window.location.pathname ? 'bg-blue-400' : 'border border-white/40'}`} />
              {item.name}
            </NavLink>
          ))}
          <NavLink
            to="/quiz"
            className={({ isActive }) => 
              `flex items-center gap-3 rounded-lg p-3 text-sm transition-all ${
                isActive 
                  ? 'bg-white/10 text-white font-medium shadow-sm' 
                  : 'text-white/70 hover:bg-white/5'
              }`
            }
          >
            <div className={`w-2 h-2 rounded-full border border-white/40`} />
            MCQ Quizzes
          </NavLink>
        </nav>

        <div className="p-6 mt-auto border-t border-white/10 space-y-4">
          <div className="bg-blue-600/30 rounded-xl p-4">
            <p className="text-[10px] text-blue-200 uppercase tracking-widest mb-1 italic">Student Progress</p>
            <p className="text-xs font-semibold text-white">Diploma Semester 4</p>
            <div className="w-full bg-blue-900 rounded-full h-1 mt-2">
              <div className="bg-blue-300 h-1 rounded-full" style={{ width: '64%' }}></div>
            </div>
          </div>

          <button 
            onClick={toggleDarkMode}
            className="flex w-full items-center justify-center gap-2 rounded-xl border border-white/10 py-3 text-xs transition-all hover:bg-white/5 text-white/80"
          >
            {isDarkMode ? <Sun size={14} /> : <Moon size={14} />}
            {isDarkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="lg:pl-64 flex flex-col min-h-screen">
        {/* Header */}
        <header className="h-20 sticky top-0 z-30 bg-white/80 backdrop-blur-md border-b border-slate-200 px-6 sm:px-8 flex items-center justify-between dark:bg-slate-950/80 dark:border-slate-800">
          <button 
            className="rounded-xl p-3 lg:hidden text-[#1E3A8A] bg-blue-50 dark:bg-slate-900 dark:text-blue-400 shadow-sm transition-transform active:scale-90"
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={20} />
          </button>

          <div className="flex-1 max-w-xl mx-4">
            <div className="relative group">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 transition-colors group-focus-within:text-blue-500" size={16} />
              <input 
                type="text" 
                placeholder="Search..."
                className="w-full pl-10 pr-4 py-2.5 bg-slate-100 border-2 border-transparent rounded-2xl text-sm focus:bg-white focus:border-blue-200 outline-none dark:bg-slate-800 dark:focus:bg-slate-900 transition-all"
              />
            </div>
          </div>

          <div className="flex items-center gap-3">
             <div className="w-10 h-10 rounded-2xl bg-blue-100 border-2 border-blue-500 flex items-center justify-center text-blue-600 font-bold overflow-hidden shadow-lg shadow-blue-500/10">
               <img src="https://api.dicebear.com/7.x/initials/svg?seed=Rahul" alt="avatar" />
             </div>
          </div>
        </header>

        {/* Page Content */}
        <div className="p-4 sm:p-8 flex-1">
          <AnimatePresence mode="wait">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              {children}
            </motion.div>
          </AnimatePresence>
        </div>
      </main>

      {/* Bottom Navigation for Mobile Discoverability */}
      <nav className="fixed bottom-0 left-0 right-0 z-40 bg-white/90 backdrop-blur-lg border-t border-slate-200 px-6 py-3 flex items-center justify-around lg:hidden dark:bg-slate-950/90 dark:border-slate-800">
        {[
          { icon: Home, path: '/', label: 'Home' },
          { icon: FlaskConical, path: '/lab', label: 'Lab' },
          { icon: ListChecks, path: '/projects', label: 'Tasks' },
          { icon: CalcIcon, path: '/calculator', label: 'Tools' },
        ].map((item) => (
          <NavLink
            key={item.label}
            to={item.path}
            className={({ isActive }) => 
              `flex flex-col items-center gap-1 transition-all ${
                isActive ? 'text-blue-600 scale-110' : 'text-slate-400 hover:text-slate-600'
              }`
            }
          >
            <item.icon size={20} weight={window.location.pathname === item.path ? 'fill' : 'regular'} />
            <span className="text-[10px] font-bold uppercase tracking-widest">{item.label}</span>
          </NavLink>
        ))}
      </nav>

      {/* Mobile Menu Overlay with Polished Transitions */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 z-40 bg-slate-900/40 backdrop-blur-sm lg:hidden"
            />
            
            {/* Menu Panel */}
            <motion.div 
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 left-0 bottom-0 z-50 w-4/5 max-w-sm bg-[#1E3A8A] shadow-2xl lg:hidden flex flex-col"
            >
              <div className="p-8 flex items-center justify-between border-b border-white/5">
                <div className="flex items-center gap-3 text-white">
                  <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-[#1E3A8A] font-bold shadow-lg">VL</div>
                  <h1 className="text-xl font-bold tracking-tight">Virtual Lab</h1>
                </div>
                <button 
                  onClick={() => setIsMobileMenuOpen(false)} 
                  className="p-2 rounded-lg bg-white/10 text-white/80 hover:bg-white/20 transition-colors"
                >
                  <X size={20} />
                </button>
              </div>
              
              <div className="flex-1 overflow-y-auto p-6 space-y-2">
                {navItems.concat({ name: 'MCQ Quizzes', path: '/quiz', icon: BookOpen }).map((item, i) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + (i * 0.05) }}
                  >
                    <NavLink
                      to={item.path}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={({ isActive }) => 
                        `flex items-center gap-4 rounded-2xl p-4 text-base transition-all ${
                          isActive 
                            ? 'bg-blue-500/20 text-white font-bold shadow-inner ring-1 ring-white/10' 
                            : 'text-white/60 hover:bg-white/5 active:bg-white/10'
                        }`
                      }
                    >
                      <item.icon size={22} className={window.location.pathname === item.path ? 'text-blue-300' : ''} />
                      {item.name}
                    </NavLink>
                  </motion.div>
                ))}
              </div>

              <div className="p-8 border-t border-white/5 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl border-2 border-blue-400/30 p-0.5">
                    <img src="https://api.dicebear.com/7.x/initials/svg?seed=Rahul" className="rounded-xl" alt="avatar" />
                  </div>
                  <div>
                    <p className="font-bold text-white leading-none">Rahul Sharma</p>
                    <p className="text-xs text-blue-300/60 mt-1 uppercase tracking-widest font-medium">Semester 4 • EE</p>
                  </div>
                </div>
                
                <button 
                  onClick={toggleDarkMode}
                  className="flex w-full items-center justify-between px-5 py-4 rounded-2xl bg-white/5 border border-white/10 text-sm font-bold text-white/80 transition-all hover:bg-white/10"
                >
                  <span className="flex items-center gap-3">
                    {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
                    {isDarkMode ? 'Light Mode' : 'Dark Mode'}
                  </span>
                  <div className={`w-10 h-5 rounded-full p-1 transition-colors ${isDarkMode ? 'bg-blue-500' : 'bg-slate-700'}`}>
                    <div className={`w-3 h-3 bg-white rounded-full transition-transform ${isDarkMode ? 'translate-x-5' : 'translate-x-0'}`} />
                  </div>
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

function Zap({ size, className }: { size: number, className?: string }) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
    </svg>
  );
}
