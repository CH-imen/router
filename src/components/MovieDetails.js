import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {Link} from 'react-router-dom';

const MovieDetails = () => {
  const [movie, setMovie] = useState({});
  const params = useParams();

  useEffect(() => {
    const getMovie = async () => {
      const result = await fetch(`http://localhost:3000/movies/${params.id}`);
      const data = await result.json();

      setMovie(data);
    };
    getMovie();
  }, []);
    
  const {id, title, description, Trailer}= movie;
        return <div className='container '>
        <div className="row">
            
                <div className="card " >
        
                    <div className="card-Body">
                      
                      <h1 className="card-Text" >{title}</h1>
                      <p className="card-Text" > {description }</p>
                    
                      <p>Trailer:</p> <a href={Trailer} target="_blanc"className="card-Text" >{Trailer}</a>
                     
                     
                  
                      
                    
                      
                  
        
                    </div>
                 
            </div>
           
        </div>
        <Link to={`/`}>
            Return to Home
                      </Link>
      
        </div> 
};

export default MovieDetails;