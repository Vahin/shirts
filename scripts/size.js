const sizes = document.querySelectorAll('.size__link');
const sizesAble = document.querySelectorAll('.size__link_able');
const activeSize = "size__item_active";

sizes.forEach(function(e){
    e.addEventListener('click', function(o) {
        o.preventDefault();
    })
})

sizesAble.forEach(function(size){
    size.addEventListener('click', function(e){

        sizesAble.forEach(function(link){
            link.closest('.size__item').classList.remove(activeSize)
        });

        size.closest('.size__item').classList.add(activeSize);
    });

})