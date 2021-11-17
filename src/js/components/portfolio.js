const portfolio = ()=>{
    
    const db = [
        {
            href: 'https://ivan20050120.github.io/paper/',
            img: 'papperGame.jpg',
            title: 'Rock-Paper-Scissors-Master',
        },
        {
            href: 'https://ivan20050120.github.io/healthy/',
            img: 'healthy.jpg',
            title: 'Stay healthy landing page',
        },
        {
            href: 'https://ivan20050120.github.io/pay/',
            img: 'pay.png',
            title: 'Money Transfer & Online Payments',
        },
        {
            href: 'https://ivan20050120.github.io/relvise/',
            img: 'relvise.png',
            title: 'Finance and Consultancy Solution Landing Page',
        },
        {
            href: 'https://ivan20050120.github.io/wordCounter/',
            img: 'wordCounter.png',
            title: 'Word Counter App',
        },
        {
            href: 'https://ivan20050120.github.io/background/',
            img: 'color.png',
            title: 'Backround Color changer App',
        },
        {
            href: 'https://ivan20050120.github.io/toDO/',
            img: 'toDo.jpg',
            title: 'To Do List App',
        },
    ]



    function createCard(db) {
        db.forEach(item=>{
            const {href,img,title} = item;

            let card = document.createElement('div');
            card.classList.add('portfolio__item');

            card.innerHTML = `
    
                <a href="${href}" target="_blank" class="portfolio__image _ibg">
                    <img src="./img/portfolio/${img}" alt="${title}">
                </a>
                <div class="portfolio__contnet">
                    <a href="${href}"  target="_blank"class="portfolio__link">${title}</a>
                </div>
                
            `

            document.querySelector('.portfolio__body').appendChild(card);

        })
    }

    createCard(db);


}
export default portfolio;