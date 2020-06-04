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

const fansDB = [
  {
    image: './images/fans/A12x25.jpg',
    alt: 'Image of Noctua NF-A12x25 fan',
    title: 'NF-A12x25',
    subtitle: 'Noctua',
    type: '120mm fan up to 2000 RPM',
    usage: 'Side intake/exhaust, bottom intake/exhaust',
    cardtext:
      "Noctua's newest series of fans with Sterrox. Most popular fan with very good noise to performance ratio. Can be expensive.",
  },
  {
    image: './images/fans/GentleTyphoon.webp',
    alt: 'Image of Scythe Gentle Typhoon fan',
    title: 'Gentle Typhoon',
    subtitle: 'Nidec',
    type: '120mm fan up to 1850/2150/3000 RPM',
    usage: 'Side intake/exhaust, bottom intake/exhaust',
    cardtext:
      'Popular fan by Nidec and available under different brands (Scythe, Dark Side). Similar to NF-A12, but may be slightly noisier. Difficult to find in certain areas.',
  },
  {
    image: './images/fans/ML120RGB.png',
    alt: 'Image of Corsair ML120 RGB fan',
    title: 'ML120 RGB',
    subtitle: 'Corsair',
    type: '120mm fan up to 1600 RPM',
    usage: 'Side intake/exhaust, bottom intake/exhaust',
    cardtext:
      'One of the popular choices for fans if RGB is needed. Noise & performance may not be as good as the GT or A12.',
  },
  {
    image: './images/fans/silentwings3.jpg',
    alt: 'Image of be quiet! Silent Wings 3 fan',
    title: 'Silent Wings 3',
    subtitle: 'be quiet!',
    type: '120mm fan up to 1450/2200 RPM',
    usage: 'Side intake/exhaust, bottom intake/exhaust',
    cardtext:
      'Good choice of fans if silence is of priority. Due to the lower RPM, less noise will be made but lesser cooling performance as a trade off.',
  },
  {
    image: './images/fans/A9.jpg',
    alt: 'Image of Noctua NF-A9x25 fan',
    title: 'NF-A9',
    subtitle: 'Noctua',
    type: '92mm fan up to 2000 RPM',
    usage: 'Rear intake/exhaust',
    cardtext:
      'Popular rear case fan in the NCASE M1. Check if sufficient clearance for cooler installation. Also available in a low profile version NF-A9x14',
  },
  {
    image: './images/fans/silentwings2.jpg',
    alt: 'Image of be quiet! Silent Wings 2 fan',
    title: 'Silent Wings 2',
    subtitle: 'be quiet!',
    type: '92mm fan up to 1800 RPM',
    usage: 'Rear intake/exhaust',
    cardtext: 'Alternative rear case fan for silent operations, slower RPM compared to NF-A9',
  },
];

function populateCards() {
  fansDB.forEach((fans) => {
    const startCard = createHTMLElement('div', 'card', null);
    startCard.setAttribute('style', 'width: 22rem;');
    const cardBody = createHTMLElement('div', 'card-body', null);
    const imageDiv = createHTMLElement('div', 'embed-responsive', null);
    imageDiv.classList.add('embed-responsive-1by1');
    const psuImg = createIMGElement('img', fans.image, 'card-img-top', fans.alt);
    psuImg.classList.add('embed-responsive-item');
    imageDiv.appendChild(psuImg);
    const cardTitle = createHTMLElement('h5', 'card-title', fans.title);
    const cardSubtitle = createHTMLElement('h6', 'card-subtitle', fans.subtitle);
    cardSubtitle.classList.add('mb-2', 'text-muted');
    const listStart = createHTMLElement('ul', 'list-group', null);
    listStart.classList.add('list-group-flush');
    const psuType = createHTMLElement('li', 'list-group-item', fans.type);
    listStart.appendChild(psuType);
    const efficiencyRating = createHTMLElement('li', 'list-group-item', fans.usage);
    listStart.appendChild(efficiencyRating);
    const cardText = createHTMLElement('p', 'card-text', fans.cardtext);

    const thisCard = [imageDiv, cardTitle, cardSubtitle, listStart, cardText];
    thisCard.forEach((element) => {
      cardBody.appendChild(element);
    });
    startCard.appendChild(cardBody);
    cardContainer.appendChild(startCard);
  });
}
populateCards();
