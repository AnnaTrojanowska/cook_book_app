import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Slider from './components/Slider/Slider';
import Top_category from './components/Top_category/Top_category';
import Top_receipes from './components/Top_receipies/Top_receipes';

function App() {
  return (<>
    <Header/>
      <Slider/>
      <Top_category/> 
      <Top_receipes/>
    <Footer/>
    </>
  );
}

export default App;
