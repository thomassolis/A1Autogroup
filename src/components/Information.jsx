import '../styles/InformationStyle.css'

function Information(){
    return(
        <section class="important-info">
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                <span><h1 style={{color: 'white'}}>2008</h1></span>
                <p style={{color: 'white', fontSize: '25px', textAlign: 'center'}}>Año de establecimiento</p>
            </div>

            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <span><h1 style={{color: 'white'}}>22</h1></span>
                <p style={{color: 'white', fontSize: '25px'}}>Marcas que manejamos</p>
            </div>
        </section>
    );
}

export default Information;