<template>
    <div class="container">
        <div class="title-container">
            <h1 class="first-four">4</h1>
            <div>
                <img src="../assets/notFoundElements/gearing.png" alt="gearing"/>
            </div>
            <h1 class="second-four">4</h1>
        </div>
       
        <div class="bottom_container">
            <h1>Page not found</h1>
            <p1>The page you are looking for does not exist, either go back to the homepage or go there automatically in 5 seconds</p1>
        </div>

        <router-link to="/">
            <button> Back to Home Page if you don't click in {{ seconds }} {{ sec }} ...</button>
        </router-link>
    </div>

 </template>
  
<script lang="ts">
    import { defineComponent } from 'vue';

    export default defineComponent({
        name: "NotFound",
        data() {
            return {
                seconds: 5,
                sec: "seconds",
            };
        },
        methods:{
            timer(){
                if (this.seconds>0){
                    setTimeout(() => {
                        this.seconds--;
                        this.timer()
                    }, 1000);
                }
                if (this.seconds == 1) {
                    this.sec = "second";
                }
                if (this.seconds == 0) {
                    this.$router.push("/");
                }
            }
        },
        created(){
            this.timer()
        }
    })
</script>
  
<style scoped>
    *{
        margin:0;
        padding:0;
        box-sizing:border-box;
    }

    body{
        overflow:hidden;
        background-color: #f4f6ff;
    }

    .container{
        width:100vw;
        height:100vh;
        justify-content: center;
        align-items: center;
        font-family: "Poppins", sans-serif;
        left:6vmin;
        text-align: center;
        margin-top: 50px;
    }

    .title-container{
        display: flex;
        flex-direction: row;
        justify-content: center;
        color: #344B9D;

    }

    .first-four{
        left:6vmin;
        font-size:40vmin;
    }

    .second-four{
        right:18vmin;
        z-index: -1;
        font-size:40vmin;
    }

    img{
        width:100%;
    }

    .bottom_container{
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    button {
        background-color: white;
        padding: 16px 32px;
        color: black; 
        border: 2px solid  #344B9D;
        font-size: large;
        margin-top: 15px;
        cursor: pointer;
    }

    button:hover {
        background-color:  #344B9D;
        color: white;
    }

    h1{
        margin-block: 10px;
        color:#344B9D;
    }

    p1{
        color:brown;
    }
</style>
  