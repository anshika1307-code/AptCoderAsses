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
  // Set up the store here
};
</script>

<style>
/* Add global styles here if needed */

.background-container {
  @apply h-screen flex items-center justify-center;
  background-image: url('assets/bg.jpg');
  /* Replace 'background.jpg' with your image file name */
  background-size: auto;

}
.bg-fixed {
  background-attachment: fixed;
}
</style>
