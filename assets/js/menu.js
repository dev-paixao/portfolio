const menu = document.querySelector('.menu');
const NavMenu = document.querySelector('.header-menu');

function desativarMenu() {
  menu.classList.remove('ativo');
  NavMenu.classList.remove('ativo');
}

function ativarMenu() {
  menu.classList.add('ativo');
  NavMenu.classList.add('ativo');
}

function redimensionamentoTela() {
  if (window.innerWidth > 630) {
    desativarMenu();
  }
}

// Desativa o menu quando a página é carregada
desativarMenu();

// Adiciona um ouvinte de evento 'click' ao botão de menu
menu.addEventListener('click', () => {
  if (menu.classList.contains('ativo')) {
    desativarMenu();
  } else {
    ativarMenu();
  }
});

// Adiciona o ouvinte de evento 'scroll'
window.addEventListener('scroll', desativarMenu);

// Adiciona o ouvinte de evento 'resize' para lidar com o redimensionamento da tela
window.addEventListener('resize', redimensionamentoTela);
