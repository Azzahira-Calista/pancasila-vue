<template>
    <div class="flex flex-col mb-1">
          <li :class="`${pointColor} font-bold font-poppins text-lg`">
            {{ pointText }}
        </li>
        <p class="font-poppins"> {{ descriptionText }}</p>
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
