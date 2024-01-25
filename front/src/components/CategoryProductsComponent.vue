<template>
    <div class="container">
        <h1>{{categoryType[category as keyof typeof categoryType].fr}}</h1>
        <swiper
            :slides-per-view="4"
            :space-between="10"
            :navigation="true"
            :modules="modules"
            :scrollbar="{ draggable: true }"
        >
            <swiper-slide v-for="product in products" :key="product.urlId">
                <figure @click="checkProduct(product.urlId)">
                    <img :src="product.image">
                    <figcaption>
                        <div>
                            <h2>{{product.name}}</h2>
                        </div>
                    </figcaption>
                </figure>
            </swiper-slide>
        </swiper>
    </div>
</template>
  
<script lang="ts">
    import { defineComponent } from 'vue';
    import { Product } from '../store'
    import { getProducts } from '../products'
    import { Swiper, SwiperSlide  } from 'swiper/vue/swiper-vue';
    import { Navigation, Scrollbar } from 'swiper';

    // Import Swiper styles
    import 'swiper/swiper-bundle.min.css'

    export default defineComponent({
        name: 'ConfiguratorElement',
        components:{
            Swiper,
            SwiperSlide
        },
        props:{
            category: String
        },
        data(){
            return{
                categoryType: {
                    processeurs: {fr:"Processeur"},
                    aio_coolers: {fr:"Ventirad"},
                    motherboards: {fr:"Carte mère"},
                    ram: {fr:"Mémoire vive"},
                    graphic_cards: {fr:"Carte graphique"},
                    cases: {fr:"Boîtier"},
                    psu: {fr:"Alimentation"}
                },
                products: new Array<Product>()
            }
        },
        mounted(){
            this.Products()
        },
        methods:{
            async Products(){
                this.products = await getProducts(this.category as string)
            },
            checkProduct(urlId: string){
                this.$router.push("/product/" + this.category + "/" + urlId)
            }
        },
        setup(){
            return {
                modules: [Navigation, Scrollbar],
            };
        },
    });
</script>

<style scoped>
    h1{
        text-align: left;
        font-size: 50px;
        color: #344B9D;
    }

    .container{
        margin: 50px;
    }

    figure{
        font-family: 'Raleway', Arial, sans-serif;
        color: rgb(0, 0, 0);
        position: relative;
        float: left;
        overflow: hidden;
        margin: 10px 1%;
        text-align: center;
        cursor: pointer;
    }

    figure *{
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
    }

    figure img{
        opacity: 1;
        width: 100%;
        -webkit-transition: opacity 0.35s;
        transition: opacity 0.35s;
    }

    figure figcaption{
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }

    figure figcaption > div{
        height: 50%;
        overflow: hidden;
        width: 100%;
        position: relative;
    }

    figure h2{
        margin: 0;
        opacity: 0;
        padding: 0 30px;
        position: absolute;
        width: 100%;
        left: 0;
        -webkit-transition: opacity 0.4s, -webkit-transform 0.4s;
        transition: opacity 0.4s,-webkit-transform 0.4s,-moz-transform 0.4s,-o-transform 0.4s,transform 0.4s;
        display: inline-block;
        font-weight: 800;
        text-transform: uppercase;
        bottom: 0;
        -webkit-transform: translate3d(0%, 150%, 0) rotate(20deg);
        transform: translate3d(0%, 150%, 0) rotate(20deg);
        -webkit-transition-delay: 0s;
        transition-delay: 0s;
    }

    figure:hover img{
        opacity: 0.3;
        -webkit-filter: grayscale(100%);
        filter: grayscale(100%);
    }
    
    figure:hover figcaption h2{
        -webkit-transform: translate3d(0%, 0%, 0) rotate(0deg);
        transform: translate3d(0%, 0%, 0) rotate(0deg);
        opacity: 1;
    }
</style>
