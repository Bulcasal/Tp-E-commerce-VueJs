document.addEventListener('DOMContentLoaded', () => {
    const iconBurger = document.querySelector('.fa-solid.fa-burger');
    console.log(iconBurger);

    const navbar = document.querySelector('.burger-container');
    console.log(navbar);

    iconBurger.addEventListener('click', () => {
        console.log('kikou');
        navbar.classList.toggle("activated");
    });
});
