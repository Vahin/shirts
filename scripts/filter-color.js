const tabs = document.querySelectorAll('.filter__link');
const currentTab = 'filter__item_current';

const elem = document.querySelector('.desc__box-list');
const iso = new Isotope( elem, {
  // options
  itemSelector: '.desc__box',
  filter: '.desc'
});

tabs.forEach(function(tab){
    tab.addEventListener('click', function(e) {
        e.preventDefault();

        const filterName = tab.getAttribute("data-filter");

        tabs.forEach(function(link) {
            link.closest('.filter__item').classList.remove(currentTab);
        })
        tab.closest('.filter__item').classList.add(currentTab);

        iso.arrange({
            filter: `.${filterName}`
        })
    })
})