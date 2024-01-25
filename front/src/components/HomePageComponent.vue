<template>
    <div class="bigContainer">
        <div class="container">
            <div class="title">
                <h1>{{homePageComponents[componentPage as keyof typeof homePageComponents].title}}</h1>
                <div class="subtitle">
                    <p>{{homePageComponents[componentPage as keyof typeof homePageComponents].subtitle}}</p>
                </div>
            </div>
            <div v-if="homePageComponents[componentPage as keyof typeof homePageComponents].title === 'Produits'">
                <button @click="goToProducts()" class="buttons">{{homePageComponents[componentPage as keyof typeof homePageComponents].button}}</button>
            </div> 
            <div v-if="homePageComponents[componentPage as keyof typeof homePageComponents].title === 'Configurateur'">
                <button @click="goToConfigurator()" class="buttons">{{homePageComponents[componentPage as keyof typeof homePageComponents].button}}</button>
            </div> 
        </div>
        <div class="img" >
            <img :src="require(`@/assets/homePageElements/${homePageComponents[componentPage as keyof typeof homePageComponents].img}`)"/>
        </div>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';

    export default defineComponent({
        name: 'HomePageComponent',
        props:{
            componentPage: String
        },
        data(){
            return{
                homePageComponents: {
                    Products: {title:"Produits",subtitle:"Voir tous les produit",button:"Les produits →",img:"products.gif"},
                    Configurator: {title:"Configurateur",subtitle:"Créer ton setup !",button:"Par ici →",img:"gearing.gif"}
                }
            }
        },
        methods:{
            goToProducts(){
                this.$router.push("/products");
            },
            goToConfigurator(){
                this.$router.push("/configurator");
            }
        }
    });
</script>


<style scoped>
    .bigContainer{
        margin: 50px;
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        justify-content: space-around;
        height:300px;
        border:3px solid rgba(96, 108, 148, 0.58);
        border-radius: 50px;
    }

    .container{
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        padding:30px;
    
    }

    title{
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
    }

    h1,p{
        color:#344B9D;
    ;
    }

    h1{
        font-size: 50px;
    }

    .buttons{
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        background: #4F9CF9;
        border-radius: 8px;
        width: 150px;
        height: 60px;
        border: 2px solid white;
        cursor: pointer;
    }

    .subtitle{
        display : flex;
        flex-wrap: wrap;
        margin-top:-45px;
        margin-bottom:10px;
    }

    .img{
        display:flex;
        justify-content: center;
        align-items: center;
    }

    img{
        width: 250px;
    }
</style>