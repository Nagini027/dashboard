import Menu from "./components/Menu";
import Container from "./components/Container";
import "./App.css";
import "react-circular-progressbar/dist/styles.css";
function App() {
  return (
    <>
      <div className="App">
        <Menu />
        <Container />
      </div>
    </>
  );
}

export default App;
