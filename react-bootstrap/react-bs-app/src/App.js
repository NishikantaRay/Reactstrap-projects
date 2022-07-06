
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../node_modules/react-bootstrap/dist/react-bootstrap";
import Navbartab from "./components/Navbartab";
// import Footer from "./components/Footer";
import Counter from "./components/Counter";
function App() {
  return (
    <div className="App">
      <Navbartab appName="my-app"></Navbartab>
      <Counter></Counter>
      {/* <Footer></Footer> */}
    </div>
  ); 
}

export default App;
