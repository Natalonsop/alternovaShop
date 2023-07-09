<template>
    <div class="container">
        <div class="row">
            <div class="col-6">
                <router-link to="/add" class="btn btn-primary mb-2 float-right" >
                    <i class="bi bi-clipboard2-plus-fill"></i>
                </router-link>
                <div class=" card-group">
                    <div class=" " v-for="item in items" :key="item.id">
                        <Item :item="item"/>
                    </div>
                </div>  
            </div>
            <div class="col-6">
                <div class="row">
                </div> 
            </div>
        </div>    
    </div>    
</template>

<script >
import { get } from '../httpHelper.js';
import Item from '../components/Item.vue';


export default {
    name: 'ShoppingCart',
    components: {
    Item
},
    data() {
        return {
            items: [],
            cart: [] 
        }
    },
    mounted() {
        get('http://localhost:3000/items')
        .then(response => {
            this.items = response;
        }) 
    }

}

</script >

<style lang="scss" scoped>

</style>