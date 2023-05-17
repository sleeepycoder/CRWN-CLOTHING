import React from 'react'
import { Routes, Route } from 'react-router-dom';

import './shop.scss'
import Categories_preview from '../categories-preview/Categories_preview';
import Category from '../Category/Category';

const Shop = () => {

    //  console.log(products);
  return (
    <Routes>
      <Route index element={<Categories_preview />} />
      <Route path=':category' element={<Category />} />
    </Routes>
  )
}

export default Shop