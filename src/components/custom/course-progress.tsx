'use client';

import { CourseProgress } from '@/lib/types/progress';
import { Clock, TrendingUp, Play } from 'lucide-react';

interface CourseProgressListProps {
  courses: CourseProgress[];
}

export default function CourseProgressList({ courses }: CourseProgressListProps) {
  const inProgressCourses = courses.filter((c) => c.status === 'in-progress');
  const completedCourses = courses.filter((c) => c.status === 'completed');

  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-black border border-yellow-500/20 rounded-2xl p-6 shadow-2xl">
      <h3 className="text-xl font-bold text-white mb-1">Meus Cursos</h3>
      <p className="text-sm text-gray-400 mb-6">Acompanhe seu progresso em cada curso</p>

      {/* Cursos em andamento */}
      {inProgressCourses.length > 0 && (
        <div className="mb-6">
          <h4 className="text-sm font-semibold text-gray-400 mb-3">Em Andamento</h4>
          <div className="space-y-3">
            {inProgressCourses.map((course) => (
              <div
                key={course.id}
                className="bg-gray-800/50 border border-gray-700/50 rounded-xl overflow-hidden hover:border-yellow-500/30 transition-all group cursor-pointer"
              >
                <div className="flex gap-4 p-4">
                  <img
                    src={course.thumbnail}
                    alt={course.title}
                    className="w-24 h-16 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <h5 className="text-white font-semibold mb-1 group-hover:text-yellow-500 transition-colors">
                      {course.title}
                    </h5>
                    <div className="flex items-center gap-4 text-xs text-gray-400 mb-2">
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {course.hoursStudied}h estudadas
                      </div>
                      <div className="flex items-center gap-1">
                        <TrendingUp className="w-3 h-3" />
                        {course.xpEarned} XP
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="flex-1 h-1.5 bg-gray-700 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-yellow-500 to-amber-600 transition-all duration-500"
                          style={{ width: `${course.progress}%` }}
                        />
                      </div>
                      <span className="text-xs font-semibold text-yellow-500">
                        {course.progress}%
                      </span>
                    </div>
                  </div>
                  <button className="self-center p-2 bg-yellow-500 hover:bg-yellow-600 rounded-lg transition-colors">
                    <Play className="w-4 h-4 text-black" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Cursos concluídos */}
      {completedCourses.length > 0 && (
        <div>
          <h4 className="text-sm font-semibold text-gray-400 mb-3">Concluídos</h4>
          <div className="space-y-3">
            {completedCourses.map((course) => (
              <div
                key={course.id}
                className="bg-gray-800/30 border border-gray-700/30 rounded-xl overflow-hidden opacity-75 hover:opacity-100 transition-all"
              >
                <div className="flex gap-4 p-4">
                  <img
                    src={course.thumbnail}
                    alt={course.title}
                    className="w-24 h-16 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h5 className="text-white font-semibold">{course.title}</h5>
                      <span className="px-2 py-0.5 bg-green-500/20 text-green-400 text-xs rounded-full">
                        ✓ Concluído
                      </span>
                    </div>
                    <div className="flex items-center gap-4 text-xs text-gray-400">
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {course.hoursStudied}h estudadas
                      </div>
                      <div className="flex items-center gap-1">
                        <TrendingUp className="w-3 h-3" />
                        {course.xpEarned} XP ganhos
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
