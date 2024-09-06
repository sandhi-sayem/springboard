const ItemAction = ({ id, onDeleteItem }) => {
  return <button onClick={() => onDeleteItem(id)}>Delete</button>;
};

export default ItemAction;
