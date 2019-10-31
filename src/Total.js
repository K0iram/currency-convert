import React from 'react';

const Total = ({ total }) => {
    return ( 
        <div className="result">
          <h4>Total: { Number(Math.round(total * 100) / 100).toFixed(2) }</h4>
        </div>
    );
}
 
export default Total;