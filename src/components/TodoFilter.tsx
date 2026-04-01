'use client';

import { FilterType } from '@/types/todo';

interface TodoFilterProps {
  filter: FilterType;
  onFilterChange: (filter: FilterType) => void;
  activeCount: number;
  completedCount: number;
  totalCount: number;
}

export default function TodoFilter({
  filter,
  onFilterChange,
  activeCount,
  completedCount,
  totalCount,
}: TodoFilterProps) {
  const filters: { label: string; value: FilterType; count: number }[] = [
    { label: 'All', value: 'all', count: totalCount },
    { label: 'Active', value: 'active', count: activeCount },
    { label: 'Done', value: 'completed', count: completedCount },
  ];

  return (
    <div className="px-6 py-3 border-b border-gray-100 flex items-center gap-2">
      {filters.map(({ label, value, count }) => (
        <button
          key={value}
          onClick={() => onFilterChange(value)}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 ${
            filter === value
              ? 'bg-indigo-100 text-indigo-700'
              : 'text-gray-500 hover:bg-gray-100 hover:text-gray-700'
          }`}
        >
          {label}
          <span
            className={`inline-flex items-center justify-center w-4 h-4 rounded-full text-xs ${
              filter === value
                ? 'bg-indigo-500 text-white'
                : 'bg-gray-200 text-gray-600'
            }`}
          >
            {count}
          </span>
        </button>
      ))}
    </div>
  );
}
