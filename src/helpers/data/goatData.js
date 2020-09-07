/* eslint-disable max-len */
const goats = [
  {
    id: 'goat1',
    name: 'Billy the Kid',
    age: 2,
    description: 'I like Yoga!',
    imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/b/b2/Hausziege_04.jpg',
    isTaken: true,
  },
  {
    id: 'goat2',
    name: 'Wooly',
    age: 85,
    description: 'I like eating grass.',
    imgUrl: 'https://pbs.twimg.com/profile_images/980547001166295041/eBs20xF4.jpg',
    isTaken: true,
  },
  {
    id: 'goat3',
    name: 'Vincent van Goat',
    age: 18,
    description: 'SHHHHHHH',
    imgUrl: 'https://i.guim.co.uk/img/media/583b1b167c0b51719de576054d524326e577b21f/0_206_4488_2693/master/4488.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=ec9cd7801edcd0255065ba9eea8b4a92',
    isTaken: false,
  },
  {
    id: 'goat4',
    name: 'Butter',
    age: 1,
    description: 'RAWRRRR',
    imgUrl: 'https://i.ytimg.com/vi/cEJy2q27hVk/maxresdefault.jpg',
    isTaken: false,
  },
  {
    id: 'goat5',
    name: 'Ramsey',
    age: 0.5,
    description: 'Nope',
    imgUrl: 'https://www.psephizo.com/wp-content/uploads/2018/09/1438297793139.jpeg',
    isTaken: false,
  },
];

const getGoats = () => goats;

const takeGoat = (goatId) => {
  goats.forEach((response) => { // eslint wants this to be 'response'
    if (response.id === goatId) {
      response.isTaken = true;
    }
  });
};

const freeGoat = (goatId) => {
  const foundGoat = goats.findIndex((goat) => goat.id === goatId);
  goats[foundGoat].isTaken = false;
};

export default { getGoats, takeGoat, freeGoat };
