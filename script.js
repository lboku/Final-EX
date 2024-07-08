document.addEventListener('DOMContentLoaded', function() {
    let wrapper = document.getElementById('navBar');
    let burger = document.getElementById('clkbtn');

    burger.addEventListener('click', function() {
        wrapper.classList.toggle('newWrapper');
    });
});
