/**
 
    1. Named Exports and Imports:** Create an inventory management system for an online store, practicing the use of named exports and imports.
    - Implement `inventory.mjs`, exporting named functions: `addItem` that adds an item by name to the inventory array, `removeItem` that removes an item by name from the inventory array, `listItems` that logs all item names currently in the inventory.
    - Implement `storeManager.mjs` that imports the functions from `inventory.mjs` to demonstrate adding a few items, removing an item, and then listing the remaining items in the inventory.

**/

const items = [];

export const addItem = item => {
    if (items.includes(item))
        console.log(`${item} already exists in inventory`);
    else {
        console.log(`${item} added to inventory`);
        items.push(item);
    }
}

export const removeItem = item => {
    const index = items.indexOf(item);

    if (index === -1)
        console.log(`${item} doesn't exist in inventory`);
    else {
        items.splice(index, 1);
        console.log(`${item} removed from inventory`);
    }
}

export const listItems = () => {
    console.log(`List of all items in inventory: `)

    for (let i = 0; i < items.length; i++)
        console.log(`${i + 1}. ${items[i]}`);
}