import React from 'react'
import { useContext, Fragment } from 'react';

import { CategoriesContext } from '../../contexts/Categories_context';
import Category_preview from '../category-preview/Category_preview';


const Categories_preview = () => {

    const { categoriesMap } = useContext(CategoriesContext);

    return (
      <Fragment>
        {Object.keys(categoriesMap).map((title) => {
          const products = categoriesMap[title];
          return (
            <Category_preview key={title} title={title} products={products} />
          );
        })}
      </Fragment>
    );
  };

export default Categories_preview