import { useEffect, useState } from "react";
import InventoryItem from "./InventoryItem";
import type { Item } from "./type";

const InventoryList = () => {

    const [items, setItems] = useState<Item[]>([]);

    useEffect(() => {
        const fetchItems = async () => {
            const response = await fetch("inventory.json");
            const data: Item[] = await response.json();
            setItems(data);
        };
        fetchItems();
    }, []);

    return (
        <div>
            
            <h2>Inventory List</h2>
            {items.map(item => (
                <InventoryItem
                    key={item.SKU}
                    SKU={item.SKU}
                    name={item.name}
                    quantity={item.quantity}
                    price={item.price} />
            ))}
        </div>
    );
};

export default InventoryList;