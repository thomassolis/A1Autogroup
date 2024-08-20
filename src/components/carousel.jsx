import logo1 from '../img/logos web click-01.png'
import logo2 from '../img/logos web click-03.png'
import logo3 from '../img/logos web click-05.png'
import logo4 from '../img/logos web click-09.png'
import logo5 from '../img/banner tokiko-01.png'
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
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active c-item">
                        <img src={logo1} className="d-block w-100 c-img" alt="..."></img>
                    </div>
                    <div class="carousel-item c-item">
                        <img src={logo2} className="d-block w-100 c-img" alt="..."></img>
                    </div>
                    <div class="carousel-item c-item">
                        <img src={logo3} className="d-block w-100 c-img" alt="..."></img>
                    </div>
                    <div class="carousel-item c-item">
                        <img src={logo4} className="d-block w-100 c-img" alt="..."></img>
                    </div>
                    <div class="carousel-item c-item">
                        <img src={logo5} className="d-block w-100 c-img" alt="..."></img>
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