import React, { useContext, useState } from 'react'

const OrderContext = React.createContext()

const ContextOrder = () => {
  const [order, setOrder] = useState({
    price: 0,
    option: 'none',
  })

  return (
    <OrderContext.Provider value={{ order, setOrder }}>
      ContextOrder
      <hr />
      <Order />
      <hr />
      <Total />
      <hr />
    </OrderContext.Provider>
  )
}

export default ContextOrder

const Order = () => {
  const { order, setOrder } = useContext(OrderContext)

  const hanleChange = (e) => {
    let price = 0
    switch (e.target.value) {
      case 'sugar':
        price = 1000
        break
      case 'milk':
        price = 1500
        break
      case 'none':
      default:
        price = 0
        break
    }
    setOrder({ ...order, option: e.target.value, price: price })
  }

  return (
    <div>
      <h2>Order</h2>
      <select value={order.option} onChange={hanleChange}>
        <option value="none">None</option>
        <option value="sugar">Sugar</option>
        <option value="milk">Milk</option>
      </select>
    </div>
  )
}

const Total = () => {
  const { order } = useContext(OrderContext)
  return (
    <div>
      <p>Price: {order.price}원</p>
      <p>Option: {order.option}</p>
    </div>
  )
}
