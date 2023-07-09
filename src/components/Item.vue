
<template>
    
    <div>
        
        <table>
            <tbody>  
                <tr>
                    <td class = "s-img" colspan="2"><img src="../assets/Images/doggo.gif">
                        <a class="btncontacto" href="Contacto.html" 
                            style="position:relative ; left: 205px ; bottom: 86% ;">
                        <button class="btn btn-primary" type="on-submit" @click="handleClick" >
                            <i class="bi bi-trash-fill"></i>
                        </button>
                        </a>
                        <a class="btncontacto" href="Contacto.html" 
                            style="position:relative ; right: 40px ; bottom: 86% ;">
                        <button class="btn btn-primary" type="on-submit" @click="handleClick" >
                            <i class="bi bi-pencil-fill"></i>
                        </button>
                        </a>
                    </td>
                    
                </tr>
                <tr>
                    <td colspan="2">{{ name }}</td>
                </tr>
                <tr>
                    <td colspan="2">{{ precio }}</td>
                </tr>
                <tr>
                   <td><input type="number" id="tentacles" name="tentacles"
       min="1" max="100"></td> 
                    <td>
                    <div class="input-group">
                        <button class="btn btn-primary" type="on-submit" @click="handleClick" >
                            <i class="bi bi-cart-plus-fill"></i>
                        </button>
                    </div>
                    </td>
                </tr>
            </tbody>
        </table>
        <br>
    </div>
</template>

<script >
 export default {
    props: {
        name: String,
        precio: Number,
        stock: Number
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