window.addEventListener('DOMContentLoaded', () =>{
    const slides = document.querySelectorAll('.slide');

    slides.forEach(item => {
        item.addEventListener('click', () => {
            clearActive();
            item.classList.add('active');
        });
    });

    function clearActive (){
        slides.forEach(item => {
            item.classList.remove('active');
        });
    }
});