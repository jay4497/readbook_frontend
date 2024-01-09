<template>
    <div>
        <h1></h1>
        <a-row :gutter="[25, 25]">
            <a-col v-for="item in books" :xs="{ span: 12 }" :sm="{ span: 12 }" :md="{ span: 8}" :lg="{ span: 6 }">
                <Book :data="item" />
            </a-col>
        </a-row>
    </div>
</template>

<script setup>
    import { ref } from 'vue'
    import Book from '@/components/Book.vue'

    const books = ref([
        {
            id: 1,
            cover: 'http://172.22.22.84/zhaopin/public/uploads/20231130/8e1acb78f83813331a6d0a5911aef787.png',
            title: '测试',
            description: '测试数据描述'
        },
        {
            id: 2,
            cover: 'http://172.22.22.84/zhaopin/public/uploads/20231130/8e1acb78f83813331a6d0a5911aef787.png',
            title: '测试1测试1测试1测试1测试1测试1测试1测试1',
            description: '测试数据描述2测试数据描述2测试数据描述2测试数据描述2测试数据描述2测试数据描述2测试数据描述2'
        }
    ])
</script>

<style>

</style>
