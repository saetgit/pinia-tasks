<template>
  <main>
    <header>
      <img alt="Pinia logo" src="./assets/Pinialogo.png" />
      <h1>Pinia Task</h1>
    </header>
    <div class="task-list">
      <div v-for="task in taskStore.tasks" :key="task.id">
        <TaskDetail :task="task" />
      </div>
    </div>
  </main>
</template>

<script setup>
import { useTaskStore } from './stores/TaskStore';
import TaskDetail from './components/TaskDetails.vue';

const taskStore = useTaskStore();
</script>

<style scoped></style>
