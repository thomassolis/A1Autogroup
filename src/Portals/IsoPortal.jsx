import ISOImage from '../img/ISO/ISO.jpg'

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
            <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '8px', display: 'flex', flexDirection:'column', width:'28%', alignItems:'center'}}>
                <img src={ISOImage} alt="" style={{width: '100%'}}/>
                <button onClick={onClose}>Cerrar</button>
            </div>
        </div>
    );
}

export default IsoPortal;
