<template>
    <nav class="navigation">
        <img :src="require('@/assets/logo.png')" alt="Logo">
        <ul>
            <li class="elementNav">
                <router-link to="/">Page d'accueil</router-link>
            </li>
            <li class="elementNav">
                <router-link to="/products">Produits(service1)</router-link>
            </li>
            <li class="elementNav">
                <router-link to="/composants">Composants(Service2)</router-link>
            </li>
            <li class="elementNav">
                <router-link to="/configurator">Configurateur</router-link>
            </li>
        </ul>
    </nav>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';

    export default defineComponent({
        name: 'NavBar',
    })
</script>

<style scoped>
    nav.navigation ul li.elementNav{
        list-style-type: none;
        display: inline-block;
        margin-right: 6%;
        align-content: center;
        color: #F6F6F6;
        text-shadow: 2px 2px 4px #000000;

    }

    nav.navigation ul li.elementNavv{
        list-style-type: none;
        display: inline-block;
        margin-right: 6%;
        align-content: center;
        color: #000000;
        border-radius: 15%;
        padding: 15px 15px 15px 15px;
    }

    nav.navigation ul li.elementNav a{
        text-align: center;
        text-decoration: none;
        background-color: #5D7963;
        color: #F6F6F6;
        padding: 10px;
        font-size: 150%;
        background:  rgba(216, 252, 223, 0.0);   
    }

    nav.navigation ul li.elementNavv a{
        text-align: center;
        text-decoration: none;
        background-color: #5D7963;
        color: #000000;
        padding: 10px;
        font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        font-size: 150%;
        background:  rgba(216, 252, 223, 0.0);
        position: relative;
        
    }

    nav.navigation ul li.elementNavv a span{
        display: none;
    }

    nav.navigation ul li.elementNavv a:hover{
        background: none;
        z-index: 500;
        cursor:pointer;

    }

    nav.navigation ul li.elementNavv a:hover span{
        display: inline; 
        position: absolute;
        top: 50px; 
        background: white;
        color: black;
        padding: 3px;
        border: 1px solid #e5d8d0;
        border-left: 4px solid #e5d8d0;
        font-size: large;
    }

    nav.navigation ul li.elementNav:hover a{
        color: #F6F6F6;
        background:  rgba(93, 121, 99, 0.0);
        transition: 0.3s all;
    }
    
    nav.navigation{
        background-color: #344B9D;
        padding: 10px;
        text-align: center;
        position: relative;
        background-size: cover;
    }

    .elementNav:hover{
        border : 3px solid aliceblue;
        border-radius: 10px;
    }
    .navigation{
        display: flex;
        width:100%;
    }

    img{
        width: 200px;
    }

    ul{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
    }
</style>

