import React, { Component }  from 'react';
import { Link } from 'react-router-dom';
const BlogList = ({blogs , title}) => {
    

    return (
        <div className='Home'>
             <h3> {title} </h3>
          {blogs.map((blog) => {
              return (
                <div className='blog-preview' key={blog.id}>
                   <Link to={`/blogs/${blog.id}`}>
                   <h2> {blog.title}</h2>
                    <p>Written by:{blog.author}</p>
                    
                   </Link>
                </div>
            );
            }
            )
            }
        </div>
    );
}
 
export default BlogList;