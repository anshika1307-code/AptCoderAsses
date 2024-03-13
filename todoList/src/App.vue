<template>
  <div id="app" class="background-container">
    <Todo />
  </div>
</template>

<script>
import Todo from "./components/Todo.vue";


export default {
  components: {
    Todo,
  },
 
};
</script>

<style>


.background-container {
  @apply h-screen flex items-center justify-center;
  background-image: url('assets/bg.jpg');
 
  background-size: auto;

}
.bg-fixed {
  background-attachment: fixed;
}
</style>
