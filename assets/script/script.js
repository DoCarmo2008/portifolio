// Scroll Animation
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});


const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));



//Efeito blur brilhoso seguindo o mouse
const body = document.querySelector('body');
const lightingBlur = document.createElement('div');

lightingBlur.classList.add('lighting-blur');
body.appendChild(lightingBlur); // Adicionando o elemento de blur ao body

body.addEventListener('mousemove', (event) => {
    const x = event.pageX;
    const y = event.pageY;
    lightingBlur.style.left = `${x - 100}px`;
    lightingBlur.style.top = `${y - 100}px`;
});




// Caixas de informações - Sobre mim
const spanBh = document.querySelector('.bh-cidade');
const bhInfo = document.querySelector('.info-box-bh');
const spanCtrl = document.querySelector('.ctrlplay');
const ctrlInfo = document.querySelector('.info-box-ctrlplay');
const spanCamb = document.querySelector('.cambridge');
const cambInfo = document.querySelector('.info-box-cambridge');
 
//Informações de Belo Horizonte
spanBh.addEventListener('mouseenter', () => {
    bhInfo.style.display = 'flex';
});

spanBh.addEventListener('mouseleave', () => {
    bhInfo.style.display = 'none';
});

//Informações Ctrl+Play
spanCtrl.addEventListener('mouseenter', () => {
    ctrlInfo.style.display = 'flex';
});

spanCtrl.addEventListener('mouseleave', () => {
    ctrlInfo.style.display = 'none';
});

//Informações de Cambridge
spanCamb.addEventListener('mouseenter', () => {
    cambInfo.style.display = 'flex';
});

spanCamb.addEventListener('mouseleave', () => {
    cambInfo.style.display = 'none';
});




/* CONTATO TAB */
const tabContact = document.querySelector('.contacts');
const contactBtn = document.querySelector('.contact-link');
const closeBtn = document.querySelector('.bi-x');

contactBtn.addEventListener('click', () => {
    tabContact.style.display = 'flex';
});

closeBtn.addEventListener('click', () => {
    tabContact.style.display = 'none';
});


/* VERIFICADOR DO EMAIL */
const emailForms = document.getElementById('emailForm');

    emailForms.addEventListener('submit', function(event) {
    const emailInput = document.getElementById('email').value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Verifica se o email está no formato correto
    if (!emailRegex.test(emailInput)) {
        event.preventDefault(); // Impede o envio do formulário
        alert('Por favor, insira um endereço de email válido.');
    }
});



/* THEME */
const actualSvg = document.querySelector('.bi-moon-fill');
const lightTheme = document.querySelector('.light-theme');
const darkTheme = document.querySelector('.dark-theme');


lightTheme.addEventListener('click', () => {
    window.alert('Trabalhando nisso ainda...');
});
darkTheme.addEventListener('click', () => {
    window.alert('Já está no dark theme 😉');
});