const { Home } = require( '../src/components/home' );
const { NotFound } = require( '../src/components/app' );
/*const { Item } = require( '../src/components/item' );
const { Contact } = require( '../src/components/contact' );
const { Actii } = require( '../src/components/actii' );
const { Profile } = require( '../src/components/profile' );

const { Cart } = require( '../src/components/cart' );

const { PageAbout } = require( '../src/components/pageAbout' );
const { PageJob } = require( '../src/components/pageJob' );
const { PageInstPay } = require( '../src/components/pageInstPay' );
const { PageOferta } = require( '../src/components/pageOferta' );
const { PagePolitika } = require( '../src/components/pagePolitika' );*/

module.exports = [
    {
        path: '/',
        exact: true,
        component: Home,
        code: 200
    },
    {
        path: '*',
        component: NotFound,
        code: 404
    },
];