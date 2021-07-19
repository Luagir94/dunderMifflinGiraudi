import { createContext,useState } from "react";

const CartContext = createContext()

const CartProvider =({children}) =>{

    const [cartItems, setCartItems] = useState([])

    const addToCart = (count) => {
        cartItems(count);
        alert(`Se agregaron ${count} items`);}

    const dataCart =[cartItems,addToCart]

    return(<CartContext.provider value={dataCart}>{children}</CartContext.provider>)
}
export {CartProvider}
export default CartContext