<template>
    <div class="flex flex-col">
          <li :class="`text-[${pointColor}]`">
            {{ pointText }}
        </li>
        <p> {{ descriptionText }}</p>
    </div>
</template>

<script>
export default {
    name: 'PointTextVue',

    props: {
        pointText: {
            type: String,
            required: true
        },
        pointColor: {
            type: String,
            required: true
        },
        descriptionText: {
            type: String,
            required: true
        }
    }

}
</script>
