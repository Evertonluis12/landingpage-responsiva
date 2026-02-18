/* ========================================
   NOVA LANDING PAGE - TICTAG
   JavaScript Interactions
   ======================================== */

document.addEventListener('DOMContentLoaded', function() {
    
    // ========== MOBILE MENU ==========
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navMenu = document.querySelector('.nav-menu');
    
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            this.classList.toggle('active');
        });
    }
    
    // ========== HEADER SCROLL ==========
    const header = document.querySelector('.header');
    
    // ========== EXPANDABLE CARDS (Features) ==========
    const featureCards = document.querySelectorAll('.feature-card');
    
    featureCards.forEach(card => {
        card.addEventListener('click', function() {
            // Close other cards
            featureCards.forEach(c => {
                if (c !== this) c.classList.remove('expanded');
            });
            // Toggle current card
            this.classList.toggle('expanded');
        });
    });
    
    // ========== EXPANDABLE CARDS (Funcionalidades) ==========
    const funcCards = document.querySelectorAll('.func-card');
    
    funcCards.forEach(card => {
        card.addEventListener('click', function() {
            this.classList.toggle('expanded');
        });
        
        // Hover effect for desktop
        card.addEventListener('mouseenter', function() {
            if (window.innerWidth > 768) {
                this.classList.add('expanded');
            }
        });
        
        card.addEventListener('mouseleave', function() {
            if (window.innerWidth > 768) {
                this.classList.remove('expanded');
            }
        });
    });
    
    // ========== EXPANDABLE CARDS (Valores/Sobre) ==========
    const valorCards = document.querySelectorAll('.valor-card');
    
    valorCards.forEach(card => {
        card.addEventListener('click', function() {
            this.classList.toggle('expanded');
        });
        
        // Hover effect for desktop
        card.addEventListener('mouseenter', function() {
            if (window.innerWidth > 768) {
                this.classList.add('expanded');
            }
        });
        
        card.addEventListener('mouseleave', function() {
            if (window.innerWidth > 768) {
                this.classList.remove('expanded');
            }
        });
    });
    
    // ========== SMOOTH SCROLL ==========
    const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
    
    smoothScrollLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Ignorar links vazios ou que não começam com #
            if (!href || href === '#' || !href.startsWith('#')) return;
            
            const target = document.querySelector(href);
            
            // Só prevenir default se o target existir na página
            if (target) {
                e.preventDefault();
                const headerHeight = header.offsetHeight;
                const targetPosition = target.offsetTop - headerHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                navMenu.classList.remove('active');
                mobileMenuBtn.classList.remove('active');
            }
        });
    });
    
    // ========== CAROUSEL (Depoimentos) ==========
    // Auto-scroll implementado via CSS animation
    // Pausa no hover já configurada no CSS com animation-play-state: paused
    
    // ========== ANIMATION ON SCROLL ==========
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.func-card, .plano-card, .marca-item, .promo-card');
        
        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementTop < windowHeight - 100) {
                element.classList.add('animate-in');
            }
        });
    };
    
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Run on load
    
    // ========== SQUARES ANIMATION (Hero) ==========
    const squares = document.querySelectorAll('.square');
    
    squares.forEach((square, index) => {
        // Random initial position adjustment
        const randomX = Math.random() * 20 - 10;
        const randomY = Math.random() * 20 - 10;
        square.style.transform = `translate(${randomX}px, ${randomY}px)`;
    });
    
    // ========== PLANOS POPUP (Info adicional) ==========
    const pacoteBtn = document.querySelector('.btn-pacote');
    
    if (pacoteBtn) {
        pacoteBtn.addEventListener('click', function(e) {
            e.preventDefault();
            alert('Pacote adicional de emissões:\n\n• 200 emissões: R$ 50,00/mês\n• 500 emissões: R$ 100,00/mês\n• 1000 emissões: R$ 180,00/mês\n\nEntre em contato para mais informações.');
        });
    }
    
    // ========== PILARES HOVER EFFECT ==========
    const pilarCards = document.querySelectorAll('.pilar-card');
    
    pilarCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
    
});

// ========== CSS ANIMATION CLASSES ==========
const style = document.createElement('style');
style.textContent = `
    .animate-in {
        animation: fadeInUp 0.6s ease forwards;
    }
    
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    .nav-menu.active {
        display: flex;
        flex-direction: column;
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        background: var(--creme);
        padding: 20px;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    }
    
    .mobile-menu-btn.active span:nth-child(1) {
        transform: rotate(45deg) translate(5px, 5px);
    }
    
    .mobile-menu-btn.active span:nth-child(2) {
        opacity: 0;
    }
    
    .mobile-menu-btn.active span:nth-child(3) {
        transform: rotate(-45deg) translate(7px, -6px);
    }
    
    .pilar-card {
        transition: transform 0.3s ease;
    }
`;
document.head.appendChild(style);
