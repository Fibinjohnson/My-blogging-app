import React, { Component }  from 'react';
import { useParams } from 'react-router-dom';

import useFetch from './useFetch';
import { useNavigate } from 'react-router-dom';

    const BlogDetails = () => {
        const { id }  = useParams();
        const {data:blogs ,isPending ,err}=useFetch('http://localhost:8000/blogs/'+ id)
        const History=useNavigate();
       
        const handleClick=()=>{
          
           fetch('http://localhost:8000/blogs/'+ id,{
           method:"DELETE"
        })
        .then(()=>History('/'));
        }
    return(

   <div className="blog-details">
    
    {isPending && <div> content is loading </div> }
    {err && <div>{err}</div>}
      {blogs && (
        <article>
            <h2> {blogs.title}</h2>
            <p> {blogs.body}</p>
            <p>Written by:{blogs.author}</p>
            <button onClick={handleClick}>Delete Blog</button>
        </article>
     )}
    
     </div>
    )
}
 
export default BlogDetails;