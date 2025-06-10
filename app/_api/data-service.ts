import { CreateOrderParams } from '../_types/product';
import { supabase } from './supabase';

export const getProducts = async function () {
  const { data, error } = await supabase
    .from('products')
    .select('id, title, regular_price, thumbnail')
    .order('title');

  // await new Promise((resolve) => setTimeout(resolve, 5000)); // Simulate a delay

  if (error) {
    console.error(error);
    throw new Error('Products could not be loaded');
  }

  return data;
};

export async function createOrder({ total, cart, method }: CreateOrderParams) {
  const userId = 1; // Replace with actual user ID
  const customerId = 1; // Replace with actual customer ID

  // Insert into orders table
  const { data: order, error: orderError } = await supabase
    .from('orders')
    .insert({
      user_id: userId,
      customer_id: customerId,
      total,
      total_paid: total,
      total_tax: 0, // Adjust if tax is included
      status: 'completed',
      type: 'order',
    })
    .select()
    .single();

  if (orderError) throw orderError;

  // Insert into order_items table
  const orderItems = cart.map((item) => ({
    order_id: order.id,
    product_id: item.id,
    quantity: item.quantity,
    unit_price: item.regular_price,
    unit_tax: 0, // Adjust if tax is included
  }));

  const { error: orderItemsError } = await supabase
    .from('order_items')
    .insert(orderItems);

  if (orderItemsError) throw orderItemsError;

  // Insert into payments table
  const { error: paymentError } = await supabase.from('payments').insert({
    order_id: order.id,
    method,
    amount: total,
    status: 'paid',
  });

  if (paymentError) throw paymentError;

  return order;
}
