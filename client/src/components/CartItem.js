import { faMinus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../features/cart/cartSlice";
import SampleImg from '../assets/img/SampleImage.png'

const CartItem = ({ item, index }) => {
  const { name, price } = item
  const dispatch = useDispatch();
  return (
    <div id='cart-item' className="flex-row align-center">
      <div className="flex-row align-center space-between p-l flex-one">
        <div className="font-bold flex-row align-center">
          <img id='product-img' className='thumbnail-img mr-l' src={SampleImg} alt='product img' />
          <span>{name}</span>
        </div>
        <div>{price}</div>
      </div>
      <div className="pointer p-m color-red" onClick={() => dispatch(removeFromCart(index))}>
        <FontAwesomeIcon icon={faMinus} />
      </div>
    </div>
  )
}

export default CartItem