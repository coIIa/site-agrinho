// ============================
// MENU RESPONSIVO
// ============================

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// ============================
// BOTÃO HERO
// ============================

const btnSaibaMais = document.getElementById("saibaMais");

btnSaibaMais.addEventListener("click", () => {

    document
        .getElementById("dicas")
        .scrollIntoView({
            behavior: "smooth"
        });

});

// ============================
// QUIZ
// ============================

const respostas = document.querySelectorAll(".resposta");
const resultado = document.getElementById("resultado");

respostas.forEach(botao => {

    botao.addEventListener("click", () => {

        if(botao.dataset.correta){

            resultado.textContent =
            "✅ Correto! A captação da água da chuva ajuda a economizar recursos.";

            resultado.style.color = "green";

        } else {

            resultado.textContent =
            "❌ Resposta incorreta. Tente novamente.";

            resultado.style.color = "red";

        }

    });

});