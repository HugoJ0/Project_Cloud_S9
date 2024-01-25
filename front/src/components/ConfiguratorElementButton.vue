<template>
    <button class="button" :style="cssColor">
        <slot/>
    </button>
</template>
  
<script lang="ts">
    import { defineComponent } from 'vue';

    const colorPalette = {
        add: {color:'#344B9D'},
        edit: {color:'#FF8C00'},
        delete: {color:'#FF4500'}
    }

    export default defineComponent({
        name: 'ConfiguratorElementButton',
        props:{
            color:{
                type: (String),
                default: 'add',
                validator:(color: string) => color in colorPalette
            }
        },
        computed: {
            cssColor(){
                return {
                    '--button-border-color': colorPalette[this.color as keyof typeof colorPalette].color,
                    '--button-hover-background-color': colorPalette[this.color as keyof typeof colorPalette].color
                }
            }
        }
    });

</script>

<style scoped>
    .button{
        background-color: white;
        border : 2px solid;
        border-color: var(--button-border-color);
        border-radius: 30px;
        color:var(--button-border-color);
        width:30px;
        height: 30px;
        margin: 5px;
    }

    .button:hover{
        background-color: var(--button-hover-background-color);
        color: white;
        cursor: pointer;
    }
</style>
