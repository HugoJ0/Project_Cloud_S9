
<template>
    <div class="dataSheet">
        <div>
            <h1> Fiche Technique</h1>
        </div>
        <table v-for="(feature, label) in product.fiche" :key="label">
            <th>
                {{label}}
            </th>
            <tr v-for="(value, name) in feature" :key="name">
                <td id="first-column">{{name}}</td>
                <td id="second-column">{{value}}</td>
            </tr>
        </table>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';
    import { useStore, Product } from '../store'
    import { getProduct } from '../products'

    export default defineComponent({
        name: 'ContainerDataSheet',
        data(){
            return {
                store: useStore(),
                product: {} as Product
            }
        },
        methods:{
            Product(){
                getProduct(this.$route.params.category, this.$route.params.urlId)
                    .then(data => this.product = data)
            }
        },
        mounted(){
            this.Product();
        }
    });
</script>

<style scoped>
    .dataSheet{
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
        justify-content: center;
        margin : 20px;
        align-items: center;
        background: rgba(52, 75, 157, 0.1);
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 50px;
    }

    table{
        width:70%;
        margin: 30px;
        border-collapse:collapse;
        border:2px solid;
        border-color: transparent  transparent rgba(52, 75, 157, 0.6) rgba(82, 98, 155, 0.6) ;
    }

    th{
        margin-bottom: 20px;
        display: flex;
        justify-content: space-between;
        width: 100%;
        padding: 16px 20px;
        font-size: 25px
    }

    td{
        width: 40%;
        border:1px solid rgba(124, 124, 124, 0.25);
    }

    #second-column{
        width: 70%;
    }
</style>
