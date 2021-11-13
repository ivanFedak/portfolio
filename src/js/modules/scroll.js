const scroll = ()=>{
    const menuLinks = document.querySelectorAll('.menu__link[data-goto]');
    if(menuLinks.length > 0){
        menuLinks.forEach(link => {
            link.addEventListener('click',onMenuClick);
        });
    }

    function onMenuClick(e) {
        const target = e.target;
        if(target.dataset.goto && document.querySelector(target.dataset.goto)){//1.Заполнен ли дата атриб  2.Существует ли обект на який зсилаеся дата атрибут(куда скролити)
            const block = document.querySelector(target.dataset.goto);
            const blockValue = block.getBoundingClientRect().top + window.pageYOffset - document.querySelector('header').offsetHeight; // 1.Растояние обекта от верха 2.Количество прокруч px 3.Висота шапки
            window.scrollTo({
                top: blockValue,
                behavior: "smooth"
            });
            e.preventDefault();
        }

    }

}
export default scroll;