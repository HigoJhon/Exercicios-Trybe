function enviar(inter) {
    inter.preventDefault()
}
window.onload = function () {
    const btn = document.getElementById('submit-btn');
    btn.addEventListener('click', enviar);
}
function limpar() {
    const elementosInput = document.querySelectorAll("input");
    const area = document.querySelector("textarea");
    for (let index = 0; index < elementosInput.length; index+= 1) {
      const element = elementosInput[index];
       element.value="";
       element.checked = false;
    }
area.value=""
}
window.onload = function() {
    const liparBtn = document.getElementById("limpar-btn");
    liparBtn.addEventListener("click",limpar);
    const submitBtn = document.getElementById("submit-btn");
    submitBtn.addEventListener('click', enviar);  
}
