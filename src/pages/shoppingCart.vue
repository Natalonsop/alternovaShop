<template>
   <div>
    
    <div class = "container ">
        <div class="row">
            <div class="col-4" v-for="value in Data.products">
                <item :name=value.name :precio=value.unit_price :stock=value.stock /> 
            </div>
        </div>
    </div>
   </div>

</template>

<script >
import Item from '../components/Item.vue';
import Data from '../assets/data/datos.json'


export default {
    data(){return {Data}} ,
    name: 'ShoppingCart',
    components: {
        Item
    }
};

</script >

<style lang="scss" scoped>

</style>