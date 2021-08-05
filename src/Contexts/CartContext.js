import { createContext,useState,useEffect } from "react";


const CartContext = createContext()

const CartProvider =({children}) =>{
    const [quantityToAdd, setQuantityToAdd] = useState(undefined);
    const [isHidden, setIsHidden] = useState(true);
    const [cartItems, setCartItems] = useState([])
    const [widgetNumber, setWidgetNumber] = useState(0)
<<<<<<< HEAD
    const [totalQty, setTotalQty] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);

    const onAdd = (number) => setQuantityToAdd(number);

    
=======
    const [name, setName] = useState('')


    const onAdd = (number) => setQuantityToAdd(number);

    const isInCart = (id) => {
        return cartItems.find((item) => id === item.id)
       }
>>>>>>> firebase

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
            price:parseInt(price),
        };
<<<<<<< HEAD
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
=======
        setName(item)
        setCartItems([...cartItems, purchase]);
>>>>>>> firebase
        setWidgetNumber(purchase.count+ widgetNumber)
        
    }};
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

<<<<<<< HEAD
    return(<CartContext.Provider value={{cartItems,setTotalPrice, addToCart,quantityToAdd,onAdd,isHidden,widgetNumber,clearCart,setQuantityToAdd,removeItem,setWidgetNumber }}>{children}</CartContext.Provider>)
=======
    return(<CartContext.Provider value={{cartItems,name, addToCart,quantityToAdd,onAdd,isHidden,widgetNumber,isInCart,clearCart,setQuantityToAdd,removeItem,setWidgetNumber }}>{children}</CartContext.Provider>)
>>>>>>> firebase
}
export {CartProvider}
export default CartContext