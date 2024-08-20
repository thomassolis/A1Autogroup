import img_tech from '../img/img-technology01_pc.jpg';
import '../styles/WhoWeAreStyle.css'

function WhoWeAre(){
    return(
        <section class="who" id="whoweare">
        <div class="who-information">
          <div class="who-information-title">
            <h1 class="who-title">QUIENES SOMOS</h1>
          </div>
    
          <div>
            <p>
              A1 Auto Group, S.A. es la evolución de un negocio de venta de repuestos establecido en el año 2008 a ser hoy un proveedor local de lubricantes y repuestos de calidad para el segmento automotor. Teniendo en cuenta siempre la calidad, sinónimo de seguridad.
            </p>
            <br></br>
            
            <p>En nuestras tiendas contamos con una amplia extensión lubricantes y repuestos, nos caracterizamos por ofrecer productos que cumpla o exceda con los estándares OEM (equipo original de primera monta). </p>
            <p>Nuestra gama de productos es variada, cubriendo necesidades como para el mantenimiento de tu auto, componentes de dirección, suspensión, frenado, tren motriz y de más.
    
              ¡Contáctanos y consulta por tus repuestos!
              
              a1autogrouppanama.com
              
              </p>
          </div>
          
        </div>
        <div class="who-img">
          <img class="img-technology" src={img_tech} alt=""></img>
        </div>
        
      </section>
    )
}

export default WhoWeAre;