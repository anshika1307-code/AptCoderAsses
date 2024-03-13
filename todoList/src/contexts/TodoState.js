// contexts/TodoContext.js
import { ref, provide, inject } from 'vue';

const TodoContextSymbol = Symbol();

export function TodoProvider({ children }) {
  const todos = ref([]);

  const addTodo = (todo) => {
    todos.value.unshift({ id: Date.now(), ...todo });
  };

  const updateTodo = (id, updatedTodo) => {
    todos.value = todos.value.map((todo) =>
      todo.id === id ? { ...todo, ...updatedTodo } : todo
    );
  };

  const deleteTodo = (id) => {
    todos.value = todos.value.filter((todo) => todo.id !== id);
  };

  const toggleComplete = (id) => {
    todos.value = todos.value.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
  };

  provide(TodoContextSymbol, {
    todos,
    addTodo,
    updateTodo,
    deleteTodo,
    toggleComplete,
  });

  return children;
}

export function useTodoContext() {
  const context = inject(TodoContextSymbol);
  if (!context) {
    throw new Error('useTodoContext must be used within a TodoProvider');
  }
  return context;
}
