import React from 'react';
import { Link } from 'react-router-dom';
const BlogList = ({blogs , title ,present}) => {
    

    return (
        <div className='Home'>
            {((Object.keys(blogs).length)>0)? <h3> {title} </h3>:<h3>No new vlogs</h3>}
             
          { ((Object.keys(blogs).length)>0)? blogs.map((blog,index) => {
              return (
                <div className='blog-preview' key={blog.id}>
                   <Link to={`/blogs/${blog.id}`}>
                   <h2> {blog.title}</h2>
                   { <p>Written by:{blog.author}</p>}
                    
                   </Link>
                </div>
            );
            }
            ):<p>Press New vlogs to create your vlog</p>
            }
        </div>
    );
}
 
export default BlogList;