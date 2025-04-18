import { supabase } from './supabase';

export const getProducts = async function () {
  const { data, error } = await supabase
    .from('products')
    .select('id, title, regular_price, thumbnail')
    .order('title');

  if (error) {
    console.error(error);
    throw new Error('Products could not be loaded');
  }

  return data;
};
