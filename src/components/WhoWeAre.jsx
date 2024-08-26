import '../styles/WhoWeAreStyle.css';

function WhoWeAre() {
    return (
        <section className="who" id="whoweare">
            <div className="who-information">
                <div className="who-information-title">
                    <h1 className="who-title">¿QUIÉNES SOMOS?</h1>
                </div>

                <div style={{marginLeft:'25px'}}>
                    <p>
                        A1 Auto Group, S.A. es la evolución de un negocio de venta de repuestos establecido en el año 2008 a ser hoy un proveedor local de lubricantes y repuestos de calidad para el segmento automotor. Teniendo en cuenta siempre la calidad, sinónimo de seguridad.
                    </p>
                    <br />

                    <p>En nuestras tiendas contamos con una amplia extensión de lubricantes y repuestos. Nos caracterizamos por ofrecer productos que cumplan o excedan con los estándares OEM (equipo original de primera monta).</p>
                    <p>
                        Nuestra gama de productos es variada, cubriendo necesidades como el mantenimiento de tu auto, componentes de dirección, suspensión, frenado, tren motriz y más.
                        ¡Contáctanos y consulta por tus repuestos!
                    </p>
                </div>
              </div>
            <div className="who-img">
                {/* Reemplaza la imagen con un video */}
                <video className="img-technology" controls>
                    <source src="https://a1autogroup.s3.amazonaws.com/a1-docs/images/video+de+pagina+principal/video+sucursales.mp4" type="video/mp4" />
                </video>
            </div>
        </section>
    );
}

export default WhoWeAre;
