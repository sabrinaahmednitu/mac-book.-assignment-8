import React from 'react';
import './Allworkers.css'

const Allworkers = (props) => {
    const {imges, name, age, country, salary,email,role } = props.user;
    
    return (
        <div className="col-md-4">
            <div className="user-cart">
            <div>
                <img  className="user-images" src={imges}alt="" srcset="" />
             </div>
                <div className="address">
                     <h4>Name: {name}</h4>
                     <h3>Age: {age}</h3>
                     <h6>country:{country}</h6>
                     <h4>Role:{role}</h4>
                     <h5>salary:<span>${salary}</span></h5>
                     <p>Email:{email}</p>
                </div>
                <div>
                     <button onClick={() => props.handelAddToCart(props.user)} className="Hero-btn"><i class="fas fa-cart-plus"></i>Add To Total</button>
               </div>
                <div className="fa-icon">
                    <span ><i class="fab fa-facebook-square"></i></span>
                    <span><i class="fab fa-linkedin"></i></span>
                </div>
               
                
            </div>
        </div>
    );
};

export default Allworkers;