import BlogList from './blogList';
import useFetch from './useFetch';
import React from 'react';

const Home = () => {
   const {data:blogs ,isPending ,err,present}=useFetch('http://localhost:8000/blogs')
    return( <div className='Home'>
   {isPending && <div>content is loading</div> }
   {err && <div>{err}</div>}
   {present && <div>hello</div>}
   {blogs && <BlogList blogs={blogs} title="All blogs" present={true} />}

   
  </div>  
  
 )
  
}

export default Home;
