<template>
    <div class="panier">
        <h1>{{categoryType[product.category as keyof typeof categoryType].fr}} :</h1>
        <div class="categories">
            <p>{{product.name}}</p>
            <p id="price">{{product.price}} {{product.currency}}</p>
            <ConfiguratorElementButton @click=deleteProduct() color="delete"> 
                <font-awesome-icon :icon="['fas','trash']"/>
            </ConfiguratorElementButton>
        </div>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';
    import ConfiguratorElementButton from './ConfiguratorElementButton.vue';
    import { useStore } from '../store'

    export default defineComponent({
        name: 'SummaryElement',
        components:{
            ConfiguratorElementButton
        },
        props: {
            product: {
                type: Object,
                default: null
            },
        },
        data(){
            return{
                store: useStore(),
                categoryType: {
                    processeur: {fr:"Processeur"},
                    aio_cooler: {fr:"Ventirad"},
                    motherboard: {fr:"Carte Mère"},
                    ram: {fr:"Mémoire Vive"},
                    graphic_card: {fr:"Carte Graphique"},
                    case: {fr:"Boîtier"},
                    psu: {fr:"Alimentation"}
                }
            }
        },
        methods: {
            deleteProduct(){
                this.store.commit('deleteProduct',this.product)
            }
        }
    });
</script>


<style scoped>
    .panier{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 500px;
        height: 120px;
        background: rgba(52, 75, 157, 0.1);
        border-radius: 100px;
        margin : 30px;
    }

    h1{
        font-size: medium;
    }

    .categories{
        margin-top: 5px;
    }

    #price{
        font-weight: bold;
        color:#344B9D;
    }
</style>
