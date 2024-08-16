import { useEffect } from "react";
import { useState } from "react";
import ProductCard from "../ProductCard/ProductCard";

const Products = () => {

    const [allProducts, setAllProducts] = useState([]);

    useEffect(() => {
        const productData = async () => {
            const response = await fetch('/public/productList.json');
            const data = await response.json();
            setAllProducts(data);
            console.log(data)
        }
        productData();
    }, [])

    return (
        <div className=" w-5/6 mx-auto my-20">
            <h2 className=" text-3xl font-semibold mb-10">Total Products : {allProducts.length}</h2>

            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {allProducts.map(product => <ProductCard key={product.product_name} product={product}/>) }
            </div>
        </div>
    );
};

export default Products;