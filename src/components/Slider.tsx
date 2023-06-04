import { useEffect, useState } from "react";
import GlobalApi from "../services/api/GlobalApi";


function Slider() {

    // State
    const [trendingMovies, setTrendingMovies] = useState([]);
    
    // Fetch Trending Movies API
    useEffect(() => {
        let isMounted = true;
        const getTrendingMovies = async () => {
            try {
                const response = await GlobalApi.getTrendingMovies;
                if (isMounted) {
                    const data = response.data.results;
                    // Console log data
                    setTrendingMovies(data);
                    console.log(data);
                }
            } catch (error) {
                console.error(error);
            }
        };
        // Fetch Trending Movies API
        getTrendingMovies();
        return () => {
            isMounted = false;
        };

    }, [])
    
    
    
        // // Fetch Trending Movies API
        // useEffect(() => {
        //     getTrendingMovies();
        // }, [])
    
        // // Fetch Trending Movies API
        // const getTrendingMovies = () => {
        //     GlobalApi.getTrendingMovies.then((response) => {
        //         const data = response.data.results;
        //         console.log(data);
        //         console.log('NEXT API');
        //     })
        // }
  return (
    <div>Slider</div>
  )
}

export default Slider