const boxServiceList = document.querySelector('.box__service-list');
const serviceList = document.querySelector('.services-list');

const navItems = document.querySelector('#nav__items')
const openNavBtn = document.querySelector('#open__nav-btn')
const closeNavBtn = document.querySelector('#close__nav-btn')

const mediaqueryList1440 = window.matchMedia("(max-width: 1440px)");
const mediaqueryList1024 = window.matchMedia("(max-width: 1024px)");
const mediaqueryList600 = window.matchMedia("(max-width: 600px)");

// boxServiceList.addEventListener('mouseover', () => {
//     serviceList.style.display = 'flex';
// })

// boxServiceList.addEventListener('mouseout', () => {
//     serviceList.style.display = 'none';
// })



openNavBtn.addEventListener('click', () => {
    navItems.style.display = 'flex';
    openNavBtn.style.display = 'none';
    closeNavBtn.style.display = 'flex';
})

closeNavBtn.addEventListener('click', () => {
    closeNavBtn.style.display = 'none';
    navItems.style.display = 'none';
    openNavBtn.style.display = 'flex';
})

if (mediaqueryList1440.matches) {
    navItems.style.display = 'flex';
    closeNavBtn.style.display = 'none';
    openNavBtn.style.display = 'none';
}
if (mediaqueryList1024.matches) {
    navItems.style.display = 'none';
    closeNavBtn.style.display = 'none';
    openNavBtn.style.display = 'flex';
}
if (mediaqueryList600.matches) {
    navItems.style.display = 'none';
    closeNavBtn.style.display = 'none';
    openNavBtn.style.display = 'flex';
}

// if (mediaqueryList920.matches) {
//     navItems.style.display = 'none';
//     closeNavBtn.style.display = 'none';
//     openNavBtn.style.display = 'flex';
// }