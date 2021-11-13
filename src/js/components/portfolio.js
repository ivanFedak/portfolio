const portfolio = ()=>{
    
    const db = [
        {
            href: '#',
            img: '01.png',
            title: 'Online fashion store - Homepage',
        },
        {
            href: '#',
            img: '02.png',
            title: 'Reebok Store - Concept',
        },
        {
            href: '#',
            img: '03.png',
            title: 'Braun Landing Page - Concept',
        },
    ]



    function createCard(db) {
        db.forEach(item=>{
            const {href,img,title} = item;

            let card = document.createElement('div');
            card.classList.add('portfolio__item');

            card.innerHTML = `
    
                <a href="${href}" class="portfolio__image _ibg">
                    <img src="./img/portfolio/${img}" alt="${title}">
                </a>
                <div class="portfolio__contnet">
                    <a href="${href}" class="portfolio__link">${title}</a>
                </div>
                
            `

            document.querySelector('.portfolio__body').appendChild(card);

        })
    }

    createCard(db);


}
export default portfolio;