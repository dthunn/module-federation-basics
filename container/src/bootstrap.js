import { mount } from 'products/ProductsIndex'
import { mount as second } from 'cart/CartShow'

mount(document.querySelector('#my-products'))
second(document.querySelector('#dev-cart'))
