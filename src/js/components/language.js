const language = ()=>{
    

    const html = document.querySelector('html');
    const btn = document.querySelectorAll('.main__lang span');
  
    function removeClass() {  
        btn.forEach(item=>{
            item.classList.remove('lang_active');
        })
    }

    btn.forEach(item => {
        item.addEventListener('click',function(e){
            localStorage.setItem('langStor',item.textContent);
            window.location.reload();
        });
        if(item.textContent == localStorage.getItem('langStor')){
            removeClass();
            item.classList.add('lang_active');
        }
    });



    
    html.setAttribute('lang', localStorage.getItem('langStor'));
    const currentLang = html.getAttribute('lang');



    if(currentLang == 'ru'){

    //Header
        document.querySelector('.menu__list').innerHTML = `
            <li class='menu__item'><a href='#' class='menu__link' data-goto=".main">Главная</a></li>
            <li class='menu__item'><a href='#' class='menu__link' data-goto=".about">Обо мне</a></li>
            <li class='menu__item'><a href='#' class='menu__link' data-goTo=".skills">Навыки</a></li>
            <li class='menu__item'><a href='#' class='menu__link' data-goto=".portfolio">Работы</a></li>
            <li class='menu__item'><a href='#' class='menu__link' data-goto="footer">Контакты</a></li>
        `;
        
    //Main
        document.querySelector('.main__name').innerHTML = `Иван <br> Федак`;
        document.querySelector('.main__ocupation').innerHTML = `Веб | Фронтенд Разработчик <br> 16 лет, Мукачево`;
        
    //About
        document.querySelector('.about__title').textContent = `Обо мне`;
        document.querySelector('.about__text').innerHTML = `
            <span>Привет, Меня зовут Иван – Я Веб/Фронтенд разработчик из Украины. Интересуюсь веб-разработкой и всем, что с ней связано. </span>
            <span>Прошел много курсов на площадке "Udemy". Имею 2 года опыта работы в этой области.</span>
            <span>Всегда готов создать Веб сайт или Веб приложение для вас.</span>
        `;
    
    //Skills
        document.querySelector('.skills__title').textContent = `Навыки`;
        document.querySelector('.skills__text').textContent = `Работаю с такими технологиями как...`;
        
    //Portfolio
        document.querySelector('.portfolio__title').textContent = `Мои работы`;
        
    //Footer
        document.querySelector('.footer__title').textContent = `Контакты`;
        document.querySelector('.footer__text').innerHTML = ` Хотите узнать больше? <br> Обращайтесь!`;
        document.querySelector('.footer__btn').textContent = `Написать`;
        document.querySelector('.footer__descr').innerHTML = `Также посмотрите мои <br> Instagram, Facebook`;




    }



  

}
export default language;