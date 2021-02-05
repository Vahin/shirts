const colors = document.querySelectorAll('.shirt__color-link');
const activeColor = 'shirt__color-item_active';
const picture = document.querySelector('.shirt__image');

colors.forEach(function(color){
    color.addEventListener('click', function(e){
        e.preventDefault();

        
        colors.forEach(function(f){
            const curCol = f.closest('.shirt__color-item').getAttribute('data-color');
            const currentColor = 'shirt__image_' + curCol;
            f.closest('.shirt__color-item').classList.remove(activeColor);
            picture.classList.remove(currentColor);
        });

        const curCol = color.closest('.shirt__color-item').getAttribute('data-color');
        const currentColor = 'shirt__image_' + curCol;
        color.closest('.shirt__color-item').classList.add(activeColor);
        picture.classList.add(currentColor);
    })
})