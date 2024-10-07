

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
