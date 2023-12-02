import React, { useState } from 'react';
import jsonData from './../../data.json';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

function ProductsPage() {
  const [products, setProducts] = useState(jsonData);
  const [searchTerm, setSearchTerm] = useState('');
  const [showInStockOnly, setShowInStockOnly] = useState(false);

  const handleSearch = (term) => {
    setSearchTerm(term);
    updateProducts(term, showInStockOnly);
  };

  const handleCheckboxChange = (isChecked) => {
    setShowInStockOnly(isChecked);
    updateProducts(searchTerm, isChecked);
  };

  const updateProducts = (searchTerm, inStockOnly) => {
    let updatedProducts = jsonData.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (inStockOnly) {
      updatedProducts = updatedProducts.filter((product) => product.inStock);
    }

    setProducts(updatedProducts);
  };

  return (
    <div>
      <h1>IronStore</h1>
      <SearchBar
        onSearch={handleSearch}
        onCheckboxChange={handleCheckboxChange}
      />
      <ProductTable products={products} />
    </div>
  );
}

export default ProductsPage;
