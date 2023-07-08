import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import ShoppingCart from './pages/shoppingCart.vue'
import AddItem from './pages/addItem.vue'
import EditItem from './pages/editItem.vue'

const routes = [
    {
        path: '/', component: ShoppingCart
    },
    {
        path: '/add', component: AddItem
    },
    {
        path: '/edit', component: EditItem
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes    
})

const app = createApp(App)

app.use(router)

app.mount('#app')

