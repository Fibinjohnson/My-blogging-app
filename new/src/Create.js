import React  from 'react';
import { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


const Create = () => {
    const [title,setTitle]=useState("")
    const [body,setBody]=useState("")
    const [author,setAuthor]=useState("")
    const [isPending,setIsPending]=useState(false)
    const [disabled, setDisabled] = useState(true)
    const [nameError, setNameError] = useState(null)
    const History=useNavigate();
   
    useEffect(() => {
        
      
        setDisabled( formValidation() )
      }, [title, body])
      const formValidation = () => {
        if (title === "") {
          setNameError('Name cant be blank!')
          return true
        } else {
          setNameError(null)
          return false
        }
      }
      const HandleSubmit=(e)=>{
        e.preventDefault();
        const blog={title ,body,author};
         setIsPending(true);
         console.log(e)
             fetch("http://localhost:8000/blogs" ,{
            method:'POST',
            body:JSON.stringify(blog) ,
            headers:{"Content-Type":"application/json"} }).then(()=>setIsPending(false),
            History("/")) 
    }

    return ( 
    <div className='create'> 
        <h2>Add New Blog</h2>
        <form >
            <label>Add Title Name</label>
            <input type='text' value={title}
            onChange={(e)=>setTitle(e.target.value)}
            required></input>
             { nameError && <p>{nameError}</p> }
            <label>Add body</label>
            <textarea required value={body} onChange={(e)=>setBody(e.target.value)}></textarea>
                <label>
                    Blog Author
                </label>
                <input type='text' value={author} onChange={(e)=>setAuthor(e.target.value)}>
                   
                </input>
               { isPending && <button  onClick={HandleSubmit}> adding... </button>}
               { !isPending && <button disabled={disabled}  onClick={HandleSubmit}> click to post </button>}
                

            
        </form>
    </div> );
}
 
export default Create;