import { useEffect, useState } from "react";
import axios from "axios";
const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const ourRequest = axios.CancelToken.source() // <-- 1st step
       
            async function fetchData() {
                try {
                let res = await axios.get(url, {
                    cancelToken: ourRequest.token, // <-- 2nd step
                  })
                let data = (res && res.data) ? res.data : []; 
                if (data && data.length > 0) {
                    data.map(item => {
                       
                        return item;
                    })
                  
                }
                setData(data);
                setIsLoading(false);
            }
            catch (err) {
                if (axios.isCancel(err)) {
                    console.log('Request canceled', err.message);
                } else {
                    // handle error
                    setIsLoading(false);
                  }
            }

          

        }
        fetchData();
        return () => {
            ourRequest.cancel('This is message error!') // <-- 3rd step
          }

    }
    , []);

    return {
        data, isLoading
    }

}

export default useFetch; 