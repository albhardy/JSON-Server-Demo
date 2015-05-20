# JSON-Server Demo

This README outlines the details of creating demo JSON REST API using json-server and ramda based on tutorial http://glebbahmutov.com/blog/fast-prototyping-using-restangular-and-json-server/.
To generate data run
```
node index.js
```
This will create db.json. Customize index.js as necessary using faker.js or chance.js. Then ro run REST API using json-server run
```
json-server db.json
```
then launch localhost:3000/
## Prerequisites

You will need the following things properly installed on your computer.

* [JSON-Server](https://github.com/typicode/json-server)
* [Ramda](http://ramdajs.com/docs/#range) 

See other articles
http://www.gajotres.net/how-to-generate-various-fake-data-using-javascript/