import '../styles/WhatsappIconStyle.css'

function WhatsappIcon(){
    function icon(){


        const phoneNumber = '+50769558525';

        const whatsappLink = 'whatsapp://send?phone=' + phoneNumber;
        window.location.href = whatsappLink;

        setTimeout(function() {
            var whatsappWebLink = 'https://web.whatsapp.com/send?phone=' + phoneNumber;
            window.location.href = whatsappWebLink;
        }, 2000); 
          
    }

    return(
        <section class="whatsappIcon" id="whatsapp-icon2" onClick={icon}>
            <iconify-icon icon="logos:whatsapp-icon" class="principalIcon"></iconify-icon>
        </section>
    );
}

export default WhatsappIcon;
