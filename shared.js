const backdrop = document.querySelector('.backdrop');
const selectPlanBtns = document.querySelectorAll('.plan button');
const modal = document.querySelector('.modal');
const modalNoBtn = document.querySelector('.modal__action--negative');

for (const btn of selectPlanBtns) {
    btn.addEventListener('click', () => {
        modal.style.display = 'block';
        backdrop.style.display = 'block';
    });
}

backdrop.addEventListener('click', closeModal);
modalNoBtn.addEventListener('click', closeModal);

function closeModal() {
    modal.style.display = 'none';
    backdrop.style.display = 'none';
}