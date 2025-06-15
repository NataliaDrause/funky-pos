import { OrderItem } from '../_types/order';
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

export const getOrders = async function () {
  const { data, error } = await supabase
    .from('orders')
    .select('id, total, total_paid, total_tax, status, created_at')
    .order('created_at', { ascending: false });

  // await new Promise((resolve) => setTimeout(resolve, 5000)); // Simulate a delay

  if (error) {
    console.error(error);
    throw new Error('Orders could not be loaded');
  }

  return data;
};

export async function getOrderDetails(orderId: number) {
  // Fetch order details
  const { data: order, error: orderError } = await supabase
    .from('orders')
    .select('*')
    .eq('id', orderId)
    .single();

  if (orderError) throw orderError;

  // Fetch order items and join with product details
  const { data: orderItems, error: orderItemsError } = await supabase
    .from('order_items')
    .select(
      `
      id,
      product_id,
      quantity,
      unit_price,
      unit_tax,
      products (
        id,
        title,
        regular_price
      )
    `
    )
    .eq('order_id', orderId);

  if (orderItemsError) throw orderItemsError;

  // Transform the data to match the expected structure
  const products = orderItems.map((item) => ({
    id: item.products.id,
    name: item.products.title,
    quantity: item.quantity,
    regular_price: item.unit_price,
  }));

  // Combine order and products into a single object
  return {
    id: order.id,
    total: order.total,
    status: order.status,
    created_at: order.created_at,
    products,
  };
}
