import Header from "./components/header/header";
import Hero from "./components/hero/Hero";
import css from './styles/App.module.scss'
import Expertise from './components/Expertise/Expertise'
import Work from './components/Work/Work'
import Portfolio from "./components/Portfolio/Portfolio";
import People from "./components/People/People";
import Footer from "./components/Footer/Footer";

const App = () => {
  
  return <div className={'bg-primary ${css.container}'}>
   <Header/>
   <Hero/>
   <Expertise/>
   <Work/>
   <Portfolio/>
   <People/>
   <Footer/>
  </div>
};

export default App;
