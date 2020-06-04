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

const psuDB = [
  {
    image: './images/psu/SF600.png',
    alt: 'Image of Corsair SFX PSU SF600 Gold',
    title: 'SF600',
    subtitle: 'Corsair',
    type: '600W SFX PSU',
    efficiency: '80 PLUS Gold / 80 PLUS Platinum',
    cardtext:
      'Comes in 2 versions. Gold version occasionally has a noisy fan issue and cables are tough. Platinum version has a better fan and curves to solve the problem and comes with braided cables for easy cable management. Currently one of the most used SFX PSU in the NCASE M1',
  },
  {
    image: './images/psu/SF750.png',
    alt: 'Image of Corsair SFX PSU SF750 Platinum',
    title: 'SF750',
    subtitle: 'Corsair',
    type: '750W SFX PSU',
    efficiency: '80 PLUS Platinum',
    cardtext:
      'Only 750W SFX PSU in the market. Currently having some issues and a recall has been issued by Corsair',
  },
  {
    image: './images/psu/Gm-650.jpg',
    alt: 'Image of EVGA GM-650 PSU',
    title: 'SuperNOVA 650 GM',
    subtitle: 'EVGA',
    type: '650W SFX PSU',
    efficiency: '80 PLUS Gold',
    cardtext: 'Alternative to SF600. Comes with braided cables.',
  },
];

function populateCards() {
  psuDB.forEach((psu) => {
    const startCard = createHTMLElement('div', 'card', null);
    startCard.setAttribute('style', 'width: 22rem;');
    const cardBody = createHTMLElement('div', 'card-body', null);
    const imageDiv = createHTMLElement('div', 'embed-responsive', null);
    imageDiv.classList.add('embed-responsive-4by3');
    const psuImg = createIMGElement('img', psu.image, 'card-img-top', psu.alt);
    psuImg.classList.add('embed-responsive-item');
    imageDiv.appendChild(psuImg);
    const cardTitle = createHTMLElement('h5', 'card-title', psu.title);
    const cardSubtitle = createHTMLElement('h6', 'card-subtitle', psu.subtitle);
    cardSubtitle.classList.add('mb-2', 'text-muted');
    const listStart = createHTMLElement('ul', 'list-group', null);
    listStart.classList.add('list-group-flush');
    const psuType = createHTMLElement('li', 'list-group-item', psu.type);
    listStart.appendChild(psuType);
    const efficiencyRating = createHTMLElement('li', 'list-group-item', psu.efficiency);
    listStart.appendChild(efficiencyRating);
    const cardText = createHTMLElement('p', 'card-text', psu.cardtext);

    const thisCard = [imageDiv, cardTitle, cardSubtitle, listStart, cardText];
    thisCard.forEach((element) => {
      cardBody.appendChild(element);
    });
    startCard.appendChild(cardBody);
    cardContainer.appendChild(startCard);
  });
}
populateCards();
