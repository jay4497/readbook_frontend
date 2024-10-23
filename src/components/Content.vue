<template>
    <div ref="container" class="content"></div>
    <Player :source="audioSrc" />
</template>

<script setup>
    const props = defineProps(['content'])
    const audioSrc = ref()
    const container = ref()
    const contentList = []
    let paragraph = document.createElement('p')
    if (props.contnet) {
        props.contnet.forEach((item) => {
            const span = document.createElement('span')
            span.setAttribute('data-audio', item.audio)
            span.innerText = item.text
            span.addEventListener('click', (e) => {
                const all_spans = document.querySelectorAll('.content span')
                all_spans.forEach((el) => {
                    el.style.fontWeight = 'normal'
                })
                e.target.style.fontWeight = 'bold'
                audioSrc.value = e.target.getAttribute('data-audio')
            })
            paragraph.append(span)
            if (item.wrap === 1) {
                contentList.push(paragraph)
                paragraph = document.createElement('p')
            }
        })

        if (contentList.length > 0) {
            contentList.forEach((item) => {
                container.value.append(item)
            })
        }
    }
</script>
