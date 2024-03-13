
<template>
  <div class="bg-white border border-black rounded-xl p-10 w-7/12 relative">
    <h1 class="custom-heading pb-3">Add New Todo</h1>
    <TodoForm @add="addTodo" />
    
    <TodoList :todos="todos" @remove="removeTodo" />
  </div>
</template>

<script>
import TodoForm from "./TodoForm.vue";
import TodoList from "./TodoList.vue";

export default {
  components: {
    TodoForm,
    TodoList,
  },
  data() {
    return {
      todos: [],
    };
  },
  methods: {
    addTodo(newTodo) {
      this.todos.push(newTodo);
    },
    removeTodo(index) {
      this.todos.splice(index, 1);
    },
  },
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