<template>
    <a-list bordered :data-source="rows">
        <template #renderItem="{ item }">
            <a-list-item @click="checkContent(item)">
                <template #actions>
                    <RightOutlined />
                </template>
                <a-list-item-meta>
                    <template #title>
                        {{ item.title }}
                    </template>
                </a-list-item-meta>
            </a-list-item>
        </template>
    </a-list>
</template>

<script setup>
    import { useRouter } from 'vue-router'

    const { push } = useRouter()
    const props = defineProps(['rows'])
    const rows = props.rows

    const checkContent = (item) => {
        if (item.type === 'content') {
            push({ name: 'Content' })
        } else {
            push({ name: 'Catalog' })
        }
    }
</script>
