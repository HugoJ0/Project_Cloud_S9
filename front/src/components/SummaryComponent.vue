<template>
    <div class="container">
        <div>
            <h2>Récapitulatif</h2>
        </div>
        <div class="containerSummary">
            <SummaryElement v-for="product in store.getters['getBasket']" :key="product.urlId" :product="product"/>
        </div>
        <div v-if="store.getters['getBasket'].length!=0">
            <p id="price">Total : {{totalPrice}} €</p>
            <button class="buttons" @click=deleteAllProduct()>Vider</button>
            <button class="buttons" @click=validate()>Valider</button>
        </div>
        <div v-else>
            <p>Choisissez les composants ci-contre, notre configurateur <strong>ajuste automatiquement la sélection en fonction des pièces ajoutées.</strong></p>
        </div>
    </div>
</template>
  
<script lang="ts">
    import { defineComponent } from 'vue';
    import SummaryElement from './SummaryElement.vue'
    import { useStore } from '../store'

    export default defineComponent({
        name: 'SummaryComponent',
        data(){
            return{
                store: useStore()
            }
        },
        components: {
            SummaryElement
        },
        computed:{
            totalPrice(){
                let sum = 0
                for (let i=0;i<this.store.getters["getBasket"].length;i++){
                    sum = sum + this.store.getters["getBasket"][i].price;
                }
                return sum.toFixed(2);
            }
        },
        methods:{
            deleteAllProduct(){
                this.store.commit('deleteAllProduct');
            },
            validate(){
                this.$router.push("/validate")
            }
        }
    });
</script>


<style scoped>
    .container{
        width: 50%;
        margin-left: 60px;
    }

    .containerSummary{
        display: flex;
        flex-direction: column;
        align-items: center;
        overflow-y: scroll;
        max-height: 500px;
        border-left: solid 10px ;
        border-color: rgba(82, 98, 155, 0.6)  transparent  transparent rgba(52, 75, 157, 0.6);
    }

    .buttons{
        background-color: white;
        border : 2px solid;
        border-color: #344B9D;
        border-radius: 30px;
        color:black;
        width:100px;
        height: 50px;
        margin: 5px;
        font-weight: bold;
        font-size:medium;
    }

    .buttons:hover{
        background-color: #344B9D;
        color: white;
        cursor: pointer;
    }

    #price{
        font-weight: bold;
    }
</style>
