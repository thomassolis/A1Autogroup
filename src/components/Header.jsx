import '../styles/HeaderStyle.css'
import logo from '../img/logo.png'
function Header(){
    return(
        <header className='head'>
            <div style={{justifyContent: 'center', marginLeft: '20px'}}>
                <a className="logo" href="#"> <img class="image-logo" src={logo} alt="Logo"></img> </a>
            </div>
            
            <ul>
                <li className="head-options" ><a href="#carouselExampleIndicators">INICIO</a></li>
                <li className="head-options" ><a href="#whoweare">QUIENES SOMOS</a></li>
                <li className="head-options" ><a href="#sucursalA1">SUCURSALES</a></li>
                <li  className="head-options" style={{border: 'none'}}><a href="#marcas">MARCAS</a></li>
            </ul>

            <div className="container-icons" >
                <a href="https://www.instagram.com/a1.autogroup" target="_blank">
                <iconify-icon id="instagram-icon" class="icons" icon="entypo-social:instagram"></iconify-icon>
                </a>

                <a href="https://www.facebook.com/A1AUTOGROUPP/" target="_blank">
                <iconify-icon class="icons"icon="entypo-social:facebook"></iconify-icon>
                </a>

                <iconify-icon style={{cursor: 'pointer'}} id="whatsapp-icon" class="icons" icon="ic:baseline-whatsapp"></iconify-icon> 
            </div>
        </header>
        
    )
}

export default Header;