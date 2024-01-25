<template>
    <div>
        <HomePageComponent  v-for="componentPage in categories" :key="componentPage" :componentPage="componentPage"/>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';
    import HomePageComponent from '../components/HomePageComponent.vue';
    import { getTest } from '../products'
    
    export default defineComponent({
        name: 'HomePage',
        components:{
            HomePageComponent
        },
        data() {
            return {
                categories: ["Products", "Configurator"],
            };
        },
        methods:{
            getTest(){
                getTest()
            }
        },
        mounted(){
            this.getTest();
        }
    })
</script>


