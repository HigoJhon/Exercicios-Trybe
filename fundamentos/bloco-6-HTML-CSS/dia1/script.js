function interromoper(inter) {
    inter.preventDeFault();
}
window.onload = function () {
    const btn = document.getElementById('submit-btn');
    btn.addEventListener('click', interromoper);
};
