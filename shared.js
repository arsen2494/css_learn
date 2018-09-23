const backdrop = document.querySelector('.backdrop');
const selectPlanBtns = document.querySelectorAll('.plan button');
const modal = document.querySelector('.modal');
const modalNoBtn = document.querySelector('.modal__action--negative');
const toggleBtn = document.querySelector('.toggle-button');
const mobileNav = document.querySelector('.mobile-nav');

if (!!selectPlanBtns.length) {
    for (const btn of selectPlanBtns) {
        btn.addEventListener('click', () => {
            modal.classList.add('open');
            backdrop.classList.add('open');
        });
    }
}

backdrop.addEventListener('click', () => {
    mobileNav.classList.remove('open');
    closeModal();
});

if (modalNoBtn) {
    modalNoBtn.addEventListener('click', closeModal);
}

function closeModal() {
    if (modal) {
        modal.classList.remove('open');
    }
    backdrop.classList.remove('open');
}

toggleBtn.addEventListener('click', () => {
    mobileNav.classList.add('open');
    backdrop.classList.add('open');
});