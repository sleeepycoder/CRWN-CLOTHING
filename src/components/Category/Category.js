import { useContext, useState, useEffect, Fragment } from 'react';
import { useParams } from 'react-router-dom';

import Product_card from '../ProductCard/Product_card';

import { CategoriesContext } from '../../contexts/Categories_context';

import './Category.styls.js';

const Category = () => {
  const { category } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <Fragment>
      <h2 className='category-title'>{category.toUpperCase()}</h2>
      <div className='category-container'>
        {products &&
          products.map((product) => (
            <Product_card key={product.id} product={product} />
          ))}
      </div>
    </Fragment>
  );
};

export default Category;