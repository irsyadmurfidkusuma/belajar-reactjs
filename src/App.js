import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap'
import MyButton from './components/MyButton';
import Footer from './components/Footer';
import NavigationBar from './components/NavbarComp';
import { Container } from 'react-bootstrap';
import React, { useState } from 'react';


const App = () => {

  // Belajar props dan component
  const navHeader = "Irsyad Murfid"
  const navContact = "Contact Me!"

  const clicked = () => {
    return alert("Kamu Meng-Klik Tombol!")
  }

  const paragraf = () => {
    return (
      <div>
        <i>mantab bang</i>
        <marquee>ini footer berjalan ya cog yaa</marquee>
      </div>
    )
  }

  // Belajar state

  const [getNavbarValue, setNavbarValue] = useState("")

  const changeNavValue = () => {
    setNavbarValue("My Contact")
  }


  return (
    <div >
      {/* <header className="App-header">
        <Navbar navHeader={navHeader} navContact={navContact} />
        <p>Belajar React JS</p>
        <p>Irsyad Murfid Kusuma</p>
        <MyButton clicked={clicked} />
        <Footer paragraf={paragraf} />
      </header> */}

      {/* Belajar state */}

      {/* Belajar state */}
      <NavigationBar navbarValue={getNavbarValue} />
      <Container>
        <h1>Ini HomePage</h1>
        {/* <p>{getNavbarValue}</p> */}
        <button onClick={() => changeNavValue()} className='btn btn-primary'>Ubah Navigasi</button>

      </Container>








    </div>
  );
}

export default App;
