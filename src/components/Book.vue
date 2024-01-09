<template>
    <a-card hoverable ref="bookCard">
        <template #cover>
            <div ref="bookCover" style="overflow: hidden;">
                <img :alt="book.title" :src="book.cover">
            </div>
        </template>
        <a-card-meta style="height: 45px;text-overflow: ellipsis;">
            <template #title>
                <p style="font-weight: normal;font-size: 14px;">{{ book.title }}</p>
            </template>
        </a-card-meta>
    </a-card>
</template>

<script setup>
    import { ref, onMounted } from 'vue'

    const props = defineProps(['data'])
    const book = props.data
    const bookCard = ref()
    const bookCover = ref()

    const setCardHeight = () => {
        const bookCardWidth = bookCard.value.$el.clientWidth
        const bookCardHeight = bookCardWidth / (787 / 1092)
        bookCard.value.$el.style.height = (bookCardHeight + 67) + 'px'
        bookCover.value.style.height = bookCardHeight + 'px'
    }

    onMounted(() => {
        setCardHeight()
    })

    let timer = null;
    window.addEventListener('resize', (e) => {
        clearTimeout(timer)
        timer = setTimeout(() => {
            setCardHeight()
        }, 300)
    });
</script>

<style>
    img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    .ant-card .ant-card-body {
        padding: 15px;
    }
    .ant-card .ant-card-meta-title {
        white-space: normal;
    }
</style>
