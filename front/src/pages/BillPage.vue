<template>
    <div class="container">
        <table>
            <tr>
                <td width="75px"><img :src="require('@/assets/logo2.png')" alt="Logo"></td>
                <td width="300px"><div class="title">Facture</div></td>
                <td></td>
            </tr>
        </table> 
        <br><br>
        <h2>Votre commande est confirmée !</h2>
        <p class="pub"> 
            Des bons d'achat et des bons plans personnalisés !<br>
            Inscrivez-vous pour recevoir des offres personnalisées en ligne, adaptées à vos habitudes d'achats et vos envies.
        </p><br>
        <table class="infoTable">
            <tr>
                <td>
                    <strong>Date:</strong> {{date}}<br>
                    <strong>Type:</strong> Récapitulatif du configurateur<br>
                </td>
                <td>
                    <strong>E-mail:</strong> firstname@company.com<br>
                    <strong>Téléphone:</strong> 03 20 14 04 15<br>
                </td>
            </tr>
        </table><br>
        <h2><font-awesome-icon style="color:#344B9D;" :icon="['fas','shopping-cart']"/> Vos articles</h2>
        <table class="articlesTable">
            <tr>
                <td width="20%" class="column-header">Image</td>
                <td width="20%" class="column-header">Article</td>
                <td width="40%" class="column-header">Details</td>
                <td width="20%" class="column-header">Prix</td>
            </tr>
            <tr v-for="article in basket" :key="article.urlId">
                <td class="row"><img class="article-picture" ref="image" :src="article.image"></td>
                <td class="row">{{article.name}}</td>
                <td class="row">{{article.extendedName}}</td>
                <td class="row">{{article.price}}  {{article.currency}}</td>
            </tr>
        </table><br>
        <table width="100%" style="background:#eee;padding:20px;">
            <tr>
                <td>
                    <table width="300px" style="float:right">
                        <tr>
                            <td><strong>Total:</strong></td>    
                            <td style="text-align:right">{{totalPrice.toFixed(2)}} EUR</td>
                        </tr>
                    </table>
                </td>
            </tr>
        </table>
        <div class="alert">* Garantie légale de conformité de 2 ans à compter de la remise du produit<br><br><strong>Droit de rétractation :</strong> vous pouvez vous rétracter en contactant notre Service après vente en lui adressant le formulaire de rétractation type dans un délai de quatorze jours à compter de la réception du produit. Vous devrez ensuite restituer le produit sans retard excessif et au plus tard quatorze jours suivant la date de communication de votre décision, en parfait état de revente.</div>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';
    import { useStore, Product } from '../store';

    export default defineComponent({
        name: 'BillPage',
        data(){
            return {
                store: useStore(),
                date: '',
                basket: new Array<Product>()
            }
        },
        created(){
            const today = new Date();
            this.date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
        },
        mounted(){
            this.basket = this.store.getters["getBasket"]
            this.handleImage();
        },
        computed:{
            totalPrice: function() {
                let price = 0;
                this.basket.forEach(element => {
                    price += element.price
                });
                return price
            }
        },
        methods:{
            toDataURL(url: string, callback: Function) {
                //Convert url to base64 image
                var xhr = new XMLHttpRequest();
                xhr.onload = function() {
                    var reader = new FileReader();
                    reader.onloadend = function() {
                        callback(reader.result);
                    }
                    reader.readAsDataURL(xhr.response);
                };
                xhr.open('GET', url);
                xhr.responseType = 'blob';
                xhr.send();
            },
            handleImage(){
                this.basket.forEach(element => {
                    this.toDataURL(element.image, function(dataUrl: string) {
                        element.image=dataUrl
                    })
                });
            }
        }
    });
</script>

<style scoped>
    .container{
        max-width: 680px; 
        margin:0 auto;
        font-family: Helvetica, sans-serif;
        font-size:13px;
    }

    table{
        width: 100%;
        border-collapse: collapse;
    }

    img{
        width:75px;
        height:75px;  
    }

    .title{
        background: #c5d0ff;
        border-left: 15px solid #fff;
        padding-left: 30px;
        font-size: 26px;
        font-weight: bold;
        letter-spacing: -1px;
        height: 73px;
        line-height: 75px;
    } 

    .infoTable td{
        width: 50%; 
        background: #eee;
        padding: 20px;
    }

    .articlesTable{
        border-bottom:1px solid #eee;
    }
    .column-header{
        background:#eee;
        text-transform: uppercase;
        padding: 15px;
        font-size: 11px;
        border-right: 1px solid #eee;
    }

    .row{
        padding:7px 14px;
        border-left:1px solid #eee;
        border-right:1px solid #eee;
        border-bottom:1px solid #eee;
    }

    .alert{
        background: #c5d0ff;
        padding: 20px;
        margin: 20px 0;
        line-height: 22px;
        color:#333
    }

    .socialmedia{
        background:#eee;
        padding:20px; 
        display:inline-block
    }

    .pub{
        font-style: italic;
    }
</style>
  