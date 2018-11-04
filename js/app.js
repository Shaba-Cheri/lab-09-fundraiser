'use strict';

//clear cart on submit form

//import productsApi from './products-api.js';
import listOrders from './order-page.js';
import custInfo from './checkout-page.js';
import orderReport from './admin-order-report.js';
//import addToCart from './add-to-cart.js';

listOrders.init();
custInfo.init(JSON.parse(localStorage.getItem('cart')));
orderReport.init();


