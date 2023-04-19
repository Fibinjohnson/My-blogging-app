import { useEffect, useState } from "react";
  const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [isPending,setIsPending]= useState(true);
    const [err ,setError]=useState(null);
  
    
     useEffect(()=>{ fetch( url)
     .then(res=>{if(!res.ok){throw Error("Some thing wrong occured")};
      return res.json()})
     .then(data=>{setData(data);
        setIsPending(false);
      setError(null)
    }).catch((err)=>{
    setError(err.message);
    setIsPending(false)
 } )},[]);
 return ({data ,isPending,err})
   
}
 
export default useFetch;