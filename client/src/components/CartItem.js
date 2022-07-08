const CartItem = ({ item }) => {
  const { name, price } = item
  return (
    <div id='cart-item' className="flex-row align-center space-between p-l">
      <div className="font-bold">
        {name}
      </div>
      <div>{price}</div>
    </div>
  )
}

export default CartItem