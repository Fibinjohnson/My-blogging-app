

import BlogList from './blogList';
import useFetch from './useFetch';
import React, { Component }  from 'react';

const Home = () => {
   const {data:blogs ,isPending ,err}=useFetch('http://localhost:8000/blogs')
    return( <div className='Home'>
   {isPending && <div>content is loading</div> }
   {err && <div>{err}</div>}
    {blogs && <BlogList blogs={blogs} title="All blogs"  />
    }
   
  </div>  
  
 )
  
}

export default Home;
