const sections = document.querySelectorAll('section');

const addMovement = () => {

}

addMovement();

document.addEventListener('scroll', function () {
    addMovement();
})

window.addEventListener('resize', function () {
    addMovement();
})