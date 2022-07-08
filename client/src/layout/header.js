import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCartShopping } from "@fortawesome/free-solid-svg-icons"
import { useSelector } from "react-redux"
import { useNavigate } from 'react-router-dom'
import { cartCount } from "../features/cart/cartSlice"
const Header = () => {
  const count = useSelector(cartCount)
  const navigate = useNavigate()
  return (
    <div id='header' className="flex-row space-between align-center">
      <section className="p-l pointer">XenElectronic</section>
      <section className="flex-row mr-l">
        <div className="p-relative pointer" onClick={() => navigate("/cart")}>
          <FontAwesomeIcon icon={faCartShopping} />
          <span className="count-badge">{count}</span>
        </div>
      </section>
    </div>
  )
}

export default Header