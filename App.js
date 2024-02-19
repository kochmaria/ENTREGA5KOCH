
import React, { useState } from 'react';
import Home from './src/screens/Home';
import ItemListCategories from './src/screens/ItemListCategories';

export default function App() {
  const [categorySelected, setCategorySelected] = useState('');
  return (
    <>
      {categorySelected ? (
        <ItemListCategories category={categorySelected} />
      ) : (
        <Home setCategorySelected={setCategorySelected} />
      )}
    </>
  );
}
