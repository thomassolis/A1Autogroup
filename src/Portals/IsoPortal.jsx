import ISOImage from '../img/ISO/ISO.jpg'
import '../styles/IsoPortalStyle.css'
function IsoPortal({ onClose }) {
    return (
        <div style={{
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1000
        }}>
            <div className='IsoPortal-container'>
                <img src={ISOImage} alt="" style={{width: '100%'}}/>
                {/* <button onClick={onClose}>Cerrar</button> */}
                <iconify-icon onClick={onClose} class="icon-close" icon="carbon:close-filled"></iconify-icon>
            </div>
        </div>
    );
}

export default IsoPortal;
