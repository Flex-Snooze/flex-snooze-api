const User = require('./models/User');
const userSeedData = require('./userSeeds.json');

User.deleteMany({})
	.then(() => {
		User.insertMany(userSeedData).then((User) => {
			console.log('We have a user 🧍');
			console.log(User);
			process.exit();
		});
	})
	.catch((err) => console.error(err));
