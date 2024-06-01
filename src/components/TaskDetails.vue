<template>
    <div class="task">
        <p>{{ task.title }}</p>
        <div class="icons">
            <i @click="taskStore.deleteTask(task.id)" class="material-icons">delete</i>
            <i @click="taskStore.toggleFav(task.id)" class="material-icons" :class="{active:task.isFav}">favorite</i>
        </div>
    </div>
</template>
<script setup>
defineProps({
    task: {
        type: Object,
        required: true
    }
});
import { useTaskStore } from '../stores/TaskStore';
const taskStore = useTaskStore();

</script>



<style scoped></style>