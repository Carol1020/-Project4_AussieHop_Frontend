import React from 'react'

function UserCardBlock(props) {
  const renderCartRoute = (routes) => {
    if(routes.length > 0) {
      let route = routes[0]
      return `http://localhost:3001/${route}`
    }
  }

    const renderItems = () => (
        props.products && props.products.map(product => (
            <tr key={product._id}>
                <td>
                    <img style={{ width: '70px' }} alt="product"
                    src={renderCartImage(product.routes)} />
                </td>
                <td>{product.quantity} EA</td>
                <td>$ {product.price} </td>
                <td><button
                onClick={()=> props.removeItem(product._id)}
                >Remove </button> </td>
            </tr>
        ))
    )


    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Product Image</th>
                        <th>Product Quantity</th>
                        <th>Product Price</th>
                        <th>Remove from Cart</th>
                    </tr>
                </thead>
                <tbody>
                    {renderItems()}
                </tbody>
            </table>
        </div>
    )
}

export default UserCardBlock
