import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('/product.xml');
        const text = await response.text();

        // Parsiranje XML-a
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(text, 'text/xml');

        // Ekstrakcija podataka
        const productNodes = xmlDoc.getElementsByTagName('product');
        const productsArray = Array.from(productNodes).map((node) => ({
          ImgLink: node.getElementsByTagName('imgLink')[0].textContent,
          Name: node.getElementsByTagName('name')[0].textContent,
          Opis: node.getElementsByTagName('opis')[0].textContent,
          Cena: node.getElementsByTagName('cena')[0].textContent,
        }));

        setProducts(productsArray);
      } catch (error) {
        console.error('Greška prilikom učitavanja proizvoda:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {products.map((product, index) => (
        <ProductCard
          key={index}
          ImgLink={product.ImgLink}
          Opis={product.Opis}
          Name={product.Name}
          Cena={product.Cena}
        />
      ))}
    </div>
  );
};

export default ProductList;
