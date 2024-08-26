import '../styles/ISOStyle.css';
import iso_icon from "../img/ISO/icon.png"
import { useState } from 'react';
import { createPortal } from "react-dom";
import IsoPortal from '../Portals/IsoPortal.jsx'; 

function ISO(){

    const [openIso, setOpenIso] = useState(false);

    return(
        <section className={`iso-container ${openIso ? 'blur-background' : ''}`}>
            <div className='iso-text'>
                <p>¡ Échale un vistazo a nuestra certificación ISO !</p>
            </div>
            <div className='iso-icon'>
                <img src={iso_icon} alt="" onClick={()=>setOpenIso(true) }/>
            </div>

            {openIso &&
                    createPortal(
                        <IsoPortal onClose={()=>setOpenIso(false)}/>,
                        document.body
                    )
            }
            
        </section>
    )
}

export default ISO;