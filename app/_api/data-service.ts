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
