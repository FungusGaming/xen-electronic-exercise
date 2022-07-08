import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import CartItem from "../components/CartItem"
import { cartItems } from "../features/cart/cartSlice"
import Footer from "../layout/footer"
import Header from "../layout/header"

const CartList = () => {
  const navigate = useNavigate()
  const items = useSelector(cartItems)
  const getTotal = () => {
    let total = 0
    for(let i of items) {
      total += i.price
    }
    return total
  }
  return (
    <div className="flex-column flex-one">
      <Header />
      <div className="flex-one p-l border-solid">
        <div id='cart-list-title' className='flex-row mb-l'>
          <button className="trans-button" onClick={() => navigate(-1)}>
            <FontAwesomeIcon icon={faArrowLeft} />
          </button>
          <h1>Your Cart</h1>
        </div>
        {
          items.length === 0 ? <div>
            Your cart is empty
          </div> : <div id='cart-list-item'>
            {items.map(item => (
              <CartItem item={item} />
            ))}
            <div className="flex-row align-center space-between p-l">
              <div>Total:</div>
              <div className="color-currency font-bold">{getTotal()}</div>
            </div>
            <div className="flex-row justify-end">
              <button>Checkout</button>
            </div>
          </div>
        }
      </div>
      <Footer />
    </div>
  )
}

export default CartList