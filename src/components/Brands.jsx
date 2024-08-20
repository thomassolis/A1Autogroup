import marca1 from '../img/logos web click-06.png';
import marca2 from '../img/logos web click-08.png';
import marca3 from '../img/logos web click-02.png';
import marca4 from '../img/logos web click-04.png';
import marca5 from '../img/logos web click-10.png';
import '../styles/BrandsStyle.css';

function Brands(){
    return(
        <section id="marcas" class="principal-marcas" >
            <div class="sucursal-title">
            <h1>NUESTRAS MARCAS</h1>
            </div>
            
            <section class="container-marcas">
                <div class="marca">
                    <img class="img-marca1" src={marca1} alt=""></img>
                </div>
                <div class="marca">
                    <img class="img-marca2" src={marca2} alt=""></img>
                </div>
                <div class="marca">
                    <img class="img-marca3" src={marca3} alt=""></img>
                </div>
                <div class="marca">
                    <img class="img-marca4" src={marca4} alt=""></img>
                </div>
                <div class="marca">
                    <img class="img-marca5" src={marca5} alt=""></img>
                </div>
            </section>
        </section>
    )
}

export default Brands;