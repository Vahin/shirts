const controlls = document.querySelectorAll('.filter__link');
const currentClass = "filter__item_current";

const elem = document.querySelector('.products__list');
const iso = new Isotope( elem, {
  // options
  itemSelector: '.products__item',
  filter: '.popular'
});

controlls.forEach(function(control) {
    control.addEventListener('click', function(e) {
        
        const filterName = control.getAttribute("data-filter");

        e.preventDefault();
        controlls.forEach(function(link) {
            link.closest('.filter__item').classList.remove(currentClass);
        })
        control.closest('.filter__item').classList.add(currentClass);

        iso.arrange({
            filter: `.${filterName}`
        })
    })
})