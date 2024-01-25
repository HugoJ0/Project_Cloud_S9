<template>
    <div>
        <div class="product">
            <div class="Bigcontainer">
                <div class="title">
                    <ul id="titles">
                        <li>
                            <h1>{{product.name}}</h1>
                        </li>
                        <li>
                            <p>{{product.extendedName}}</p>
                        </li>
                    </ul>
                </div>

                <table class="container">
                    <tr>
                        <th class="photo"> 
                            <img :src="product.image"/> 
                        </th>
                        <th>
                            <div class="containerDescription">
                            <div class="description">{{product.description}}</div>
                            </div>
                        </th>
                        <th>
                            <div class="container_price">
                                <div class="price">
                                    {{product.price}} {{product.currency}}
                                </div>
                                <br/>
                                <button class="btnCompatible" @click="configureWithProduct" v-if="isCompatible">Configure ton PC avec ce produit</button>
                                <button disabled class="btnIncompatible" v-else>Produit incompatible avec les produits dans le panier</button>
                            </div>
                        </th>
                    </tr>
                </table>
            </div>
        </div>
        <ContainerDataSheet/>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';
    import { useStore, Product } from '../store'
    import { getProduct, checkCompat } from '../products'
    import ContainerDataSheet from '../components/ContainerDataSheet.vue'

    const categoryNames = {
        processeurs: {singular: "processeur"},
        aio_coolers: {singular: "aio_cooler"},
        graphic_cards: {singular: "graphic_cards"},
        motherboards: {singular: "motherboard"},
        psu: {singular: "psu"},
        ram: {singular:"ram"},
        cases: {singular:"case"}
    }

    export default defineComponent({
        name: 'ContainerProduct',
        components: {
            ContainerDataSheet
        },
        data(){
            return {
                store: useStore(),
                product: {} as Product,
                isCompatible: false
            }
        },
        methods:{
            getProduct(){
                getProduct(this.$route.params.category, this.$route.params.urlId)
                .then(data => this.product = data)
            },
            async checkCompat(){
                this.isCompatible = await checkCompat(this.$route.params.category as string, this.$route.params.urlId as string, this.store.getters["getBasket"])
            },
            configureWithProduct(){
                let product = this.store.getters["getBasket"].filter((el: Product) => el.category == categoryNames[this.$route.params.category as keyof typeof categoryNames].singular)
                if(product.length>0){
                this.store.commit("deleteProduct", product[0])
                }
                this.store.commit("addProduct", this.product)
                this.$router.push("/configurator")
            }
        },
        mounted(){
            this.getProduct();
            this.checkCompat();
        }
    });
</script>

<style scoped>
    .product{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        margin : 20px;
        align-items: center;
        background: rgba(52, 75, 157, 0.1);
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 50px;
    }

    .title{
        display:flex;
        flex-wrap: wrap;
        font-size: small;
    }

    li{
        list-style-type:none;
    }

    .Bigcontainer{
        margin : 50px;
        display : flex;
        flex-wrap: wrap;
    }

    th{
        text-align: center;
        flex-wrap: wrap;
        width:25%;
    }

    .photo{
        border-left: solid 10px ;
        border-color: rgba(82, 98, 155, 0.6)  transparent  transparent rgba(52, 75, 157, 0.6);
        background-color: white;
        border-radius: 20px;
    }

    .containerDescription{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: stretch;
    }

    .description{
        font-size: small;
    }

    .container_price{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items:center;
    }

    .price{
        display: flex;
        justify-content: center;
        align-items:center;
        width: 250px;
        height: 150px;
        background: rgba(52, 75, 157, 0.6);
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 20px;
        color:aliceblue;
        font-weight: bold;
        font-size: xx-large;
    }

    button{
        padding: 16px 32px;
        border: 2px solid rgba(52, 75, 157, 0.6);
        font-size: large;
        cursor: pointer;
    }

    .btnCompatible {
        background-color: white;
        color: black; 
    }

    .btnCompatible:hover {
        background-color: rgba(52, 75, 157, 0.6);
        color: white;
    }

    .btnIncompatible{
        background-color: red;
        color: white;
        cursor: auto;
    }
</style>
