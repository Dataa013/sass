const Header = document.querySelector('.header');

window.addEventListener('scroll', function () {
    const scrollOffset = window.pageYOffset;
    const HeaderHeight = Header.getBoundingClientRect().height


    if (scrollOffset > HeaderHeight) {
        Header.classList.add('fixed')
    } else {
        Header.classList.remove('fixed')
    }
})

const navBtn = document.querySelector('.nav-btn-button');

const menu = [
    {
        id: 1,
        img: "../img/icon (2).svg",
        title: "Research Suburbs",
        text: "Get started swiftly & easily by importing a  demo of your choice in a single click."
    },
    
    {
        id: 2,
        img: "../img/icon (3).svg",
        title: "Instant Valuation",
        text: "Over 30 high quality profession designed re-built website concepts to choose from."
    },
    {
        id: 3,
        img: "../img/icon (4).svg",
        title: "Track Property",
        text: "Build your website using fully visual interface, using our revolutionary page builder."
    }
];


const worksItems = document.querySelector('.works-items');

window.addEventListener('DOMContentLoaded', function () {
    let displayMenu = menu.map(function (item) {
        return `<div class="works-item">
      <div class="works-item-img">
          <img src="${item.img}">
      </div>
      <h3 class="works-item-title">${item.title}</h3>
      <p class="works-item-text">${item.text}
          single click.</p>
  </div>`

    })

     
    displayMenu = displayMenu.join('')
    worksItems.innerHTML = displayMenu

})