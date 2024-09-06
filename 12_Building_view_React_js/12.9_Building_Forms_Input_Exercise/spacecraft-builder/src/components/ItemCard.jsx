const ItemCard = ({ name, quantity, purpose }) => {
  return (
    <div>
      <h4>{name}</h4>
      <p>Quantity: {quantity}</p>
      <p>Purpose: {purpose}</p>
    </div>
  );
};

export default ItemCard;
