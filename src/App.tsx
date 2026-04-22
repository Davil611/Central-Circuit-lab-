/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './components/Dashboard';
import SubjectsList from './components/SubjectsList';
import ProjectsList from './components/ProjectsList';
import VirtualLab from './components/VirtualLab';
import ElectricalCalculator from './components/ElectricalCalculator';

// Extra Feature: Simple Quiz
const MCQQuiz = () => (
  <div className="max-w-3xl mx-auto space-y-10 py-10">
    <div className="text-center">
      <h2 className="text-3xl font-extrabold tracking-tight">Technical Quiz</h2>
      <p className="mt-2 text-slate-500">Test your knowledge of core electrical concepts.</p>
    </div>
    <div className="rounded-3xl bg-white p-10 shadow-sm dark:bg-slate-900 border border-slate-100 dark:border-slate-800">
      <p className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-4">Question 1 of 10</p>
      <h3 className="text-2xl font-bold mb-10">Which law states that the current through a conductor is directly proportional to the voltage across it?</h3>
      <div className="grid gap-4">
        {['Kirchhoff’s Law', 'Ohm’s Law', 'Faraday’s Law', 'Lenz’s Law'].map((opt, i) => (
          <button key={i} className="w-full text-left p-6 rounded-2xl border border-slate-200 hover:border-blue-600 hover:bg-blue-50 transition-all dark:border-slate-800 dark:hover:bg-slate-800">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 mr-4 text-sm font-bold dark:bg-slate-700">{String.fromCharCode(65 + i)}</span>
            {opt}
          </button>
        ))}
      </div>
    </div>
  </div>
);

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/subjects" element={<SubjectsList />} />
          <Route path="/projects" element={<ProjectsList />} />
          <Route path="/lab" element={<VirtualLab />} />
          <Route path="/calculator" element={<ElectricalCalculator />} />
          <Route path="/quiz" element={<MCQQuiz />} />
        </Routes>
      </Layout>
    </Router>
  );
}
