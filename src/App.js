import Header from "./components/header";
import MusicPlayer from "./components/mucisPlayer";
import CardList from "./components/cardList";
import Slider from "./components/slider";

function App() {
  return (
    <div className="App">
      <Header/>
      <MusicPlayer/>
      <CardList/>
    </div>
  );
}

export default App;
