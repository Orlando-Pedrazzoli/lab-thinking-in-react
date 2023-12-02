import React from 'react';

function ProductRow({ product }) {
  const textColor = product.inStock ? 'black' : 'red';

  return (
    <tr style={{ color: textColor }}>
      <td>{product.name}</td>
      <td>{product.category}</td>
      <td>{product.price}</td>
      <td>{product.inStock ? 'In Stock' : 'Out of Stock'}</td>
    </tr>
  );
}

export default ProductRow;
