<template>
  <div>
    <h1 class="custom-heading pt-5 pb-3" v-if="hasincompleteTodos">All Todos</h1>
    <ul>
      <li v-for="(todo, index) in incompleteTodos" :key="index" class="todo-card" @click="toggleCompleted(index)">
        <div class="bg-cyan-200 rounded-lg p-2 border border-black mb-2">
          <input type="checkbox" class="m-0 p-0 mr-3 text-4xl w-6 h-6 " v-model="todo.completed"/>
          <strong class="text-2xl">{{ todo.title }}</strong>
          <p class="text-xl">{{ todo.todo }}</p>
          <p>Due Date: {{ todo.dueDate }}</p>
          <p class="text-blue-700">Created Date: {{ formatCreatedDate(todo.createdDate) }}</p>
          <button @click="removeTodo(index)"
            class="border rounded-lg bg-red-700 text-white px-2 py-1 text-center mt-2">Remove</button>
        </div>
      </li>
    </ul>
</div>
<div>
    <h1 class="custom-heading pt-5 pb-3" v-if="hasCompletedTasks">Completed Todos</h1>
    <ul>
      <li v-for="(todo, index) in completedTodos" :key="index" class="todo-card">
        <div class="bg-cyan-200 rounded-lg p-2 border border-black mb-2" >
          <input type="checkbox" class="m-0 p-0 mr-3 text-4xl w-6 h-6 " v-model="todo.completed"
             />
          <strong class="text-2xl">{{ todo.title }}</strong>
          <p class="text-xl">{{ todo.todo }}</p>
          <p>Due Date: {{ todo.dueDate }}</p>
          <p class="text-blue-700">Created Date: {{ formatCreatedDate(todo.createdDate) }}</p>
          <button @click="removeTodo(index)"
            class="border rounded-lg bg-red-700 text-white px-2 py-1 text-center mt-2">Remove</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    todos() {
      return this.$store.getters.todos;
    },
    incompleteTodos() {
      return this.todos.filter(todo => !todo.completed);
    },
    hasincompleteTodos() {
      return this.todos.some(todo => !todo.completed);
    },
    hasCompletedTasks() {
      return this.todos.some(todo => todo.completed);
    },
    completedTodos() {
      return this.todos.filter(todo => todo.completed);
    }
  },
  methods: {
    removeTodo(index) {
      this.$store.dispatch('removeTodo', index);
    },
    formatCreatedDate(createdDate) {
      if (createdDate) {
        const formattedDate = new Date(createdDate).toLocaleString();
        return formattedDate;
      }
      return '';
    },
    toggleCompleted(index) {
      this.$store.dispatch('toggleCompleted', index);
    },
  }
};
</script>

<style scoped>

@font-face {
  font-family: 'Gochi Hand';
  src: url('https://fonts.googleapis.com/css?family=Gochi+Hand');
  
}

.custom-heading {
  @apply font-bold text-2xl text-center;
  font-family: 'Gochi Hand', cursive;
  
}
</style>