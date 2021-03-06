const express = require('express');
const cors = require('cors');
const app = express();
app.set('port', process.env.PORT || 4000);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get('/', (req, res) => {
	res.redirect('/api');
});

const userController = require('./controllers/user');
app.use('/api/user', userController);

const logController = require('./controllers/log');
app.use('/api/log', logController);

app.use((err, req, res, next) => {
	const statusCode = res.statusCode || 500;
	const message = err.message || 'Internal Server Error';
	res.status(statusCode).send(message);
});

app.listen(app.get('port'), () => {
	console.log(`✅ PORT: ${app.get('port')} 🌟`);
});
