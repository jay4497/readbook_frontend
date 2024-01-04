<template>
    <a-card hoverable v-model="book">
        <template #cover="scope">
            <img :alt="scope.title" :src="scope.cover">
        </template>
        <a-card-meta :title="book.title" :description="book.description"></a-card-meta>
    </a-card>
</template>

<script setup>
    import { ref, defineProps } from 'vue'

    const props = defineProps(['data'])
    const book = props.data
</script>
