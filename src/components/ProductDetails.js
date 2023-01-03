import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Product from "./Product";

function ProductDetails() {
  const [product, setProduct] = useState({});
  const params = useParams();
  const apiLink = `https://fakestoreapi.com/products/${params.productId}`;

  useEffect(() => {
    fetch(apiLink)
      .then((res) => res.json())
      .then((product) => setProduct(product));
  }, []);
  return (
    <>
      {product.length === 0 ? (
        <h1 className="text-center">Loading ...</h1>
      ) : null}
      <Product product={product} showButton={false} />
    </>
  );
}

export default ProductDetails;
