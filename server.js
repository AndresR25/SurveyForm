let express = require("express");
let path = require('path');
let app = express();
let dojos = ['New York', 'Washington DC', 'Angeles', 'Orlando']
let languages = ['Javascript', 'Python', 'Java', 'Go', 'C++']
let ninja;

let bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "./static")));


app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
    response.render("index", {'dojos': dojos, 'languages':languages});
})

app.post('/add', function(request, response) {
    ninja = request.body;
    response.redirect('/show')
})

app.get('/show', function(request, response) {
    response.render("submitted", {'user': ninja});
})

app.listen(8080, function() {
 console.log("Listening on port 8080");
});