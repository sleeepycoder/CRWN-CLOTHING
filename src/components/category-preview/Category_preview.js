import React from 'react'
import './catpre.scss'
import Product_card from '../ProductCard/Product_card'

const Category_preview = ({ title, products }) => {
  return (

    <div className='category-preview-container'>
    <h2>
      <span className='title'>{title.toUpperCase()}</span>
    </h2>
    <div className='preview'>
      {products
        .filter((_, idx) => idx < 4)
        .map((product) => (
          <Product_card key={product.id} product={product} />
        ))}
    </div>
  </div>

 
    
  )
}

export default Category_preview