const createHTMLElement = (type, className, textContent) => {
  const element = document.createElement(type);
  element.classList.add(className);
  if (textContent) {
    element.textContent = textContent;
  }
  return element;
};

const createIMGElement = (type, src, className, alt) => {
  const element = document.createElement(type);
  element.setAttribute('src', src);
  element.classList.add(className);
  element.setAttribute('alt', alt);

  return element;
};

const cardContainer = document.querySelector('#card-container');

const airCoolersDB = [
  {
    image: './images/cooler/dark_rock_tf.jpg',
    alt: 'Image of be quiet! Dark Rock TF Cooler',
    title: 'Dark Rock TF',
    subtitle: 'be quiet!',
    type: 'Top flow cooler',
    heatpipe: '6 heatpipes',
    cardtext:
      'Comes with 2 135mm PWM fans. Great cooling capacity. May have compatibility issues with various motherboards, check before use else there may be a need to mod the heatsink to ensure a good fit.',
  },
  {
    image: './images/cooler/nh_c14s.jpg',
    alt: 'Image of Noctua NH-C14S Cooler',
    title: 'NH-C14S',
    subtitle: 'Noctua',
    type: 'Top flow cooler',
    heatpipe: '7 heatpipes',
    cardtext:
      'Comes with 1 140mm PWm fan. Similar cooling performance as the DRTF but less finicky installation. Fans can be run in different configurations and may need a 120mm fan (and fan clips) depending on PSU location.',
  },
  {
    image: './images/cooler/silver_arrow_130.jpg',
    alt: 'Image of Thermalright Silver Arrow 130 Cooler',
    title: 'Silver Arrow 130',
    subtitle: 'Thermalright',
    type: 'Dual-Tower cooler',
    heatpipe: '6 heatpipes',
    cardtext:
      'Comes with 1 135mm PWM fan. Can be changed out with 120mm fan of choice. Best tower cooler for the NCASE M1 currently. Slightly finicky installation.',
  },
  {
    image: './images/cooler/nh_u9s.jpg',
    alt: 'Image of Noctua NH-U9S Cooler',
    title: 'NH-U9S',
    subtitle: 'Noctua',
    type: 'Tower cooler',
    heatpipe: '5 heatpipes',
    cardtext:
      'Comes with 1 92mm PWM fan. Most popular choice for NCASE M1. Easy installation and good cooling performance. Able to add on another 92mm fan for better cooling.',
  },
  {
    image: './images/cooler/nh_d9l.jpg',
    alt: 'Image of Noctua NH-D9L Cooler',
    title: 'NH-D9L',
    subtitle: 'Noctua',
    type: 'Dual-Tower cooler',
    heatpipe: '4 heatpipes',
    cardtext:
      'Comes with 1 92mm PWM fan. Compact dual-tower cooler, very easy to install but cooling performance not as strong as the NH-U9S and the Silver Arrow 130. ',
  },
];

function populateCards() {
  airCoolersDB.forEach((cooler) => {
    const startCard = createHTMLElement('div', 'card', null);
    startCard.setAttribute('style', 'width: 22rem;');
    const cardBody = createHTMLElement('div', 'card-body', null);
    const imageDiv = createHTMLElement('div', 'embed-responsive', null);
    imageDiv.classList.add('embed-responsive-4by3');
    const coolerImg = createIMGElement('img', cooler.image, 'card-img-top', cooler.alt);
    coolerImg.classList.add('embed-responsive-item');
    imageDiv.appendChild(coolerImg);
    const cardTitle = createHTMLElement('h5', 'card-title', cooler.title);
    const cardSubtitle = createHTMLElement('h6', 'card-subtitle', cooler.subtitle);
    cardSubtitle.classList.add('mb-2', 'text-muted');
    const listStart = createHTMLElement('ul', 'list-group', null);
    listStart.classList.add('list-group-flush');
    const coolerType = createHTMLElement('li', 'list-group-item', cooler.type);
    listStart.appendChild(coolerType);
    const heatPipes = createHTMLElement('li', 'list-group-item', cooler.heatpipe);
    listStart.appendChild(heatPipes);
    const cardText = createHTMLElement('p', 'card-text', cooler.cardtext);

    const thisCard = [imageDiv, cardTitle, cardSubtitle, listStart, cardText];
    thisCard.forEach((element) => {
      cardBody.appendChild(element);
    });
    startCard.appendChild(cardBody);
    cardContainer.appendChild(startCard);
  });
}
populateCards();
