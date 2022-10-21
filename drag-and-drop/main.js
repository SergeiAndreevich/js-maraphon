window.addEventListener('DOMContentLoaded' , () => {
    const item = document.querySelector('.item'),
        placeHolders = document.querySelectorAll('.placeholder');

    item.addEventListener('dragstart', (e) => {
        e.target.classList.add('hold');
        setTimeout(() => {
            e.target.classList.add('hide');
        }, 0);
    });
    item.addEventListener('dragend', (e) =>{
        e.target.classList.remove('hold', 'hide');
    });
    placeHolders.forEach(place => {
        place.addEventListener('dragover', dragover);
        place.addEventListener('dragenter', dragenter);
        place.addEventListener('dragleave', dragleave);
        place.addEventListener('drop', dragdrop);
    });

    function dragover (e){
        e.preventDefault();
        console.log('over');
    }
    function dragenter (e){
        e.target.classList.add('hovered');
        console.log('ent');
    }
    function dragleave (e){
        e.target.classList.remove('hovered');
        console.log('lv');
    }
    function dragdrop (e){
        e.target.classList.remove('hovered');
        e.target.append(item);
        console.log('drop');
    }



    const takeIt = document.querySelectorAll('.take'),
        dropIt = document.querySelector('.drop');
    let i = 0;

        takeIt.forEach(item => {
            item.addEventListener('dragstart', (e) => {
                e.target.classList.add('hold');
            });
            item.addEventListener('dragend', (e) => {
                setTimeout(() => {
                    e.target.classList.add('hide');
                }, 0);
                dropIt.textContent = `Drop here (${++i})`;
            });
        });

        dropIt.addEventListener('dragenter', (e)=>{
            e.target.classList.add(hovered);
        });
        dropIt.addEventListener('dragleave', (e)=>{
            e.target.classList.remove(hovered);
        });
        dropIt.addEventListener('dragover', (e)=>{
            e.preventDefault();
        });
        dropIt.addEventListener('drop', (e)=>{
            e.target.classList.remove(hovered);
            e.target.append(item);
            e.target.classList.add('hide');

        });

});