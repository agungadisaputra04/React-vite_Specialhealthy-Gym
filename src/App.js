import './css/main.css';
import NavbarComp from './components/NavbarComp'
import HeroComp from './components/HeroComp';
import GalleryComp from './components/GalleryComp'
import ServicesComp from './components/ServicesComp'
import FooterComp from './components/FooterComp'
import FaqComp from './components/FaqComp'

function App() {
  return (
    <div>  
      <HeroComp />

      { /* content */}
      <NavbarComp />
      <GalleryComp />
      <ServicesComp />
      <FaqComp />
      {/* content */}
      <FooterComp />
      
    </div>
  );
}

export default App;
