const { Home } = require( '../src/components/home' );
const { NotFound } = require( '../src/components/app' );
const { Orders } = require( '../src/components/orders' );
const { Ordercook } = require( '../src/components/ordercook' );
const { Auth } = require( '../src/components/auth' );

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
        path: '*',
        component: NotFound,
        title: 'Страница не найдена',
        code: 404
    },
];