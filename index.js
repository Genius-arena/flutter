const express = require('express');
const lannisterPay = require('./util');

const app = express();

app.use(express.json());

app.post('/split-payments/compute', (req, res, next) => {
	const { ID, Amount, SplitInfo } = req.body;

	const response = lannisterPay(ID, Amount, SplitInfo);

	return res.status(200).json(response);
});

const port = 3000 || process.PORT.ENV;

app.listen(port, () => {
	console.log(`App is running on port ${port}`);
});
