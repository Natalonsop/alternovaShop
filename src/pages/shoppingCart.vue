<template>
    <div class="container">
        <div class="row">
            <div class="col-6">
                <router-link to="/add" class="btn btn-primary mb-2" >
                    <i class="bi bi-clipboard2-plus-fill"></i>
                </router-link>
                <div class="card-group">
                    <div v-for="item in items" :key="item.id">
                        <Item :item="item"/>
                    </div>
                </div>  
            </div>
            <div class="col-6">
                <div class="d-flex">
                    <h6><span class="badge bg-secondary">$ {{amount}}</span></h6>
                    <button class="btn btn-success mb-2" @click="buyCart" :disabled="!cart.length">
                        Comprar
                    </button>
                </div>
                <div class="card-group">
                    <div v-for="item in cart" :key="item.id">
                        <Item :item="item"/>
                    </div>
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
            amount: 0,
            items: [],
            cart: [] 
        }
    },
    mounted() {
        get('http://localhost:3000/items')
        .then(response => {
            this.items = response;
        });
        get('http://localhost:3000/cart')
        .then(response => {
            this.cart = response;
            this.amount = response.reduce((accumulator, item) => {
                return accumulator + (item.unit_price * item.stock);
            }, 0);
        });
    },
    methods: {
        buyCart() {
            let dataStr = JSON.stringify({ ...this.cart, amount: this.amount });
            let dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);

            let exportFileDefaultName = 'data.json';

            let linkElement = document.createElement('a');
            linkElement.setAttribute('href', dataUri);
            linkElement.setAttribute('download', exportFileDefaultName);
            linkElement.click();
        }
    }
    

}

</script >

<style lang="scss" scoped>

</style>