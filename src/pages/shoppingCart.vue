<template>
   <div>
    
    <div class = "container ">
        <div class="row">
            <div class="col "> <Item/></div>
            <div class="col"> <Item/></div>
        </div>
    </div>
   </div>

</template>

<script >
import Item from '../components/Item.vue';

export default {
    name: 'ShoppingCart',
    components: {
        Item
    }
};
</script >

<style lang="scss" scoped>

</style>