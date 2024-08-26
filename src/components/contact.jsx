import '../styles/contactStyle.css'

function Contact(){
    return(
        <section className="contact-container">
            <div className="contact-container-days" style={{marginTop:'40px'}}>
                <p className='contact-day'>HORARIO</p>
                <p className='contact-day' >Lunes: 8:00am - 5:00pm</p>
                <p className='contact-day' >Martes: 8:00am - 5:00pm</p>
                <p className='contact-day' >Miercoles: 8:00am - 5:00pm</p>
                <p className='contact-day' >Jueves: 8:00am - 5:00pm</p>
                <p className='contact-day' >Viernes: 8:00am - 5:00pm</p>
                <p className='contact-day' >Sábado: 8:00am - 5:00pm</p>
                <p className='contact-day' style={{color:'red'}}>Domingo: Cerrado</p>
            </div>

            <div className='contact-container-subsidiaries'>
                <p>Visítanos en:</p>
                <p>- Río Abajo (Panamá Centro)</p>
                <p>- Plaza Cantabria (Las Acacias)</p>
                <p>- Plaza Panamá Oeste (Chorrera)</p>
            </div>
            
        </section>
    );
}

export default Contact;