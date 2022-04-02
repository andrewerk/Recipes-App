const actual = {
  idMeal: 25512,
};

const obj = {
  meals: {
    52771: ['aqui', 'tem'],
    25512: ['aa', 'bb'],
  },
  cocktails: {
    178319: [],
  },
};

if (obj.meals[actual.idMeal]) {
  console.log(obj.meals[actual.idMeal]);
}
