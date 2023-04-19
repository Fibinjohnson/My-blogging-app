import { Link } from "react-router-dom";
import React, { Component }  from 'react';

const NotFound = () => {
    return ( 
        <div><h2>Sorry Page not found</h2>
        <Link to={'/'}>Back to the home page</Link>
        </div>
     );
}
 
export default NotFound;