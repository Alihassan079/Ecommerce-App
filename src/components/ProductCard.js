import React from 'react'
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from 'react-router-dom';
import productcompare from "../images/prodcompare.svg";
import wish from "../images/wish.svg";
import wishlist from "../images/wishlist.svg";
import watch from "../images/watch.jpg";
import watch2 from "../images/watch2.png";
import addcart from "../images/add-cart.svg";
import view from"../images/view.svg";

const ProductCard = (props) => {
  const { grid } = props;
  let location = useLocation();
  return (
    <>
      <div className={` ${location.pathname == "/store" ? `gr-${grid}` : 'col-3'
        }`}>
        <Link to=':id' className='product-card position-relative'>
          <div className='wishlist-icon position-absolute'>
            <button className='border-0 bg-transparent'>
              <img src={wish} alt="wishlist" />
            </button>
          </div>
          <div className='product-image'>
            <img src={watch} className='img-fluid' alt="product image" />
            <img src={watch2} className='img-fluid' alt="product image" />
          </div>
          <div className='product-details'>
            <h6 className='brand'>Havels</h6>
            <h5 className='product-title'>
              Kids Headphones bulk 10 pack multi coloered for students
            </h5>
            <ReactStars
              count={5}
              size={24}
              value={4}
              edit={false}
              activeColor="#ffd700"
            />
             <p className={`description ${grid === 12 ? "d-bock" : "d-none"}`}> Our product is a stylish and 
            innovative watch that seamlessly blends timeless design with
             cutting-edge technology. Crafted with precision and attention
              to detail, it features a sleek and durable construction 
              suitable for any occasion. </p>
            <p className='price'>$100.00</p>
          </div>
          <div className='action-bar position-absolute'>
            <div className='d-flex  flex-column gap-15'>
              <button className='border-0 bg-transparent'>
                <img src= {productcompare}  alt="compare" />
              </button>
              <button className='border-0 bg-transparent'>
                <img src={view} alt="view" />
              </button>
              <Link>
                <img src={addcart} alt="addcart" />
              </Link>
            </div>
          </div>
        </Link>
      </div>
      <div className={` ${location.pathname == "/store" ? `gr-${grid}` : 'col-3'
        }`}>
        <Link className='product-card position-relative'>
          <div className='wishlist-icon position-absolute'>
            <Link>
              <img src={wishlist} alt="wishlist" />
            </Link>
          </div>
          <div className='product-image'>
            <img src={watch} className='img-fluid' alt="product image" />
            <img src={watch2} className='img-fluid' alt="product image" />
          </div>
          <div className='product-details'>
            <h6 className='brand'>Havels</h6>
            <h5 className='product-title'>
              Kids Headphones bulk 10 pack multi coloered for students
            </h5>
            <ReactStars
              count={5}
              size={24}
              value={4}
              edit={false}
              activeColor="#ffd700"
            />
            <p className={`description ${grid === 12 ? "d-bock" : "d-none"}`}> Our product is a stylish and 
            innovative watch that seamlessly blends timeless design with
             cutting-edge technology. Crafted with precision and attention
              to detail, it features a sleek and durable construction 
              suitable for any occasion. </p>
            <p className='price'>$100.00</p>
          </div>
          <div className='action-bar position-absolute'>
            <div className='d-flex  flex-column gap-15'>
              <button>
                <img src={productcompare} alt="compare" />
              </button>
              <button className='border-0 bg-transparent'>
                <img src={view} alt="view" />
              </button>
              <button className='border-0 bg-transparent'>
                <img src={addcart} alt="addcart" />
              </button>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default ProductCard
