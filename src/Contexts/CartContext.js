import { createContext,useState,useEffect } from "react";


const CartContext = createContext()

const CartProvider =({children}) =>{
    const [quantityToAdd, setQuantityToAdd] = useState(undefined);
    const [isHidden, setIsHidden] = useState(true);
    const [cartItems, setCartItems] = useState([])
    const [widgetNumber, setWidgetNumber] = useState(0)
    const [name, setName] = useState('')


    const onAdd = (number) => setQuantityToAdd(number);

    const isInCart = (id) => {
        return cartItems.find((item) => id === item.id)
       }

    const addToCart = (item, id,count,price) => {
        if (isInCart(id)){
            const updateCart = [...cartItems];
      
            updateCart.forEach((element) => {
              if (element.id === id) {
               return element.count = element.count + count;
              }
            });
            setCartItems(updateCart);
            setName(item)
            setWidgetNumber(count+ widgetNumber)
        }else {
        const purchase = {
            item: item,
            id: id,
            count: count,
            price:price,
        };
        setName(item)
        setCartItems([...cartItems, purchase]);
        setWidgetNumber(purchase.count+ widgetNumber)
        
    }};
    useEffect(() => {
        quantityToAdd ? setIsHidden(false) : setIsHidden(true);
    }, [quantityToAdd]);

    const clearCart = ()=>{
        setCartItems([])
        setWidgetNumber(0)
    }
    const removeItem = (id) => {
        const nuevoArray = cartItems.filter((element)=>element.id!==id)
        setCartItems(nuevoArray)
    }

    return(<CartContext.Provider value={{cartItems,name, addToCart,quantityToAdd,onAdd,isHidden,widgetNumber,isInCart,clearCart,setQuantityToAdd,removeItem,setWidgetNumber }}>{children}</CartContext.Provider>)
}
export {CartProvider}
export default CartContext