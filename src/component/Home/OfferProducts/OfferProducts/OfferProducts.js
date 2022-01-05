import React from 'react';
import useProducts from '../../../Hooks/useProducts';
import Navigation from '../../../Shared/Navigation/Navigation';
import Footer from '../../Footer/Footer';
import OfferProduct from '../OfferProduct/OfferProduct';

const OfferProducts = () => {
    const { products } = useProducts(
        "https://aqueous-wildwood-06277.herokuapp.com/products"
    );

    return (
        <div>
            <Navigation></Navigation>
            <div className='my-3' style={{ textAlign: 'center', padding: '20px', backgroundColor: 'royalblue' }}>
                <h3 > <span className='text-warning'>WOW!!</span> <span className='text-light'>WOW!! </span> Our Laptop Teck Special Offer</h3>
                <h5> This offer is valid till January 30 , 2022</h5>
            </div>
            <div
                style={{
                    marginTop: "20px",
                    backgroundColor: "#BDE4D6 ",
                    padding: "10px 0",
                }}
            >
                <div className="container" id="products">
                    <h2 className="text-center"> Laptop Tech Products </h2>
                    <hr className="w-25 mx-auto" style={{ border: "2px solid #FF0040" }} />
                    <div className="row">
                        {products.slice(1, 7).map((product) => (
                            <OfferProduct
                                key={product._id}
                                product={product}
                                order={"order"}
                            ></OfferProduct>
                        ))}
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default OfferProducts;