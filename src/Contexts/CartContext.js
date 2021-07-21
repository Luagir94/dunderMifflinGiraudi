import { createContext,useState,useEffect } from "react";


const CartContext = createContext()

const CartProvider =({children}) =>{
    const [quantityToAdd, setQuantityToAdd] = useState(undefined);
    const [isHidden, setIsHidden] = useState(true);
    const [cartItems, setCartItems] = useState([])
    const [widgetNumber, setWidgetNumber] = useState(0)

    const onAdd = (number) => setQuantityToAdd(number);

    const isInCart = (id) => cartItems.filter((currentItem) => id === currentItem.id).length !== 0;

    const addToCart = (item, id,count,price) => {
        const purchase = {
            item: item,
            id: id,
            count: count,
            price:price,
        };
        setCartItems([...cartItems, purchase]);
        setWidgetNumber(purchase.count+ widgetNumber)
        alert(`Se agregaron ${count} items`)
    };
    useEffect(() => {
        quantityToAdd ? setIsHidden(false) : setIsHidden(true);
    }, [quantityToAdd]);

    const clearCart = ()=>{
        setCartItems([])
    }
    const removeItem = (id) => {
        const nuevoArray = cartItems.filter(i=>i.item.id!==id)
        setCartItems(nuevoArray)
    }

    return(<CartContext.Provider value={{cartItems, addToCart,quantityToAdd,onAdd,isHidden,widgetNumber,isInCart,clearCart,setQuantityToAdd,removeItem,setWidgetNumber }}>{children}</CartContext.Provider>)
}
export {CartProvider}
export default CartContext