
import burger from './modules/burger'
import spoller from './libs/spoller'
import slider from './libs/slider'
import tests from './libs/tests'
import header from './modules/header'
import scroll from './modules/scroll'

import portfolio from './components/portfolio'


// import getResource from './services/request'


window.onload = function (){

    tests();
    burger();
    spoller();
    slider();
    header();
    scroll();

    //Buid
    portfolio();
}