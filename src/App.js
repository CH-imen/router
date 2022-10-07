
import './App.css';
import Filter from './components/Filter';
import MovieDetails from './components/MovieDetails';
import { Routes, Route } from "react-router-dom";


function App() {
   
  return (
    <div >
      <h1 className="titre1 ">Movie List</h1>
   
    <Routes>
        <Route path="/" element={<Filter />} />
       
        <Route path="movies/:id" element={<MovieDetails />} /> 
      </Routes>
  </div>

)}

export default App;