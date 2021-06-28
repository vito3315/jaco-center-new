const { Home } = require( '../src/components/home' );
const { NotFound } = require( '../src/components/app' );
const { Orders } = require( '../src/components/orders' );
const { ordercook } = require( '../src/components/ordercook' );
const { Auth } = require( '../src/components/auth' );

module.exports = [
    {
        path: '/',
        exact: true,
        component: Home,
        code: 200
    },
    {
        path: '/orders',
        exact: true,
        component: Orders,
        code: 200
    },
    {
        path: '/ordercook',
        exact: true,
        component: ordercook,
        code: 200
    },
    {
        path: '*',
        component: NotFound,
        code: 404
    },
];