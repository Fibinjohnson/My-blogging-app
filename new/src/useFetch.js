import { useEffect, useState } from "react";
  const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [isPending,setIsPending]= useState(true);
    const [err ,setError]=useState(null);
    const [present,setPresent]=useState(true);
  
    
     useEffect(()=>{ fetch( url)
     .then(res=>{if(!res.ok){throw Error("Some thing wrong occured")};
      return res.json();
    
      
    })
     .then(data=>{setData(data);
      setPresent(false);
        setIsPending(false);
        setError(null)
    }).catch((err)=>{
    setError(err.message);
    setIsPending(false)
 } )},[]);
 return ({data ,isPending,err,present})
   
}
 
export default useFetch;