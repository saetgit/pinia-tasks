<template>
  <main>
    <header>
      <img alt="Pinia logo" src="./assets/Pinialogo.png" />
      <h1>Pinia Task</h1>
    </header>
    <div class="new-task-form">
      <TaskForm />
    </div>
    <nav class="filter">
      <button @click="filter = 'all'">All Tasks</button>
      <button @click="filter = 'favs'">Fav tasks</button>
    </nav>
    <div class="loading" v-if="loading">Loading Task</div>
    <div class="task-list" v-if="filter === 'all'">
      <p>You have {{ totalCount }} tasks left to do.</p>
      <div v-for="task in tasks" :key="task.id">
        <TaskDetail :task="task" />
      </div>
    </div>

    <div class="task-list" v-if="filter === 'favs'">
      <p>You have {{ favCount }} tasks in your favs list.</p>
      <div v-for=" task in fav" :key="task.id">
        <TaskDetail :task="task" />
      </div>
    </div>
    <button @click="taskStore.$reset">rest state</button>

  </main>
  
</template>

<script setup>
import { ref } from 'vue'
import { useTaskStore } from './stores/TaskStore';
import TaskDetail from './components/TaskDetails.vue';
import TaskForm from './components/TaskForm.vue';
import { storeToRefs } from 'pinia';
const taskStore = useTaskStore();
const { tasks, loading, fav, totalCount, favCount } = storeToRefs(taskStore)

taskStore.getTasks()
const filter = ref('all')
</script>

<style scoped></style>
