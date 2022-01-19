const { Home } = require( '../src/components/home' );
const { NotFound } = require( '../src/components/app' );
const { Orders } = require( '../src/components/orders' );
const { Ordercook } = require( '../src/components/ordercook' );
const { Auth } = require( '../src/components/auth' );
const { CheckUserPromo } = require( '../src/components/check_user_promo' );



module.exports = [
    {
        path: '/',
        exact: true,
        component: Home,
        title: 'Оформление заказа',
        code: 200
    },
    {
        path: '/orders',
        exact: true,
        component: Orders,
        title: 'Оформленные заказы',
        code: 200
    },
    {
        path: '/ordercook',
        exact: true,
        component: Ordercook,
        title: 'Заказы на кухне',
        code: 200
    },
    {
        path: '/auth',
        exact: true,
        component: Auth,
        title: 'Авторизация',
        code: 200
    },
    {
        path: '/check_user_promo',
        exact: true,
        component: CheckUserPromo,
        title: 'Проверка промокода клиента',
        code: 200
    },
];