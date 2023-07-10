<template>
    <div>
         <!--aqui van los estilos anadir productos form --> 
        <form @submit.prevent="submitForm" >
            <div class="form-group">
                <label>Nombre</label>
                <input class="form-control"
                v-model="item.name"
                type="text"
                placeholder="Nombre producto"/>
            </div>
            <div class="form-group">
                <label>Precio</label>
                <input class="form-control"
                v-model="item.unit_price"
                type="text"
                placeholder="Precio por unidad"/>
            </div>
            <div class="form-group">
                <label>Stock</label>
                <input class="form-control"
                v-model="item.stock"
                type="text"
                placeholder="Stock"/>
            </div>
            <div class="form-group">
                <label>Tipo de producto</label>
                <select class="form-control" v-model="item.type">
                    <option disabled value="">Seleccione un elemento</option>
                    <option value="technology">Tecnologia</option>
                    <option value="sport">Deportes</option>
                    <option value="building">Construccion</option>
                </select>
            </div>
            <button class="btn btn-success mt-2" type="submit">
               Guardar
            </button>
       
        </form>
    </div>
</template>

<script >
import { post } from '../httpHelper.js';
import { uuid } from 'vue-uuid';
export default {
    name: 'AddItem' ,
    data() {
      return {
        item: {
            id: uuid.v1(),
            name: "",
            unit_price: "",
            stock: "",
            type: "",
            inCart: false
        }
      };
    },
    methods: {
        submitForm: function () {
            post('http://localhost:3000/items', { body: this.item })
            .then(response => {
                this.$router.push('/')
            }) 
        }
    },
  };
</script>

<style>

  input {
    padding: 4px 8px;
    margin: 4px;
  }

  span {
    font-size: 18px;
    margin: 4px;
    font-weight: 500;
  }

  .submit {
    font-size: 15px;
    color: #fff;
    background: #222;
    padding: 6px 12px;
    border: none;
    margin-top: 8px;
    cursor: pointer;
    border-radius: 5px;
  }

</style>