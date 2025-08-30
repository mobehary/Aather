function preloader_end() {
  $('#loader').fadeOut();
  $('#loader-mask').delay(350).fadeOut('slow');
};
window.addEventListener("load", preloader_end);


const navDots = document.querySelectorAll('.nav-dot');
document.querySelectorAll('[data-bs-toggle="pill"]').forEach((tab, index) => {
    tab.addEventListener('shown.bs.tab', function () {
        navDots.forEach(dot => dot.classList.remove('active'));
        navDots[index].classList.add('active');
    });
});

navDots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        const tabButton = document.querySelectorAll('[data-bs-toggle="pill"]')[index];
        const tab = new bootstrap.Tab(tabButton);
        tab.show();
    });
});