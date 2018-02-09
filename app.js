// const http = require('http');

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World\n');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });


const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

//configure the app
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//middleware
app.use(bodyParser());

app.listen(3001);

app.get('/', (req, res) => {
	res.send('welcome to asd');
});

app.post('/add', (req, res) => {
	const newItem = req.body.newItem;
	console.log(newItem);
	res.redirect('/');
});

app.get('/view', (req, res) => {
	res.render('index');
});