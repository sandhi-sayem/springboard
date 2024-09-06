import { useState } from "react";
import ItemForm from "./ItemForm";
import InventoryDisplay from "./InventoryDisplay";

const SpacecraftBuilder = () => {
  const [inventory, setInventory] = useState([]);

  const addItem = (item) =>
    setInventory((prevInventory) => [...prevInventory, item]);

  const deleteItem = (id) =>
    setInventory((prevInventory) =>
      prevInventory.filter((item) => item.id !== id)
    );

  return (
    <>
      <h1>Spacecraft Builder</h1>
      <ItemForm onFormSubmit={addItem} />
      <InventoryDisplay inventory={inventory} onDeleteItem={deleteItem} />
    </>
  );
};

export default SpacecraftBuilder;
