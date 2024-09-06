import ItemCard from "./ItemCard";
import ItemAction from "./ItemAction";

const InventoryDisplay = ({ inventory, onDeleteItem }) => {
  return (
    <div>
      <h3>Inventory</h3>

      {inventory.map((item) => (
        <div key={item.id}>
          <div>
            <ItemCard
              name={item.name}
              quantity={item.quantity}
              purpose={item.purpose}
            />
          </div>

          <div>
            <ItemAction id={item.id} onDeleteItem={onDeleteItem} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default InventoryDisplay;
