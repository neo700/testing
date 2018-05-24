const express = require('express');
const hbs = require('hbs');

var app = express();

hbs.registerPartials(__dirname + '/views/partials');

app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));

app.use((req, res, next) => {
    var now = new Date().toString();
    console.log(`${now}: ${req.method} ${req.url}`);
    next();
});

hbs.registerHelper('getcurrentyear', () => {
   // return 'test';
 return new Date().getFullYear()
});

app.get('/', (req, res) => {
    res.render('home.hbs',{
        pagetitle: 'HOme PAde',
        
        wel: 'Welcome to your tapes'
    });
});

app.get('/about', (req, res) => {
    res.render('about.hbs', {
        pagetitle: 'about page',
        currentyear: new Date().getFullYear()
    });
});

app.get('/bad', (req,res) => {
    res.send({
        errormsg: 'Unable to handle request'
    })
});

app.listen(3000);