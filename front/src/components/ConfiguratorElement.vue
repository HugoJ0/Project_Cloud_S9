<template>
    <div class="containerElement">
        <img :src="require(`@/assets/configuratorElements/${categoryType[category as keyof typeof categoryType].image}`)">
        <h2>{{categoryType[category as keyof typeof categoryType].fr}}</h2>
        <div class="buttons">
            <ConfiguratorElementButton @click= addProduct() v-if="product==null" color="add">
                <font-awesome-icon :icon="['fas','plus']"/>
            </ConfiguratorElementButton>
            <ConfiguratorElementButton v-if="product!=null" color="edit">
                <font-awesome-icon @click=editProduct() :icon="['fas','pen']"/>
            </ConfiguratorElementButton>
            <ConfiguratorElementButton @click=deleteProduct() v-if="product!=null" color="delete">
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
        name: 'ConfiguratorElement',
        data(){
            return{
                store: useStore(),
                categoryType: {
                    processeurs: {fr:"Processeur", image:"Processeur.png"},
                    aio_coolers: {fr:"Ventirad", image:"Ventirad.png"},
                    motherboards: {fr:"Carte Mère", image:"CarteMere.png"},
                    ram: {fr:"Mémoire Vive", image:"MemoireVive.png"},
                    graphic_cards: {fr:"Carte Graphique", image:"CarteGraphique.png"},
                    cases: {fr:"Boîtier", image:"Boitier.png"},
                    psu: {fr:"Alimentation", image:"Alimentation.png"}
                }
            }
        },
        components:{
            ConfiguratorElementButton
        },
        props: {
            category: String,
            product: {
                type: Object,
                default: null
            }
        },
        methods: {
            addProduct(){
                this.$router.push("/configurator/"+this.category+"/add");
            },
            deleteProduct(){
                this.store.commit('deleteProduct',this.product)
            },
            editProduct(){
                this.$router.push("/configurator/"+this.category+"/edit");
            }  
        },
    });

</script>

<style scoped>
    .buttons{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    img{
        width: 100px;
    }
    .containerElement{
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 200px;
    }
</style>
