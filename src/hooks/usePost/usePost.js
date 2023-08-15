import React , {useEffect,useState} from 'react';
import axios from 'axios';

function usePost(){
    const [data,setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error , setError] = useState(null)

    const post = async (url,apiData) =>{
        try {
        setLoading(true)
        const {data : responseData} = await axios.get(url,apiData);
        setData(responseData)
        setLoading(false)
        } catch (err) {
            setError(err.message)
            setLoading(false)
        }
        
    };

    return {error,loading,data,post}
}

export default usePost;