const swiper = new Swiper('.swiper', {
  // Direção e Loop
  direction: 'horizontal',
  loop: true,

  // Exibição de múltiplos slides
  slidesPerView: 3,  // Exibe 3 slides ao mesmo tempo
  spaceBetween: 20,  // Espaçamento de 20px entre os slides

  // Paginação (bolinhas)
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  // Setas de navegação
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // Barra de rolagem
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});
// Inicializa a Primeira Esteira
const swiper1 = new Swiper('.esteira1', {
  slidesPerView: 3,
  spaceBetween: 15,
  loop: true,
  pagination: {
    el: '.pag1',
    clickable: true,
  },
  navigation: {
    nextEl: '.btn-next1',
    prevEl: '.btn-prev1',
  },
});

// Inicializa a Segunda Esteira
const swiper2 = new Swiper('.esteira2', {
  slidesPerView: 3,
  spaceBetween: 15,
  loop: true,
  pagination: {
    el: '.pag2',
    clickable: true,
  },
  navigation: {
    nextEl: '.btn-next2',
    prevEl: '.btn-prev2',
  },
});
const swiper3 = new Swiper('.esteira3', {
  slidesPerView: 3,
  spaceBetween: 15,
  loop: true,
  pagination: {
    el: '.pag3',
    clickable: true,
  },
  navigation: {
    nextEl: '.btn-next2',
    prevEl: '.btn-prev2',
  },
});