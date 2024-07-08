import { addItem, removeItem, listItems } from './inventory.mjs'

addItem('Television');
addItem('Radio');
addItem('Car');
addItem('Truck');
listItems();

removeItem('Tree');
removeItem('Radio');
removeItem('Television');
addItem('Flower');
listItems();
