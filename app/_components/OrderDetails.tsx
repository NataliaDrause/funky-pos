import { OrderFull } from '../_types/order';

export default function OrderDetails({ order }: { order: OrderFull }) {
  return (
    <div>
      <h2>Order #{order.id}</h2>
      <p>
        <strong>Total:</strong> ${order.total.toFixed(2)}
      </p>
      <p>
        <strong>Status:</strong> {order.status}
      </p>
      <p>
        <strong>Created At:</strong>{' '}
        {new Date(order.created_at).toLocaleString()}
      </p>
      <h3>Products:</h3>
      <ul>
        {order.products.map((product) => (
          <li key={product.id}>
            {product.name} - Quantity: {product.quantity}, Price: $
            {product.regular_price.toFixed(2)}
          </li>
        ))}
      </ul>
    </div>
  );
}
