// Dependencies
const express = require('express');
const cors = require('cors');
const app = express();
app.set('port', process.env.PORT || 3000);

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Redirect
// app.get('/', (req, res) => {
// 	res.redirect('/gifs');
// });

// /* START CONTROLLERS HERE */
// const gifController = require('./controller/gifController');
// // direct all requests to "/gifs" to the gif controller
// app.use('/gifs', gifController);

// /* END CONTROLLERS HERE */
// app.use((err, req, res, next) => {
// 	const statusCode = res.statusCode || 500;
// 	const message = err.message || 'Internal Server Error';
// 	res.status(statusCode).send(message);
// });
// //

app.listen(app.get('port'), () => {
	console.log(`✅ PORT: ${app.get('port')} 🌟`);
});
