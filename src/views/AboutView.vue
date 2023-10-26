<template>
    <AboutCompHerovue/>
    <FloraFaunaCompVue/>
    
    <AboutCompEmblemAreaVue/>
    <FooterComponent/>
</template>

<script>
import AboutCompEmblemAreaVue from '@/components/About Component/AboutCompEmblemArea/AboutCompEmblemArea.vue'
import FooterComponent from '@/components/Global Component/FooterComponent.vue';
import FloraFaunaCompVue from '@/components/About Component/FloraFaunaComponent/FloraFaunaComp.vue';
import AboutCompHerovue from '@/components/About Component/AboutCompHero/AboutCompHero.vue';

export default {
    components: {
        AboutCompEmblemAreaVue,
        FooterComponent,
        FloraFaunaCompVue,
        AboutCompHerovue
    }
}
</script>

