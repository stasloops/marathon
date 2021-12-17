import './App.css';
import About from './block/about/About';
import BlockFour from './block/block-four/BlockFour';
import BlockOne from './block/block-one/BlockOne';
import BlockTwo from './block/block-two/BlockTwo';
import Footer from './block/footer/Footer';
import Header from './block/header/Header';
import Main from './block/main/Main';

function App() {
  return (<>
  <div className="app">
    <div className="start">
      <Main />
    </div>
      <BlockOne />
      <BlockTwo />
      <BlockFour />
      <About />
    <Footer />
  </div>
  
</>);
}

export default App;
