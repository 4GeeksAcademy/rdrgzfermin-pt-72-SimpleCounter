import React from "react";
import  { useState, useEffect } from "react";

const Counter = () => {
    
    const [count, setCount] = useState(0);
 
    useEffect(() => {
       
        const interval = setInterval(() => {
            setCount(count + 1);
        }, 1000);
 
    
        return () => clearInterval(interval);
    }, [count]);

    const resetCount = () => {
        setCount(0)
    } 

    

    return ( 
        <div 
            style={{
                display: "flexbox",
                margin: "auto",
                textAlign: "center",
                background: "black",      
                width: "500px",
                marginTop: "100px",
                borderRadius: "25px",
                boxShadow: "0 0 20px 15px gold"
            }}
        >
            <h1 style={{ color: "red" }}>
                Fermin
            </h1>
            <h3 className="text-color">
                This is my counter
            </h3>
            <h1 className="counter">{count}</h1>
            <button onClick={resetCount} className="btn btn-primary m-2">Reset</button>
        </div>
     );
}
 
export default Counter;