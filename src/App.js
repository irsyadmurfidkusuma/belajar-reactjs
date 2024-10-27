import logo from './logo.svg';
import './App.css';
import MyButton from './components/MyButton';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App = () => {

  // Belajar props
  const navHeader = "Irsyad Murfid"
  const navContact = "Contact Me!"

  const clicked = () => {
    return alert("Kamu Meng-Klik Tombol!")
  }

  const paragraf = () => {
    return (
      <div>
        <i>mantab bang</i>
        <marquee>ini footer yaa tod</marquee>
      </div>
    )
  }


  return (
    <div className="App">
      <header className="App-header">
        <Navbar navHeader={navHeader} navContact={navContact} />
        <img src={logo} className="App-logo" alt="logo" />
        <p>Belajar React JS</p>
        <MyButton clicked={clicked} />
        <Footer paragraf={paragraf} />
      </header>
    </div>
  );
}

export default App;
