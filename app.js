const express = require('express');
const hbs = require('hbs');
const app = express();

// MIDDLEWARE
app.use(express.static(__dirname));

// SET VIEWS FOR THE HANDLEBARS ENGINE
app.set('views', __dirname + '/views');

// SET HBS AS THE TEMPLATING ENGINE
app.set('view engine', 'hbs');

// ROUTES
app.get('/', (req, res) => {
  const data = {
    name: 'Ironhacker',
    bootcamp: 'IronHack Barcelona - WebDev',
    message: [],
    address: 'Barcelona C. Pamplona 96',
    // address: 0							won't be rendered
    // address: ''							won't be rendered
    // address: []							won't be rendered

    cities: ['Barcelona', 'Madrid', 'Paris', 'Berlin', 'Miami'],
    countries: ['Spain', 'France', 'Germany', 'USA'],

    info: { name: 'Ironhacker', campus: 'Barcelona', year: 2019 },
  };

  res.render('index', data);
});

app.get('/sendhtml', (req, res, next) => {
  res.send(`
  <!doctype html>
  <html>
    <head>
  <!-- 
      We are still not serving static files, therfore
      the below stylesheet won't be able to load, yet.
  -->
      <link rel="stylesheet" src="./css/style.css">
    </head>

    <body>
      <h1>This is my second route</h1>
    </body>
    
  </html>
`);
});

app.listen(3000, () => {
  console.log('Server running');
});
