'use client';

import { useState } from 'react';
import { Order, OrderFull } from '../_types/order';
import styles from './orders.module.scss';
import OrderDetails from './OrderDetails';
import OrdersList from './OrdersList';
import { getOrderDetails } from '../_api/data-service';

function OrdersContainer({ orders }: { orders: Order[] }) {
  const [selectedOrder, setSelectedOrder] = useState<OrderFull | null>(null);

  const handleOrderClick = async (orderId: number) => {
    const orderDetails = await getOrderDetails(orderId);
    setSelectedOrder(orderDetails);
  };
  return (
    <div className={styles.ordersContainer}>
      <div className={styles.ordersList}>
        <input
          type='text'
          placeholder='Search orders...'
          className={styles.searchBar}
        />
        <OrdersList
          orders={orders}
          onOrderClick={handleOrderClick}
          selectedOrderId={selectedOrder?.id || null}
        />
      </div>

      <div className={styles.orderContainer}>
        {selectedOrder ? (
          <OrderDetails order={selectedOrder} />
        ) : (
          <p className={styles.placeholder}>Select an order to view details</p>
        )}
      </div>
    </div>
  );
}

export default OrdersContainer;
