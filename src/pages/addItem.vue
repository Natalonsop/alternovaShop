<template>
    <div>
         <!--aqui van los estilos anadir productos form --> 
        <form @submit.prevent="submitForm" v-if="!formSubmitted">
        <span>Nombre</span><br>
        <input 
            v-model="nombre"
            type="text"
            placeholder="Nombre producto" 
        /><br>
        <span>Precio</span><br>
        <input 
            v-model="precio"
            type="text"
            placeholder="Precio por unidad" 
        /><br>
        <span>Stock</span><br> <input 
            v-model="stock"
            type="number"
            placeholder="Nombre producto" 
        /><br>
        <span>Tipo: </span>
        <select v-model="tipo">
            <option disabled value="">Seleccione un elemento</option>
            <option>Tecnologia</option>
            <option>Deportes</option>
            <option>Construccion</option>
        </select>
        
        <br>
        <input 
            class="submit" 
            type="submit" 
            value="Guardar"
        >
        </form>
        <div v-if="formSubmitted">
        <h3>Item añadido </h3>
        <p>Nombre Producto: {{ nombre }}</p>
        <p>Precio: {{ precio }}</p>
        <p>Stock: {{ stock }}</p>
        <p>Tipo: {{ tipo }}</p>
        <small>Click on run to launch the app again.</small>
        </div>
    </div>
</template>

<script >
  export default {
    name: 'AddItem' ,
    data() {
      return {
        nombre: "",
        precio: "",
        stock: "",
        tipo: "",
        formSubmitted: false
      };
    },
    methods: {
      submitForm: function () {
        this.formSubmitted = true
      }
    },
  };
</script>

<style>
form {
    padding: 10px;
    border: 2px solid black;
    border-radius: 5px;
    height: 25% ;
    width: 25%;
  }

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