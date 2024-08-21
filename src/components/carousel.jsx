import interstate from '../img/logos/INTERSTATE2.png';
import dixcel from '../img/logos/DIXCEL.png';
import febest from '../img/logos/FEBEST.png';
import gmb from '../img/logos/GMB.png';
import hlmando from '../img/logos/HLMANDO.png';
import jointfuji from '../img/logos/JOINTFUJI.png';
import kashiyama from '../img/logos/KASHIYAMA.png';
import kendall from '../img/logos/KENDALL.png';
import lucas from '../img/logos/LUCAS2.png';
import ngk from '../img/logos/NGK.png';
import redline from '../img/logos/REDLINE.png';
import showa from '../img/logos/SHOWA.png';
import skf from '../img/logos/SKF.png';
import tokico from '../img/logos/TOKICO.png';
import vic from '../img/logos/VIC.png';

import '../styles/CarouselStyle.css';

function Carousel(){
    return(
        <>
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active carousel-selector" style={{backgroundColor: 'red'}} aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" className="carousel-selector" style={{backgroundColor: 'red'}} aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" className="carousel-selector" style={{backgroundColor: 'red'}} aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" className="carousel-selector" style={{backgroundColor: 'red'}} aria-label="Slide 4"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" className="carousel-selector" style={{backgroundColor: 'red'}} aria-label="Slide 5"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5" className="carousel-selector" style={{backgroundColor: 'red'}} aria-label="Slide 6"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="6" className="carousel-selector" style={{backgroundColor: 'red'}} aria-label="Slide 7"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="7" className="carousel-selector" style={{backgroundColor: 'red'}} aria-label="Slide 8"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="8" className="carousel-selector" style={{backgroundColor: 'red'}} aria-label="Slide 9"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="9" className="carousel-selector" style={{backgroundColor: 'red'}} aria-label="Slide 10"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="10" className="carousel-selector" style={{backgroundColor: 'red'}} aria-label="Slide 11"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="11" className="carousel-selector" style={{backgroundColor: 'red'}} aria-label="Slide 12"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="12" className="carousel-selector" style={{backgroundColor: 'red'}} aria-label="Slide 13"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="13" className="carousel-selector" style={{backgroundColor: 'red'}} aria-label="Slide 14"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="14" className="carousel-selector" style={{backgroundColor: 'red'}} aria-label="Slide 15"></button>

                </div>
                <div class="carousel-inner">
                  <div class="carousel-item active c-item">
                      <img src={interstate} className="d-block w-100 c-img" alt="..."></img>
                  </div>
                  <div class="carousel-item c-item">
                      <img src={dixcel} className="d-block w-100 c-img" alt="..."></img>
                  </div>
                  <div class="carousel-item c-item">
                      <img src={febest} className="d-block w-100 c-img" alt="..."></img>
                  </div>
                  <div class="carousel-item c-item">
                      <img src={gmb} className="d-block w-100 c-img" alt="..."></img>
                  </div>
                  <div class="carousel-item c-item">
                      <img src={hlmando} className="d-block w-100 c-img" alt="..."></img>
                  </div>

                  <div class="carousel-item c-item">
                      <img src={jointfuji} className="d-block w-100 c-img" alt="..."></img>
                  </div>
                  <div class="carousel-item c-item">
                      <img src={kashiyama} className="d-block w-100 c-img" alt="..."></img>
                  </div>
                  <div class="carousel-item c-item">
                      <img src={kendall} className="d-block w-100 c-img" alt="..."></img>
                  </div>
                  <div class="carousel-item c-item">
                      <img src={lucas} className="d-block w-100 c-img" alt="..."></img>
                  </div>
                  <div class="carousel-item c-item">
                      <img src={ngk} className="d-block w-100 c-img" alt="..."></img>
                  </div>
                  <div class="carousel-item c-item">
                      <img src={redline} className="d-block w-100 c-img" alt="..."></img>
                  </div>
                  <div class="carousel-item c-item">
                      <img src={showa} className="d-block w-100 c-img" alt="..."></img>
                  </div>
                  <div class="carousel-item c-item">
                      <img src={skf} className="d-block w-100 c-img" alt="..."></img>
                  </div>
                  <div class="carousel-item c-item">
                      <img src={tokico} className="d-block w-100 c-img" alt="..."></img>
                  </div>
                  <div class="carousel-item c-item">
                      <img src={vic} className="d-block w-100 c-img" alt="..."></img>
                  </div>
               
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
    
      <div className="carousel-footer">
        <div style={{display: 'flex', gap: '5px'}}>
          <div>
            <iconify-icon class="carousel-footer-icon" icon="ic:baseline-gpp-good"></iconify-icon>
          </div>
          <span>Piezas 100% originales</span>
        </div>
    
        <div style={{display: 'flex', gap: '5px'}}>
          <div>
            <iconify-icon class="carousel-footer-icon" icon="ri:customer-service-2-fill"></iconify-icon>
          </div>
          <span>Excelente servicio</span>
        </div>
    
        <div style={{display: 'flex', gap: '5px'}}>
          <div>
            <iconify-icon class="carousel-footer-icon" icon="material-symbols:tools-power-drill-outline-sharp"></iconify-icon>
          </div>
          <span>Marcas de mayor calidad!</span>
        </div>
      </div>
        </>
        
    )
}

export default Carousel;