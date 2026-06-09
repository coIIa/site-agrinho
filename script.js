// Botão Saiba Mais
document.getElementById("saibaMais").addEventListener("click", () => {
    document.getElementById("sobre").scrollIntoView({
        behavior: "smooth"
    });
});

// Contador animado
let contador = document.getElementById("contador");
let valor = 0;
let objetivo = 5000;

let intervalo = setInterval(() => {
    valor += 50;
    contador.textContent = valor;

    if (valor >= objetivo) {
        contador.textContent = objetivo;
        clearInterval(intervalo);
    }
}, 20);