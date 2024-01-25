<template>
    <div class="container">
        <ConfiguratorElement 
            v-for="category in categories" 
            :key="category" :class="category" :product="getProduct(category)" 
            :category="categoryType[category as keyof typeof categoryType].plural">
        </ConfiguratorElement>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';
    import ConfiguratorElement from './ConfiguratorElement.vue';
    import { useStore, Product } from '../store';

    export default defineComponent({
        name: "ConfiguratorComponent",
        components: { ConfiguratorElement },
        data(){
            return{
                store: useStore(),
                categories: ["processeur", "aio_cooler", "motherboard", "ram", "graphic_card", "case", "psu"],
                categoryType: {
                    processeur: {plural:"processeurs"},
                    aio_cooler: {plural:"aio_coolers"},
                    motherboard: {plural:"motherboards"},
                    ram: {plural:"ram"},
                    graphic_card: {plural:"graphic_cards"},
                    case: {plural:"cases"},
                    psu: {plural:"psu"}
                }
            }
        },
        methods: {
            getProduct(category: string){
                let product =this.store.getters["getBasket"].filter((el: Product) => el.category == category)
                if(product.length>0){
                    return product[0]
                }else{ 
                    return null 
                }
            }
        }
    });
</script>

<style scoped>
    .container{
        width:50%;
        margin: 10px;
        display: grid;
        grid-template-columns: repeat(3,1fr);  
        row-gap: 100px; 
        column-gap: 100px;  
    }
    
    .ram{
        grid-column: 2;
        grid-row: 2;
    }

    .graphic_card, .case, .psu{
        grid-row: 3;
    }

    @media (max-width: 700px) {
        .container { 
            grid-template-columns: repeat(1, 1fr); 
            row-gap: auto;
            column-gap: auto;
        }
        .ram{
            grid-column: auto;
            grid-row: auto;
        }

        .graphic_card, .case, .psu{
            grid-row: auto;
        }
    }

    @media (max-width: 1000px) {
        .container { 
            grid-template-columns: repeat(1, 1fr); 
            row-gap: auto;
            column-gap: auto;
        }
        .ram{
            grid-column: auto;
            grid-row: auto;
        }

        .graphic_card, .case, .psu{
            grid-row: auto;
        }
    }


</style>


