import { useEffect, useState } from "react";
import InventoryItem from "./InventoryItem";
import type { Item } from "./type";
import "./InventoryList.css";

const InventoryList = () => {

    const [items, setItems] = useState<Item[]>([]);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const fetchItems = async () => {
            const response = await fetch("/inventory.json");
            const data: Item[] = await response.json();
            setItems(data);
            setIsLoaded(true);
        };
        fetchItems();
    }, []);

    return (
        <div>
            
            <h2>Inventory List</h2>
            <div className={`inventory-list-wrap ${isLoaded ? "enter-animation" : ""}`}>
                {items.map(item => (
                    <InventoryItem
                        key={item.SKU}
                        SKU={item.SKU}
                        name={item.name}
                        quantity={item.quantity}
                        price={item.price} />
                ))}
            </div>
        </div>
    );
};

export default InventoryList;