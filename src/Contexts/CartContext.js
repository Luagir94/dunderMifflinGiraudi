import { createContext,useState,useEffect } from "react";


const CartContext = createContext()

const CartProvider =({children}) =>{
    const [quantityToAdd, setQuantityToAdd] = useState(undefined);
    const [isHidden, setIsHidden] = useState(true);
    const [cartItems, setCartItems] = useState([])
    const [widgetNumber, setWidgetNumber] = useState(0)
    const [totalQty, setTotalQty] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);

    const onAdd = (number) => setQuantityToAdd(number);

    

    const addToCart = (item, id,count,price) => {
        const purchase = {
            item: item,
            id: id,
            count: count,
            price:parseInt(price),
        };
        setTotalQty(totalQty + count);
        const isInCart = (id) => cartItems.find((currentItem) => id === currentItem.id);

        if(isInCart === false) {
            const newArray = Array.from(cartItems);
            cartItems.count += purchase.count;
            setCartItems(newArray); 
        } else {
            setCartItems([...cartItems, purchase]);
            setTotalPrice(totalPrice + (purchase.price * purchase.count))
        }
        ;
        setWidgetNumber(purchase.count+ widgetNumber)
        alert(`Se agregaron ${count} items`)
    };
    useEffect(() => {
        quantityToAdd ? setIsHidden(false) : setIsHidden(true);
        console.log(totalPrice)
    }, [quantityToAdd,totalPrice]);

    const clearCart = ()=>{
        setCartItems([])
        setWidgetNumber(0)
        setTotalPrice(0)
    }
    const removeItem = (id) => {
        const nuevoArray = cartItems.filter((element)=>element.id!==id)
        setCartItems(nuevoArray)
    }

    return(<CartContext.Provider value={{cartItems,setTotalPrice, addToCart,quantityToAdd,onAdd,isHidden,widgetNumber,clearCart,setQuantityToAdd,removeItem,setWidgetNumber }}>{children}</CartContext.Provider>)
}
export {CartProvider}
export default CartContext