import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
// import Resturant from "./components/Resturant";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Navbarcomp from "./components/Navbarcomp";
import Post from "./components/Post";
import Gallery from "./components/Gallery";
import TimeForm from "./components/TimeForm";
function App() {
  return (
    <div className="App">
      <h1 className="text-center">Timer portal</h1>

      <TimeForm></TimeForm>











      {/* <BrowserRouter>
      <Routes>
      <Route path="/" element={<App />}/>
      <Route path="postData" element={<Post />} />
      </Routes>
      </BrowserRouter> */}

      {/* <Resturant></Resturant> */}
      {/* <Navbarcomp></Navbarcomp> */}
      {/* <Gallery/> */}
      {/* <Post></Post> */}
    </div>
  );
}

export default App;
