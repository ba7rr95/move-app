import React from "react";
// import Movies from "./components/movies"
// import FooterClass from "./components/footer"
// import MoviesClass from "./components/moviesClass.jsx"
// import ImageSlider from "./components/slider"
// import ParentComponent from "./components/parentComponent.jsx"
// import Navbarself from "./components/navbarself";
// import Homeself from "./pages/homeself";
// import Aboutself from "./pages/aboutself.jsx"
// import Contactself from "./pages/contactself.jsx";
// import Cardself from "./components/cardself.jsx";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/navbar.jsx';
import Home from "./pages/home.jsx";
import About from "./pages/about.jsx";
import Contact from "./pages/contact.jsx";
import MovieDetails from "./pages/movieDetails.jsx";
import AddMovie from "./pages/addMovie.jsx";
import EditMovie from "./pages/editMovie.jsx";
import MovieProvider from "./contexts/movieContext.jsx";
import Favorites from "./pages/favorites.jsx";
import "./styles/styles.css";



function App() {

  return (
    <>
      {/* day1 */}
      {/* <Movies />
      <FooterClass /> */}

      {/* day2 */}
      {/* <MoviesClass />
      <ImageSlider /> */}

      {/* day3 */}
      {/* <ParentComponent /> */}

      {/* day4 */}
      {/* <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/movie/:id" element={<MovieDetails />} />
        </Routes>
      </BrowserRouter> */}

      {/* day4 self */}
      {/* <BrowserRouter>
        <Navbarself />
        <Routes>
          <Route path='/' element={<Homeself />} />
          <Route path='/aboutself' element={<Aboutself />} />
          <Route path='/contactself' element={<Contactself />} />
          <Route path='/movies/:id' element={<Cardself />} />
        </Routes>
      </BrowserRouter> */}

      {/* day5 */}
      {/* <MovieProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/movie/:id" element={<MovieDetails />} />
            <Route path="/add" element={<AddMovie />} />
            <Route path="/edit/:id" element={<EditMovie />} />
            <Route path="/favorites" element={<Favorites />} />
          </Routes>
        </BrowserRouter>
      </MovieProvider> */}

      {/* day6 */}
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:id" element={<MovieDetails />} />
          <Route path="/add" element={<AddMovie />} />
          <Route path="/edit/:id" element={<EditMovie />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
