/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Subject {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Project {
  id: string;
  subjectId: string;
  title: string;
  objective: string;
  components: string[];
  circuitDiagram?: string;
  workingPrinciple: string;
  procedure: string[];
  result: string;
  vivaQuestions: { question: string; answer: string }[];
}

export interface Simulation {
  id: string;
  title: string;
  type: 'circuit' | 'motor' | 'transformer' | 'logic';
  description: string;
}

export interface Note {
  id: string;
  semester: number;
  subjectId: string;
  title: string;
  content: string; // Markdown
}

export interface QuizQuestion {
  id: string;
  subjectId: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export interface UserProgress {
  userId: string;
  completedProjects: string[];
  completedQuizzes: { quizId: string; score: number }[];
  completedSimulations: string[];
}
