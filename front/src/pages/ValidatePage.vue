<template>
    <div class="container">
        <div>
            <h1>Téléchargez votre facture ici !</h1>
            <button @click="printDownload" class="btnDownload"><font-awesome-icon :icon="['fas','file-download']"/> Download</button>
        </div>
        <div class="line"></div>
        <div>
            <h1>Aperçu :</h1>
            <BillPage id="BillPageComp" class="preview"></BillPage>
        </div>
  </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';
    import BillPage from './BillPage.vue';
    const html2pdf = require("html2pdf.js");

    export default defineComponent({
        name: "ValidatePage",
        components: { BillPage },
        methods:{
            printDownload(){
                const BillPageComp = document.querySelector("#BillPageComp");
                let opt = {
                    margin: 1,
                    filename: "bill.pdf",
                    image: { type: 'jpeg', quality: 0.98 }
                };
                html2pdf().from(BillPageComp).set(opt).save()
            }
        }
    });
</script>

<style scoped>
    .container{
        display: flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
        height: 100%;
        width: 100%;
    }

    h1{
        font-family:"Montserrat", sans-serif;
        margin:35px;
    }

    button{
        padding: 16px 32px;
        border: 2px solid rgba(52, 75, 157, 0.6);
        font-size: large;
        cursor: pointer;
    }

    .btnDownload:hover{
        animation: ho-1 0.5s ease-in;
        animation-fill-mode:forwards;
        background-color: rgba(52, 75, 157, 0.6);
        color: white;
    }

    .preview{
        border: 2px solid rgba(52, 75, 157, 0.6);
    }

    .line {
        margin: 50px;
        width: 75%;
        height: 2px;
        background: rgba(52, 75, 157, 0.6);
    }
</style>