<template>
    <div>
        <br>Liste des composants obtenus depuis la base de donnée :<br><br>
        <li v-for="composant in composants" :key="composant">
            <b>{{ composant["marque"] }}</b> {{ composant["nom"] }} = {{ composant["prix"] }} €
        </li>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';
    import { getComposants } from '../composants'

    export default defineComponent({
        name: 'ComposantsPage',
        data(){
            return {
                composants: {},
            }
        },
        methods:{
            getComposantList(){
                getComposants()
                .then(data => this.composants = data)
            }
        },
        mounted(){
            this.getComposantList();
        }
    });
</script>