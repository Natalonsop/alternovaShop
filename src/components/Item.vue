
<template>
        <div class="card mx-1 mb-1" style="width: 10rem;">
            <img src="../assets/Images/doggo.gif" class="card-img-top" alt="...">
            <ul class="list-group list-group-flush">
                <li class="list-group-item text-truncate" alt="item.name">{{ item.name }}</li>
                <li class="list-group-item">${{ item.unit_price }}</li>
                <li class="list-group-item" v-if="!item.inCart" >
                    <button class="btn btn-danger" @click="decreaseQuantity" :disabled="quantity === 0">
                        <i class="bi bi-bag-dash-fill" ></i>
                    </button>
                    <span class="badge bg-info text-dark">{{ quantity }}</span>
                    <button class="btn btn-primary" @click="increaseQuantity" :disabled="quantity == item.stock">
                        <i class="bi bi-bag-plus-fill"></i>
                    </button>
                </li>
            </ul>
            <div class="card-body">
                <button class="btn btn-primary" @click="editItem" v-if="!item.inCart">
                    <i class="bi bi-pencil-fill"></i>
                </button>
                <button class="btn btn-danger" @click="deleteItem" v-if="!item.inCart">
                    <i class="bi bi-trash-fill"></i>
                </button>
                <button class="btn btn-primary" @click="addToCart" :disabled="quantity === 0" v-if="!item.inCart">
                    <i class="bi bi-cart-plus-fill"></i>
                </button>
                <div v-if="item.inCart">
                    <button class="btn btn-danger" @click="decreaseCart">
                        <i class="bi bi-bag-dash-fill" ></i>
                    </button>
                    <span class="badge bg-info text-dark">{{ item.stock }}</span>
                </div>
            </div>
        </div>
</template>

<script >
import { get, del, put, post } from '../httpHelper.js';

 export default {
    name:'Item',  
    props: {
        item: {
            id: String,
            name: String,
            unit_price: Number,
            stock: Number,
            inCart: Boolean
        }
    },
    data(){
        return{
            quantity: 0,
            quantityCart: 0
        }
    },
    methods: {
        increaseQuantity(){
            this.quantity++
        },
        decreaseQuantity(){
            if (this.quantity <= 0) {
                this.quantity=0
            }
            else {
                this.quantity--;
            }
        },
        deleteItem(){
            del(`http://localhost:3000/items/${this.item.id}`, { })
            .then(response => {
               window.location.reload();
            }) 
        },
        editItem(){
            this.$router.push({ path: '/edit', query: this.item })
        },
        addToCart(){
            if(this.quantity <= this.item.stock) {
                get(`http://localhost:3000/cart/${this.item.id}`)
                .then(response => {
                    if (Object.keys(response).length) {
                        put(`http://localhost:3000/cart/${this.item.id}`, { body: { ...response, stock: (response.stock + this.quantity) } })
                        .then(response => {
                            put(`http://localhost:3000/items/${this.item.id}`, { body: { ...this.item, stock: (this.item.stock - this.quantity) } })
                            .then(response => {
                                window.location.reload();
                            }) 
                        }) 
                    }
                    else {
                        post('http://localhost:3000/cart', { body: { ...this.item, stock: this.quantity, inCart: true } })
                        .then(response => {
                            put(`http://localhost:3000/items/${this.item.id}`, { body: { ...this.item, stock: (this.item.stock - this.quantity) } })
                            .then(response => {
                                window.location.reload();
                            }) 
                        })
                    }
                })

            }
        },
        decreaseCart(){
            this.item.stock--;
            if (this.item.stock > 0) {
                put(`http://localhost:3000/cart/${this.item.id}`, { body: { ...this.item, stock: this.item.stock} })
                .then(response => {
                    get(`http://localhost:3000/items/${this.item.id}`)
                    .then(response => {
                        let newStock = response.stock + 1;
                        put(`http://localhost:3000/items/${response.id}`, { body: { ...response, stock: newStock } })
                        .then(response => {
                            window.location.reload();
                        });
                    }) 
                });
            }
            else {
                del(`http://localhost:3000/cart/${this.item.id}`, {})
                .then(response => {
                    get(`http://localhost:3000/items/${this.item.id}`)
                    .then(response => {
                        let newStock = response.stock + 1;
                        put(`http://localhost:3000/items/${response.id}`, { body: { ...response, stock: newStock } })
                        .then(response => {
                            window.location.reload();
                        });
                    }) 
                }) 
            }
        }
    }
  }
</script>

<style>
@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css");

table , td, th {
	border: 1px solid #595959;
	border-collapse: collapse;
}
td, th {
	padding: 1px;
	width: auto;
	height: 1px;
}
.s-img{
    width: 200px;
	height: 200px;
}
th {
	background: #f0e6cc;
}
.even {
	background: #fbf8f0;
}
.odd {
	background: #fefcf9;
}
</style>