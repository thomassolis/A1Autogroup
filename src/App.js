import Header from "./components/Header";
import WhoWeAre from "./components/WhoWeAre";
import Carousel from "./components/carousel";
import Sucursales from "./components/Sucursales";
import Brands from "./components/Brands";
import Information from "./components/Information";
import BrandSlider from "./components/BrandSlider";
import WhatsappIcon from "./components/WhatsappIcon";

function App() {
  return (
    <>
      <Header/>
      <Carousel/>
      <WhoWeAre/>
      <Sucursales/>
      {/* <Brands/> */}
      <Information/>
      <BrandSlider/>
      <WhatsappIcon/>
    </>
  );
}

export default App;
