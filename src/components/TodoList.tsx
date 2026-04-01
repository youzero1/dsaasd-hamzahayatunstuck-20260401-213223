'use client';

import { Todo, FilterType } from '@/types/todo';
import TodoItem from './TodoItem';

interface TodoListProps {
  todos: Todo[];
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  onEdit: (id: string, text: string) => void;
  filter: FilterType;
}

export default function TodoList({ todos, onToggle, onDelete, onEdit, filter }: TodoListProps) {
  if (todos.length === 0) {
    const emptyMessages: Record<FilterType, { icon: string; title: string; subtitle: string }> = {
      all: {
        icon: '✨',
        title: 'No tasks yet',
        subtitle: 'Add your first task above to get started!',
      },
      active: {
        icon: '🎉',
        title: 'All done!',
        subtitle: 'You have no active tasks. Great job!',
      },
      completed: {
        icon: '📋',
        title: 'Nothing completed',
        subtitle: 'Complete some tasks to see them here.',
      },
    };

    const msg = emptyMessages[filter];

    return (
      <div className="py-16 px-6 text-center">
        <div className="text-5xl mb-4">{msg.icon}</div>
        <h3 className="text-gray-600 font-semibold text-lg mb-1">{msg.title}</h3>
        <p className="text-gray-400 text-sm">{msg.subtitle}</p>
      </div>
    );
  }

  return (
    <ul className="divide-y divide-gray-50 max-h-[420px] overflow-y-auto">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </ul>
  );
}
