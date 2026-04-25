// ============================================
// SEU NÚMERO WHATSAPP - ALTERE AQUI
// ============================================
const WHATSAPP_NUMBER = "5541991955285"; // +55 41 99195-5285

// ============================================
// ELEMENTOS DO DOM
// ============================================
const modal = document.getElementById('whatsappModal');
const productInfo = document.getElementById('modalProductInfo');
const modalProductImg = document.getElementById('modalProductImg');
const modalProductName = document.getElementById('modalProductName');

// ============================================
// FUNÇÃO PRINCIPAL: MOSTRAR MODAL WHATSAPP
// ============================================
function showWhatsappModal(productName, productImage = '') {
    modalProductName.textContent = productName;
    modalProductImg.src = productImage || 'https://photos.app.goo.gl/SMF6Gc9rNM4cPxRFA';
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden'; // Impede scroll
}

// ============================================
// CONFIRMAR COMPRA - ENVIA PARA WHATSAPP
// ============================================
document.getElementById('confirmWhatsapp').addEventListener('click', function() {
    const productName = modalProductName.textContent;
    
    // MENSAGEM PERSONALIZADA E PROFISSIONAL
    const message = `🚀 *OLÁ! QUERO O PRODUTO!* 🚀%0A%0A📦 *Produto:* ${productName}%0A💰 *Valor:* R$97 (À VISTA)%0A%0A📸 *Foto do produto:* (veja em anexo)%0A%0A👤 *MEUS DADOS:*%0A• Nome completo: %0A• WhatsApp: %0A• Endereço completo: %0A• Cidade/UF: %0A• CEP: %0A%0A✅ *Aceito:*%0A☑️ Garantia 30 dias%0A☑️ Envio para todo Brasil%0A☑️ Pagamento seguro%0A%0A⚡ *QUERO RECEBER HOJE!*`;
    
    const whatsappURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    
    // Abre WhatsApp em nova aba
    window.open(whatsappURL, '_blank');
    
    // Fecha modal
    closeModal();
});

// ============================================
// FECHAR MODAL
// ============================================
function closeModal() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto'; // Libera scroll
}

document.querySelector('.close').addEventListener('click', closeModal);
document.getElementById('cancelWhatsapp').addEventListener('click', closeModal);

// Fechar clicando fora do modal
window.onclick = function(event) {
    if (event.target === modal) {
        closeModal();
    }
};

// ============================================
// MENU MOBILE (HAMBURGUER)
// ============================================
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
    document.body.classList.toggle('menu-open');
});

// Fechar menu ao clicar em link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.classList.remove('menu-open');
    });
});

// ============================================
// SCROLL SUAVE
// ============================================
function scrollToSection(section) {
    document.querySelector(section).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ============================================
// EFEITOS ANIMADOS AO SCROLL
// ============================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate__animated', 'animate__fadeInUp');
        }
    });
}, observerOptions);

// Observa todos os elementos com classe 'animate-on-scroll'
document.querySelectorAll('.animate-on-scroll').forEach(el => {
    observer.observe(el);
});

// ============================================
// SLIDER AUTOMÁTICO HERO (OPCIONAL)
// ============================================
let currentSlide = 0;
const slides = document.querySelectorAll('.hero-slide');

function nextSlide() {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
}

setInterval(nextSlide, 5000); // Muda slide a cada 5s

// ============================================
// BOTÃO FLUTUANTE WHATSAPP
// ============================================
function createFloatingWhatsapp() {
    const floatBtn = document.createElement('a');
    floatBtn.href = '#';
    floatBtn.className = 'whatsapp-float-btn';
    floatBtn.innerHTML = '<i class="fab fa-whatsapp"></i>';
    floatBtn.onclick = () => showWhatsappModal('Blessed Choice - Contato Rápido');
    document.body.appendChild(floatBtn);
}

createFloatingWhatsapp();

// ============================================
// CARREGAMENTO INICIAL
// ============================================
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
    
    // Pequena animação de entrada
    setTimeout(() => {
        document.querySelector('.hero-title').classList.add('animate__animated', 'animate__fadeInDown');
    }, 500);
});

// ============================================
// PREVENIR ZOOM EM INPUTS MOBILE
// ============================================
let lastTouchEnd = 0;
document.addEventListener('touchend', function (event) {
    const now = (new Date()).getTime();
    if (now - lastTouchEnd <= 300) {
        event.preventDefault();
    }
    lastTouchEnd = now;
}, false);
