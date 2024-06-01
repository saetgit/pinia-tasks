<template>
    <div class="task">
        <p>{{ task.title }}</p>
        <div class="icons">
            <i class="material-icons">delete</i>
            <i class="material-icons">favorite</i>
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
</script>



<style scoped></style>