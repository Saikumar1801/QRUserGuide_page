// --- 1. GLOBAL NAVIGATION LOGIC ---
const navLinks = document.querySelectorAll('.sub-nav-item');
const sections = document.querySelectorAll('.content-section');

function showSection(targetId) {
    navLinks.forEach(link => {
        link.classList.toggle('active', link.getAttribute('data-target') === targetId);
    });
    sections.forEach(section => {
        section.classList.toggle('active', section.id === targetId);
    });
}

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        const targetId = link.getAttribute('data-target');
        showSection(targetId);
    });
});

// --- 2. SECTION-SPECIFIC INTERACTIVITY ---

function initAppInstallSection() {
    const section = document.getElementById('section-app-install');
    if (!section) return;
    const instructions = section.querySelectorAll('.instruction-item');
    const subInstructions = section.querySelectorAll('.sub-instruction-item');
    const indicators = section.querySelectorAll('.step-indicator');
    const images = section.querySelectorAll('.step-image');
    const annotations = section.querySelectorAll('.image-annotation');

    function setActiveState(step) {
        const mainStep = Math.floor(step);
        
        [instructions, indicators, images, annotations, subInstructions].forEach(nodeList => 
            nodeList.forEach(el => el.classList.remove('active'))
        );
        
        section.querySelector(`.step-indicator[data-step="${mainStep}"]`)?.classList.add('active');
        section.querySelector(`.instruction-item[data-step="${mainStep}"]`)?.classList.add('active');
        section.querySelector(`.step-image[data-image-for="${step}"]`)?.classList.add('active');
        section.querySelector(`.image-annotation[data-annotation-for="${step}"]`)?.classList.add('active');
        
        if (String(step).includes('.')) { 
            section.querySelector(`.sub-instruction-item[data-step="${step}"]`)?.classList.add('active');
        }
    }

    const setupListeners = (elements, isSub) => {
        elements.forEach(el => {
            el.addEventListener('click', (e) => {
                if(isSub) e.stopPropagation();
                let step = el.getAttribute('data-step');
                setActiveState(parseFloat(step));
            });
        });
    };

    setupListeners(instructions, false);
    setupListeners(subInstructions, true);
    setupListeners(indicators, false);
    
    setActiveState(1);
}

function initCouponSection() {
    const section = document.getElementById('section-coupon');
    if (!section) return;
    const items = section.querySelectorAll('.instruction-item, .step-indicator');

    function setActiveState(step) {
        section.querySelectorAll('.instruction-item, .step-indicator, .step-image').forEach(item => 
            item.classList.toggle('active', (item.getAttribute('data-step') || item.getAttribute('data-image-for')) === step)
        );
    }
    
    items.forEach(item => {
        item.addEventListener('click', () => setActiveState(item.getAttribute('data-step')));
    });

    setActiveState('1');
}

function initStickerSection() {
    const section = document.getElementById('section-sticker');
    if (!section) return;
    const items = section.querySelectorAll('.instruction-item, .step-indicator');

    function setActiveState(step) {
        section.querySelectorAll('.instruction-item, .step-indicator, .step-image').forEach(item => 
            item.classList.toggle('active', (item.getAttribute('data-step') || item.getAttribute('data-image-for')) === step)
        );
    }

    items.forEach(item => {
        item.addEventListener('click', () => setActiveState(item.getAttribute('data-step')));
    });
    
    setActiveState('1');
}

// --- 3. INITIALIZE ALL SECTIONS ---
document.addEventListener('DOMContentLoaded', function() {
    initAppInstallSection();
    initCouponSection();
    initStickerSection();
});