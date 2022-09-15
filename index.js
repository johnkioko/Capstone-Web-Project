const closeButton = document.querySelector('.close-nav');
const openButton = document.querySelector('.open-nav');
const nav = document.querySelector('.nav');

// Hamburger Menu

closeButton.addEventListener('click', () => {
  nav.classList.remove('navigation-open');
});

openButton.addEventListener('click', () => {
  nav.classList.add('navigation-open');
});

// Html Dynamic Content

const people = [
  {
    name: 'yohai benkler',
    title: 'Professor at Harvard Law School',
    description: 'Layla Tretikov is the general secretary of the Wikimedia Foundation, a non-profit organization that runs Wikipedia. Wikipedia is provided free of charge in 290 languages every month to over 100 million people, nearly half of the world\'s population.',
    img: 'images/speaker_01.png',
  },
  {
    name: 'Jeon Gil-nam',
    title: 'Emeritus Professor, Korea Advanced Institute of Science and Technology (KAIST)',
    description: 'Layla Tretikov is the general secretary of the Wikimedia Foundation, a non-profit organization that runs Wikipedia. Wikipedia is provided free of charge in 290 languages every month to over 100 million people, nearly half of the world\'s population.',
    img: 'images/speaker_02.png',
  },
  {
    name: 'Noh So-young',
    title: 'Art Center Nabi Director, CC Korea Director',
    description: 'Layla Tretikov is the general secretary of the Wikimedia Foundation, a non-profit organization that runs Wikipedia. Wikipedia is provided free of charge in 290 languages every month to over 100 million people, nearly half of the world\'s population.',
    img: 'images/speaker_03.png',
  },
  {
    name: 'Julia Leda',
    title: 'Head of the Young Pirates of Europe',
    description: 'Layla Tretikov is the general secretary of the Wikimedia Foundation, a non-profit organization that runs Wikipedia. Wikipedia is provided free of charge in 290 languages every month to over 100 million people, nearly half of the world\'s population.',
    img: 'images/speaker_04.png',
  },
  {
    name: 'Layla Trettikov',
    title: 'Secretary General of the Wikimedia Foundation',
    description: 'Layla Tretikov is the general secretary of the Wikimedia Foundation, a non-profit organization that runs Wikipedia. Wikipedia is provided free of charge in 290 languages every month to over 100 million people, nearly half of the world\'s population.',
    img: 'images/speaker_05.png',
  },
  {
    name: 'Ryan Merkley',
    title: 'Creative Commons CEO, Former Mozilla Foundation COO',
    description: 'Layla Tretikov is the general secretary of the Wikimedia Foundation, a non-profit organization that runs Wikipedia. Wikipedia is provided free of charge in 290 languages every month to over 100 million people, nearly half of the world\'s population.',
    img: 'images/speaker_06.png',
  },
];

const personCardHtml = (person) => `<div class="card-body">
  <!-- person -->
    <div class="testmonials-container">
    <div class="grid-img"><img src="${person.img}" alt="prewiew"></div>
    <div class="testimonials">
      <h2>${person.name}</h3>
      <h4 class="title">${person.title}</h4>
      <p>${person.description}</p>
    </div>
    </div>
  </div>
  <!-- END person -->`;
const reducer = (accumulator, currentValue) => accumulator + personCardHtml(currentValue);
const personsHtml = people.reduce(reducer, '');
const container = document.querySelector('#persons-container');
container.insertAdjacentHTML('beforeend', personsHtml);
