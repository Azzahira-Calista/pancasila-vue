<template>
    <div :class="`${width} rounded-2xl h-72 relative flex flex-col justify-end `">
        <img class="w-full h-[17.25rem] absolute" :src="image" :alt="title">
        <div class="w-full h-[17.25rem] rounded-2xl absolute bg-black opacity-25"></div>
        <h1 class="text-white text-3xl font-poppins font-normal absolute ml-7 mb-2">{{title}}</h1>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            required: true
        },
        image: {
            type: String,
            required: true
        },
        width: {
            type: String,
            required: true
        }
    }
}
</script>

