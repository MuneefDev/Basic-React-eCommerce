import { useEffect, useState } from "react";
import Product from "./Product";

function ProductsList() {
  const [products, setProudcts] = useState([]);
  const [categories, setCategories] = useState([]);

  const apiLink = "https://fakestoreapi.com/products";

  const getProducts = () => {
    fetch(apiLink)
      .then((res) => res.json())
      .then((products) => setProudcts(products));
  };

  const getCategories = () => {
    fetch(`${apiLink}/${"categories"}`)
      .then((res) => res.json())
      .then((cat) => setCategories(cat));
  };

  const getProductByCategory = (catName) => {
    fetch(`${apiLink}/category/${catName}`)
      .then((res) => res.json())
      .then((product) => setProudcts(product));
  };

  useEffect(() => {
    getProducts();
    getCategories();
  }, []);

  return (
    <>
      <h2 className="text-center">Our Products</h2>
      <div className="container">
        {categories.map((cat) => {
          return (
            <button
              className="btn btn-info mx-2"
              key={cat}
              onClick={() => getProductByCategory(cat)}
            >
              {cat}
            </button>
          );
        })}
        <button className="btn btn-info" onClick={getProducts}>
          All
        </button>
        <div className="row">
          {products.length === 0 ? (
            <h3 className="text-center p-30">Loading ...</h3>
          ) : null}
          {products.map((product) => {
            return (
              <div className="col-3" key={product.id}>
                <Product product={product} showButton={true} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default ProductsList;
