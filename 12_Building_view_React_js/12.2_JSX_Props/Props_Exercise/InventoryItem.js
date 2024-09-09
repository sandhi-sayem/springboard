function InventoryItem(/* TODO: Take the props. Set defaults to the quantity. */ { name, type, quantity = 0, price = 0 }) {

	const stockThreshold = 5;
	const thresholdValue = 1000;
	const totalValue = quantity * price;

	return (
		<div>
			{/* <h2><!-- TODO: Render the item's details. --></h2>
			<!-- TODO: Render the low stock alert based on the quantity of the item. -->
			<!-- TODO: Render the high value alert based on the total value of the item. --> */}

			<h2>{name} ({type})</h2>
			{quantity < stockThreshold && <Message><p>⚠️ Low Stock! {quantity} remained.</p></Message>}
			{totalValue > thresholdValue && <Message><p>💰 High value - consider extra protection!</p></Message>}
		</div>
	);
}
