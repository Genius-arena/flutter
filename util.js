const lannisterPay = (ID, Amount, SplitInfo) => {
	// separate all entity types into different arrays
	const flatEntities = SplitInfo.filter(
		(entity) => entity.SplitType === 'FLAT'
	);

	const percentagesEntities = SplitInfo.filter(
		(entity) => entity.SplitType === 'PERCENTAGE'
	);

	const ratioEntities = SplitInfo.filter(
		(entity) => entity.SplitType === 'RATIO'
	);

	// split breakdown array
	const SplitBreakdown = [];

	// Handle flat entities first
	if (flatEntities.length > 0) {
		// console.log('FLAT ENTITIES', flatEntities);
		for (let entity of flatEntities) {
			SplitBreakdown.push({
				SplitEntityId: entity.SplitEntityId,
				Amount: entity.SplitValue,
			});
			// Deduct the amount from the total amount
			Amount -= entity.SplitValue;
		}
	}

	console.log('AMOUNT lEFT', Amount);

	// Handle percentage entities next
	if (percentagesEntities.length > 0) {
		// console.log('PERCENTAGE ENTITIES', percentagesEntities);
		for (let entity of percentagesEntities) {
			const entityAmount = Amount * (entity.SplitValue / 100);
			// console.log('PERCENTAGE ENTITY AMOUNT: ', entityAmount);
			SplitBreakdown.push({
				SplitEntityId: entity.SplitEntityId,
				Amount: entityAmount,
			});
			// Deduct the amount from the total amount
			Amount -= entityAmount;
		}
	}

	console.log('AMOUNT lEFT', Amount);

	// Handle ratio entities next
	if (ratioEntities.length > 0) {
		// console.log('RATIO ENTITIES', ratioEntities);
		let totalRatio = 0;
		let currentTotalAmount = Amount;

		totalRatio = ratioEntities.reduce((prevVal, currentVal) => {
			return prevVal + currentVal.SplitValue;
		}, totalRatio);

		for (let entity of ratioEntities) {
			const entityAmount =
				(entity.SplitValue / totalRatio) * currentTotalAmount;
			console.log('RATIO ENTITY AMOUNT: ' + entityAmount);
			SplitBreakdown.push({
				SplitEntityId: entity.SplitEntityId,
				Amount: entityAmount,
			});
			// Deduct the amount from the total amount
			Amount -= entityAmount;
			console.log('AMOUNT LEFT: ' + Amount);
		}
	}

	console.log('AMOUNT lEFT', Amount);

	return { ID, Balance: Amount, SplitBreakdown };
};

module.exports = lannisterPay;
