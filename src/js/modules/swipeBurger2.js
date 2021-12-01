const swipeBurger2 = ()=>{
   document.addEventListener('touchmove', moveFun);

   function moveFun(e) {
       e.preventDefault();
       console.log(e.targetTouches[0]);
   }
   

};
export default swipeBurger2;