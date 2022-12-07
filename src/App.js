import "./App.css";
import { MovieContainer } from "./Movie/MovieContainer";
import Header from "./common/components/Header";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <MovieContainer />
    </div>
  );
}

export default App;
