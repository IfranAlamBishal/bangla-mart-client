
const ProductCard = ({product}) => {
    const {product_name, category, price, rating, image} = product;
    return (
        <div>
            <div className="card card-compact bg-white max-w-[400px] shadow-xl">
                <figure>
                    <img
                        src={image}
                        alt="product_image"
                        className=" w-[400px] h-[200px]" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{product_name}</h2>
                    <p>{category}</p>
                    <p>{rating}</p>
                    <p className=" font-bold text-lg">{price}$</p>

                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">View Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;