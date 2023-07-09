
<template>
        <div class="card mx-1 mb-1" style="width: 10rem;">
            <img src="../assets/Images/doggo.gif" class="card-img-top" alt="...">
            <ul class="list-group list-group-flush">
                <li class="list-group-item text-truncate" alt="item.name">{{ item.name }}</li>
                <li class="list-group-item">{{ item.unit_price }}</li>
                <li class="list-group-item">
                    <button class="btn btn-primary" @click="decreaseQuantity" :disabled="quantity === 0" >
                        <i class="bi bi-bag-dash-fill" ></i>
                    </button>
                    {{ quantity }}
                    <button class="btn btn-primary" @click="increaseQuantity" :disabled="quantity === item.stock" >
                        <i class="bi bi-bag-plus-fill"></i>
                    </button>
                </li>
            </ul>
            <div class="card-body">
                <button class="btn btn-primary" @click="editItem"  >
                    <i class="bi bi-pencil-fill"></i>
                </button>
                <button class="btn btn-danger" @click="deleteItem" >
                    <i class="bi bi-trash-fill"></i>
                </button>
                <button class="btn btn-primary" >
                    <i class="bi bi-cart-plus-fill"></i>
                </button>
            </div>
        </div>
</template>

<script >
import { del } from '../httpHelper.js';
 export default {
    name:'Item',  
    props: {
        item: {
            id: String,
            name: String,
            unit_price: Number,
            stock: Number
        }
    },
    data(){
        return{
            quantity:0
        }
    },
    methods:{
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
               // this.$forceUpdate();
               console.log(response)
            }) 
        },
        editItem(){
            this.$router.push({ path: '/edit', query: this.item })
        }
    }
   



    // NO BORRAR!!!! variables que se quieran leeer nombre precio stock 
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