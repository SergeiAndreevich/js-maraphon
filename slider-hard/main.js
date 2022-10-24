window.addEventListener('DOMContentLoaded', () => {
    const upButton = document.querySelector('.up-button'),
        downButton = document.querySelector('.down-button'),
        sidebar = document.querySelector('.sidebar'), 
        mainSlide = document.querySelector('.main-slide'),
        slidesCount = mainSlide.querySelectorAll('div').length,
        container = document.querySelector('.container');
    let activeSlide = 0;


    sidebar.style.top = `-${(slidesCount-1) * 100}vh`;

    upButton.addEventListener('click', () => {
        changeSlide('up');
    });
    downButton.addEventListener('click', () =>{
        changeSlide('down');
    });

    function changeSlide (direction){
        if(direction === 'up'){
            activeSlide++;
            if(activeSlide === slidesCount){
                activeSlide = 0;
            } 
        }else if ( direction === 'down'){
            activeSlide--;
            if(activeSlide < 0){
                activeSlide = slidesCount - 1;
            }
        }

        const height = container.clientHeight;
        mainSlide.style.transform = `translateY(-${activeSlide * height}px)`;
        sidebar.style.transform = `translateY(${activeSlide * height}px)`;
    }
});