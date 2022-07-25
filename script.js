const burgerBtn = document.querySelector('.header-burger'),
      navMenu = document.querySelector('.nav-menu');

burgerBtn.addEventListener('click', () => {
    burgerBtn.classList.toggle('active')
    navMenu.classList.toggle('active')
})     


//cards

class MenuCard {
    constructor (img, title, description, parentSelector) {
        this.img = img;
        this.title = title;
        this.description = description;
        this.parent = document.querySelector(parentSelector)

    }

    render () { 
        const element = document.createElement('div')
        element.innerHTML = `
        <div class="card">
            
            <img src="${this.img}" alt="">
            <span>${this.title}</span>
            <p>${this.description}</p>
        </div>
        `;
        this.parent.append(element)
    }   
}

fetch('http://localhost:3000/cards')
    .then((response) => {
        return response.json()
    })
    .then(data => {
        console.log('ddd');
        data.forEach(({
            img,
            title,
            description
        }) => {
           new MenuCard(img, title ,description,'.services-cards').render();
        });
    });

//slider 

new Swiper('.image-slider', {
    pagination: {
        el: '.swiper-pagination',
        
        clickable: true 
      },

    spaceBetween :-800,
    loop: true,
    loopedSlides: 3,
   
});

