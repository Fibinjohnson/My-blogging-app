import React, { Component }  from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const Create = () => {
    const [title,setTitle]=useState("")
    const [body,setBody]=useState("")
    const [author,setAuthor]=useState("marrio")
    const [isPending,setIsPending]=useState(false)
    const History=useNavigate();
    const HandleSubmit=(e)=>{
        e.preventDefault();
        const blog={title ,body,author}
        setIsPending(true);
        fetch("http://localhost:8000/blogs" ,{
            method:'POST',
            body:JSON.stringify(blog) ,
            headers:{"Content-Type":"application/json"} }).then(()=>setIsPending(false),
            History("/"))
       
    }
    return ( <div className='create'> 
        <h2>Add New Blog</h2>
        <form>
            <label>Add Title Name</label>
            <input type='text' value={title}
            onChange={(e)=>setTitle(e.target.value)}
            required></input>
            <label>Add body</label>
            <textarea required value={body} onChange={(e)=>setBody(e.target.value)}></textarea>
                <label>
                    Blog Author
                </label>
                <select value={author} onChange={(e)=>setAuthor(e.target.value)}>
                    <option value="marrio" > marrio</option>
                    <option value="yoshi" > yoshi</option>
                </select>
               { isPending && <button onClick={HandleSubmit}> adding... </button>}
               { !isPending && <button onClick={HandleSubmit}> click to post </button>}
                

            
        </form>
    </div> );
}
 
export default Create;