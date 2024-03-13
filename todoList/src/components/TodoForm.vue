<!-- src/components/TodoForm.vue -->
<template>
  <div class="flex">
    <div class="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-cyan-300 py-1.5">
      <input type="text" placeholder="Title"
        class="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/40 py-1.5 mb-1 text-black"
        v-model="title" />
      <input type="text" placeholder="Write Todo..."
        class="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/50 py-1.5 text-black"
        v-model="newTodo" />
    </div>
    <div class="border border-black/10 rounded-r-lg bg-slate-500">

      <input v-model="dueDate" type="date" placeholder="Due Date"
        class="w-full border h-1/2 border-black/10 px-3 outline-none duration-150 bg-red-300 py-1.5" />
      <button @click="addTodo"
        class="w-full h-1/2 px-3 py-1 bg-gradient-to-r from-cyan-500 to-blue-500 text-white shrink-0">
        Add
      </button>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      title: '',
      newTodo: '',
      dueDate: '',
    };
  },
  methods: {
    addTodo() {
      if (this.newTodo.trim() !== '') {
        
        const newTodoObj = {
        title: this.title.trim(),
        todo: this.newTodo.trim(),
        dueDate: this.dueDate,
        completed: false,
        createdDate: new Date().toISOString(),
    };
    console.log('Adding todo:', JSON.stringify(newTodoObj));
    this.$store.commit('addTodo', newTodoObj);
        this.title = '';
        this.newTodo = '';
        this.dueDate = '';

      }
    },
    
  },
  
};
</script>
