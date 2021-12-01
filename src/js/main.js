import language from './components/language'
import def from './services/default'

import burger from './modules/burger';
import swipeBurger2 from './modules/swipeBurger2';
import spoller from './libs/spoller'
import slider from './libs/slider'
import dynamicAdaptive from './libs/dinamycAdaptiv'
import tests from './libs/tests'
import header from './modules/header'
import scroll from './modules/scroll'

import portfolio from './components/portfolio'


// import getResource from './services/request'


window.onload = function (){
    language();
    tests();
    def();
    //Buid
    portfolio();

    burger();
    swipeBurger2();
    // spoller();
    // slider();
    dynamicAdaptive();
    header();
    scroll();

   
}