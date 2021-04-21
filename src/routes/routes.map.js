import Home from '../pages/Home';
import Products from '../pages/Products';
import Cart from '../pages/Cart';


const routes = [
    {
        path: '/',
        component: Home,
        name: 'home',
    },

    {
        path: '/loja',
        component: Products,
        name: 'products',
    },

    {
        path: '/carrinho',
        component: Cart,
        name: 'cart',
    }
]

export default routes