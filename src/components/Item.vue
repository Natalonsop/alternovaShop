<template>
    <div>
        <table>
            <tbody>
                <tr>
                    <td class = "s-img" colspan="2"><img src="../assets/Images/doggo.gif"></td>
                </tr>
                <tr>
                    <td colspan="2">Iphone 14 pro ma</td>
                </tr>
                <tr>
                    <td colspan="2">5000</td>
                </tr>
                <tr>
                    <td>15</td>
                    <td>
                        <input 
                        class="submit" 
                        type="submit" 
                        value="Guardar">
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script >
 export default {
    name: 'Item', // NO BORRAR!!!!
  }
</script>

<style>
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