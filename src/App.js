import { dummy } from "./movieDummy";
import Movie from "./component/Movie";

// CSS
import "./App.css";


 function App() {
  
  return (
    <div className="App-container">
      {
        dummy.results.map( (item) => {
          return <Movie
            title = {item.title}
            poster_path = {item.poster_path}
            vote_average = {item.vote_average}
            key = {item.id}
          />
        })
      }
    </div>
  );
}

export default App;
