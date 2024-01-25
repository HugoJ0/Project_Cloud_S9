<template>
    <div>
        <CategoryProductsComponent v-for="category in categories" :key="category" :category="category"></CategoryProductsComponent>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';
    import CategoryProductsComponent from '../components/CategoryProductsComponent.vue';

    export default defineComponent({
        name: "ProductsPage",
        data() {
            return {
                categories: ["processeurs", "aio_coolers", "motherboards", "ram", "graphic_cards", "psu", "cases"]
            };
        },
        components: { CategoryProductsComponent }
    });
</script>