<template>
    <div class = "project__content" :style="{backgroundColor: item.bgcolor, color:item.color}">
        <div class = "project__content--left">
            <div class = "project__content__category">
                {{ item.title }}
            </div>
            <div class="project__content__des">
                {{ item.description }}
            </div>
        </div>
        <div class="project__content__img">
            <img :src="getImgPatch(item.imgsrc)" alt="">
        </div>
    </div>
</template>
<script>

export default {
    props: {
        item: {
            type: Object
        }
    },
    methods: {
        getImgPatch(imgsrc) {
            return require('@/assets/img/' + imgsrc ) 
        }
    }
}
</script>