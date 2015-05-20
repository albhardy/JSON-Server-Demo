var R = require('ramda');
var faker = require('faker');
var peopleList=R.range(0,3);//[];
var assocArticlePeople=[]
var stateList=["borrowed","returned"];

//Article Class that Refer to People
function mArticle(x) {
  var randAuthor=peopleList[Math.floor(Math.random()*peopleList.length)]; //random author assignment
  assocArticlePeople.push({article_id:x, author_id:randAuthor}); //create association data 
  return {
    id:x,
    created_at: faker.date.recent(),
    description: faker.lorem.sentence(),
    state: stateList[Math.floor(Math.random()*stateList.length)],
    notes: faker.lorem.paragraph(),
    author_id:randAuthor
  };
}

function mShopping() {
  return {
    priority: faker.helpers.randomNumber(200), //range from 0 to 200
    transaction: faker.helpers.createTransaction()
  };
}

function mPeople(x) {
  //peopleList.push(x)
  var hasArticle= R.propEq('author_id', x)
  return {
    id:x,
    name: faker.name.firstName(),
    phone: faker.phone.phoneNumber(),
    email: faker.internet.email(),
    article: R.pluck('article_id')(R.filter(hasArticle, assocArticlePeople)) //extract article array associated with id x
    //shopping: R.range(0,2).map(mShopping), //repeat transaction x times
  };
}

var data = {
    article: R.range(0,5).map(mArticle),
    people: R.range(0,3).map(mPeople),
};

console.log(peopleList)
console.log(assocArticlePeople)

require('fs').writeFileSync('db.json', JSON.stringify(data, null, 2), 'utf-8');
