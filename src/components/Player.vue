<template>
    <audio ref="player">
        <source :src="source">
    </audio>
</template>

<script setup>
    import { ref, watchEffect } from 'vue'

    const props = defineProps(['source'])
    const player = ref()
    const source = ref()

    watchEffect(() => {
        if (props.source) {
            source.value = props.source
            player.value.play()
        }
    })
</script>

<style>
    audio {
        display: none;
    }
</style>
