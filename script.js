// SEU NÚMERO WHATSAPP
const WHATSAPP_NUMBER = "5541991955285"; // +55 41 99195-5285

// Modal WhatsApp
const modal = document.getElementById('whatsappModal');
const productInfo = document.getElementById('modalProductInfo');

// Função para mostrar modal
function showWhatsappModal(productName) {
    productInfo.innerHTML = `<strong>${productName}</strong>`;
    modal.style.display = 'flex';
}

// Confirmar compra WhatsApp
document.getElementById('confirmWhatsapp').addEventListener('click', function() {
    const productName = productInfo.textContent;
    const message = `Olá! Quero comprar: ${productName}%0A%0A💰 Valor: R$97%0A📸 *Foto do produto:* (anexe sua foto aqui)%0A%0A*Dados para envio:*%0ANome completo:%0AEndereço:%0ACidade/UF:%0ACEP:%0A%0A☑️ Aceito os termos e condições`;
    
    const whatsappURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
    window.open(whatsappURL, '_blank');
    modal.style.display = 'none';
});

// Fechar modal
document.querySelector('.close').addEventListener('click', () => {
    modal.style.display = 'none';
});

document.getElementById('cancelWhatsapp').addEventListener('click', () => {
    modal.style.display = 'none';
});

// Fechar clicando fora
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

// Menu hamburger
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
