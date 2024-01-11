import './Counter.css'
import { useState } from "react"

function Counter() {
    const[cart, setCart] = useState({
        item: "apple", 
        quantity: 0,
    });

    function removeApple() {
        // 1. Use a callback to get the previous value
        // 2. Spread out all the properties of the previous state
        // 3. Only change the property that you need to change
        setCart(prevCart => ({
            ...prevCart,
            quantity: prevCart.quantity - 1,
        }))
    }

    function addApple() {
        setCart(prevCart => ({
            ...prevCart,
            quantity: prevCart.quantity + 1,
        }))
    }
    return (
        <div className='counter'> 
        <button onClick={removeApple}>-</button>
        {cart.quantity}
        {cart.item}
        <button onClick={addApple}>+</button>
        </div>
    )
}

export default Counter