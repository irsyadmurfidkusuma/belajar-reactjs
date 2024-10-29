import logo from './logo.svg';
import './App.css';
import MyButton from './components/MyButton';
import Footer from './components/Footer';


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


  return (
    <div className="App">
      {/* <header className="App-header">
        <Navbar navHeader={navHeader} navContact={navContact} />
        <p>Belajar React JS</p>
        <p>Irsyad Murfid Kusuma</p>
        <MyButton clicked={clicked} />
        <Footer paragraf={paragraf} />
      </header> */}






    </div>
  );
}

export default App;
