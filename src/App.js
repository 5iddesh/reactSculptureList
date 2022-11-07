import Gallery from "./Gallery";
import "./styles.css";
import { sculptureList } from "./data";

export default function App() {
  return (
    <div className="App">
      <Gallery sculptureList={sculptureList} />
    </div>
  );
}
