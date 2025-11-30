import "./InventoryItem.css";
import type { Item } from "./type";

const InventoryItem = (props: Item) => {
    return (
        <div className="inventory-item-wrap">
            <div>SKU: {props.SKU}</div>
            <div>Name: {props.name}</div>
            <div>Quantity: {props.quantity}</div>
            <div>Price: ${props.price.toFixed(2)}</div>
        </div>
    );
};

export default InventoryItem;