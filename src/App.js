import './App.css';
import MovieList from './MovieList';
import {moviesData} from './MovieData';
function App() {
  /* console.log pour connaitre notre data  */
/*   console.log('movierData',moviesData)
 */

  return (
    <div className="App">
<MovieList moviesData={moviesData}/>



  </div>
  );
}

export default App;
