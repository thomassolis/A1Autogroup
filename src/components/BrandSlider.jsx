import infinity from '../img/marcas/infinity.png';
import hyundai from '../img/marcas/hyundai.png';
import honda from '../img/marcas/honda.png';
import acura from '../img/marcas/acura.png';
import mazda from '../img/marcas/mazda.png';
import lexus from '../img/marcas/lexus.png';
import kia from '../img/marcas/kia.png';
import izuzu from '../img/marcas/izuzu.png';
import toyota from '../img/marcas/toyota.png';
import suzuki from '../img/marcas/suzuki.png';
import nissan from '../img/marcas/nissan.png';
import mitsubishi from '../img/marcas/mitsubishi.png';
import '../styles/BrandSlider.css'

function BrandSlider(){
    return(
        <section class="slider">
            <div class="slide-track">
                <div class="slide">
                    <img class="slide-image" src={infinity} alt=""></img>
                </div>

                <div class="slide">
                    <img class="slide-image" src={hyundai} alt=""></img>
                </div>

                <div class="slide">
                    <img class="slide-image" src={honda} alt=""></img>
                </div>

                <div class="slide">
                    <img class="slide-image" src={acura} alt=""></img>
                </div>

                <div class="slide">
                    <img class="slide-image" src={mazda} alt=""></img>
                </div>

                <div class="slide">
                    <img class="slide-image" src={lexus} alt=""></img>
                </div>

                <div class="slide">
                    <img class="slide-image" src={kia} alt=""></img>
                </div>

                <div class="slide">
                    <img class="slide-image" src={izuzu} alt=""></img>
                </div>

                <div class="slide">
                    <img class="slide-image" src={toyota} alt=""></img>
                </div>

                <div class="slide">
                    <img class="slide-image" src={suzuki} alt=""></img>
                </div>

                <div class="slide">
                    <img class="slide-image" src={nissan} alt=""></img>
                </div>

                <div class="slide">
                    <img class="slide-image" src={mitsubishi} alt=""></img>
                </div>
            </div>
        </section>
    );
}

export default BrandSlider;