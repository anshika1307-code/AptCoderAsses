import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createStore } from 'vuex';

const store = createStore({
    state: {
      todos: [],
    },
    mutations: {
      setTodos(state, todos) {
        state.todos = todos;
      },
      addTodo(state, newTodo) {
        state.todos.push(newTodo);
        
      },
      removeTodo(state, index) {
        state.todos.splice(index, 1);
        
      },
      toggleCompleted(state, index) {
        const todo = state.todos.find(todo => todo.id === id);
      if (todo) {
        todo.completed = !todo.completed;
      }
      },
    },
    actions: {
      async fetchTodos({ commit }) {
        const response = await fetch('http://localhost:3001/todos');
        const todos = await response.json();
        commit('setTodos', todos);
      },
      async addTodo({ commit }, newTodo) {
        console.log(JSON.stringify(newTodo));
        const response = await fetch('http://localhost:3001/todos', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newTodo),
        });
        const todo = await response.json();
        commit('addTodo', todo);
      },
      async removeTodo({ commit }, id) {
        await fetch(`http://localhost:3001/todos/${id}`, {
          method: 'DELETE',
        });
        commit('removeTodo', id);
      },
      async toggleCompleted({ commit, state }, id) {
        const todo = state.todos.find(todo => todo.id === id);
        if (todo) {
          await fetch(`http://localhost:3001/todos/${id}`, {
            method: 'PATCH',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ completed: !todo.completed }),
          });
          commit('toggleCompleted', id);
        }
      },
    
    },
    getters: {
      todos: (state) => state.todos,
    },
});


createApp(App).use(store).mount('#app')
