import language from './components/language'
import def from './services/default'

import burger from './modules/burger'
import spoller from './libs/spoller'
import slider from './libs/slider'
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
    // spoller();
    // slider();
    header();
    scroll();

   
}