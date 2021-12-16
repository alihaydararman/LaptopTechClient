import axios from "axios";
import { useEffect, useState } from "react";

const useProducts = (url) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios(url).then((result) => {
      setProducts(result.data);
    });
  }, [url]);

  return { products };
};

export default useProducts;
