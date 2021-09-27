import React from 'react';
import Name from '../Name/Name.js';

const Addcart = (props) => {
    const { addTotal } = props
    console.log(addTotal);
    addTotal.map(total => console.log(total))
    let totalSalary = 0
    for (const total of addTotal) {
        totalSalary = totalSalary + total.salary
    }
    return (
        <div >
            <h1 className="cart" >Total salary</h1>
            <hr />
            <h3><i class="fas fa-user"></i> Add Count:{addTotal.length}</h3>
            <h4>Total Cost:${totalSalary}</h4>
            <h6>
                {
                 addTotal.map(add=> <Name add={add}></Name>)   
                }
             </h6>
            

        </div>
    );
};

export default Addcart;