<template>
    <div class="container">
        <h1>{{categoryName}}</h1>
        <div class="SearchBar">
            <input class="searchingBar" type="text" v-model="searchQuery" placeholder="Search your product..."/>
            <p class="searchBarIcon"><font-awesome-icon id="search" :icon="['fas','search']"/></p>
        </div>
        <div class="containerTable">
            <table>
                <tr v-for="product in filteredProducts" :key="product.urlId">
                    <td>
                        <img :src=product.image >
                    </td>
                    <td>
                        <strong>{{product.name}}</strong>
                        <br>
                        {{product.extendedName}}
                        <br>
                        <button class="myButton" @click="goToProduct(product.urlId)">Voir Fiche Produit</button>
                    </td>
                    <td>
                        <strong>
                            {{product.price}} {{product.currency}}
                        </strong>
                    </td>
                    <td>
                        <input class="radio" type="radio" name="choice" v-model="choosenProduct" v-bind:value="product"/>
                    </td>
                </tr>
            </table>
        </div>
        <div class="buttons">
            <button @click="validateChoice" class="myButton" >Valider</button>
            <button @click="returnToConfigurator" class="myButton" >Retour</button>
        </div>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';
    import { useStore, Product } from '../store'
    import { getProductsCompat } from '../products'
    
    const categoryNames = {
        processeurs: {fr: "Processeurs", singular: "processeur"},
        aio_coolers: {fr: "Ventirad", singular: "aio_cooler"},
        graphic_cards: {fr: "Cartes Graphiques", singular: "graphic_cards"},
        motherboards: {fr: "Cartes mères", singular: "motherboard"},
        psu: {fr: "Alimentations", singular: "psu"},
        ram: {fr:"Mémoire vive",singular:"ram"},
        cases: {fr:"Boitiers", singular:"case"}
    }

    export default defineComponent({
        name: 'ConfiguratorChoicePage',
        data(){
            return{
                store: useStore(),
                products: new Array<Product>(),
                choosenProduct: {} as Product,
                searchQuery:'',
                categoryName: categoryNames[this.$route.params.category as keyof typeof categoryNames].fr
            }
        },
        mounted(){
            this.Products()
        },
        methods:{
            async Products(){
                this.products = await getProductsCompat(this.$route.params.category as string, this.store.getters["getBasket"])
            },
            validateChoice(){
                if (this.choosenProduct.urlId===undefined){
                    alert("Vous n'avez pas choisi de produits")
                }else{
                    if(this.$route.params.type=="edit"){
                        let product = this.store.getters["getBasket"].filter((el: Product) => el.category == categoryNames[this.$route.params.category as keyof typeof categoryNames].singular)
                        this.store.commit("deleteProduct", product[0])
                    }
                    this.store.commit("addProduct", this.choosenProduct)
                    this.$router.push("/configurator")
                }
            },
            returnToConfigurator(){
                this.$router.push("/configurator")
            },
            goToProduct(urlId: string){
                this.$router.push("/product/" + this.$route.params.category + "/" + urlId)
            }
        },
        computed:{
            filteredProducts(): Array<Product>{
                return this.products.filter((el: Product) => el.name.toLowerCase().includes(this.searchQuery.toLowerCase()))
            }   
        }
    });
</script>


<style scoped>
    .buttons{
        display:flex;
        margin:10px;
    }

    .myButton{
        background-color: white;
        border : 2px solid;
        border-color: #344B9D;
        border-radius: 30px;
        color:black;
        width:110px;
        height: 50px;
        margin: 5px;
        font-weight: bold;
        font-size:medium;
    }

    .myButton:hover{
        background-color: #344B9D;
        color: white;
        cursor: pointer;
    }

    img{
        width:200px;
    }

    .container{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

    .containerTable{
        border:solid 3px;
        border-color: #344B9D;
        overflow-y: scroll;
        max-height: 650px;
        width: 85%;
    }

    .SearchBar{
        width: 100%;
        display: flex;
        justify-content: center;
        flex-direction: row;
        align-items: center;
    }

    .searchingBar{
        border: 4px solid #344B9D;
        border-radius: 5px;
        height: 30px;
        width: 50%;
        margin:10px;
    }

    .searchBarIcon{
        color:#344B9D ;
        font-size: 30px;
    }

    table{
        width: 100%;
    }
</style>
