import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Slider from './components/Slider/Slider';
import Top_category from './components/Top_category/Top_category';

function App() {
  return (<>
    <Header/>
      <Slider/>
      <Top_category/>
    <Footer/>
    </>
  );
}

export default App;
