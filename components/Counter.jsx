import './Counter.css'
import { useState } from "react"

function Counter() {
    const[cart, setCart] = useState({
        item: "apple", 
        quantity: 0,
    });

    function removeApple() {
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