import Aboutus from './Aboutus';
import Contact from './Contact';
import Footer from './Footer';
import Home from './Home';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../src/css/style.css'
import Resources from './Resources';



function App() {
  return (
   <div>
      <Home/>
      <Aboutus/>
      <Contact/>
      <Resources/>
      <Footer/>
   </div>
  );
}

export default App;

