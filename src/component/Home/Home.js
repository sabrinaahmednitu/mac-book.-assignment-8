import { useEffect, useState } from 'react';
import Addcart from '../Addcart/Addcart.js';
import Allworkers from '../Workers/Allworkers.js';
import './Home.css'

const Home = () => {
    const [users, setUsers] = useState([])
    const [addTotal, setaddTotal] = useState([])
    

    useEffect(() => {
        fetch("./fackdata.JSON")
            .then(res => res.json())
            .then(data => setUsers(data));
    }, [])
    const handelAddToCart = (addTotalList) => {
        const newtotal = [...addTotal, addTotalList]
        setaddTotal( newtotal)
    }
    
    return (
        <div>
            <div className="row">
                <div className="col-md-9 left-side">
                    <div className="row">
                        {
                            users.map(user => <Allworkers
                                handelAddToCart={handelAddToCart}
                                key={user.key}
                                user={user}></Allworkers>)
                        }

                    </div>
                </div>
                <div className="col-md-3 side-cart" >
                    <Addcart addTotal={addTotal}></Addcart>
                </div>
                

            </div>
        </div>
    );
};

export default Home; 