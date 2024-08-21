import rioabajo from '../img/rioabajo.jpg';
import cantabria from '../img/cantabria.jpg';
import chorrera from '../img/chorrera.jpeg';
import '../styles/SucursalesStyle.css';

function Sucursales(){
    return(
        <section class="sucursales" id="sucursalA1" style={{marginTop: '70px'}}>
            <div class="sucursal-title">
                <h1>SUCURSALES</h1>
                </div>

                <div class="principal-sucursal" >
                <div class="img-sucursal">
                    <img src={rioabajo} class="imgA1" alt=""></img>
                    
                    <div class="information" >
                    <div style={{fontSize: '25px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                        <iconify-icon class="ubication-icon" icon="simple-icons:googlemaps"></iconify-icon>
                    </div>
                    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                        <a href="https://maps.app.goo.gl/e42QyeuDgDv8LWac7" target="_blank">Vía España (Río Abajo)</a>
                    </div>
                    </div>
                    
                    
                </div>
                <div class="img-sucursal">
                    <img src={cantabria} class="imgA1" alt=""></img>

                    <div class="information" >
                    <div style={{fontSize: '25px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                        <iconify-icon class="ubication-icon" icon="simple-icons:googlemaps"></iconify-icon>
                    </div>
                    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                        <a href="https://maps.app.goo.gl/bt2ALwVNaHS3YfKk7" target="_blank">Panamá Este (Cantabria)</a>
                    </div>
                    </div>
                </div>

                <div class="img-sucursal">
                    <img src={chorrera} class="imgA1" alt=""></img>
                    <div class="information" >
                    <div style={{fontSize: '25px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                        <iconify-icon class="ubication-icon" icon="simple-icons:googlemaps"></iconify-icon>
                    </div>
                    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                        <a href="https://maps.app.goo.gl/ze6eM4AZucSrAUSX9" target="_blank">Panamá Oeste (Chorrera)</a>
                    </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Sucursales;