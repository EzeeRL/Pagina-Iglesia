import './footer.css';

function Footer() {
    return (
        <>
            <footer id='footer-section'>
                <div className="container-logo-iglesia-footer">
                    <img src="logo/logo.png" alt="" className='logo-iglesia' />
                </div>
                <h3 className='titulo-footer'>¡Seguinos y contactános en nuestras Redes!</h3>
                <div className="container-icons-redes">
                    <a href="https://www.facebook.com/iglesia.vicentelopez" target='_blank'>
                        <i className='fa-brands fa-facebook icons-redes-footer icon-facebook'></i>
                    </a>
                    <a href="https://www.youtube.com/@IglesiaVicenteLopez" target='_blank'>
                        <i className='fa-brands fa-youtube icons-redes-footer icon-youtube'></i>
                    </a>
                    <a href="https://www.instagram.com/iglesia.vtl/" target='_blank'>
                        <i className='fa-brands fa-instagram icons-redes-footer icon-instagram'></i>
                    </a>
                </div>
                <p className='texto-spam'>Escribinos a nuestro email:
                <a href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcRzDfrnmWzFsRSnxKjkwCgtWsGTFbQhkThrNgcTwBFSfRNGXjMttHGvvTPRRLJQbdkPfJWJL" target='_blank' className='email'> icevtl@gmail.com</a>
                </p>
				<p className='texto-derechos'>© 2024 Iglesia VTL - Todos los Derechos Reservados</p>
            </footer>
        </>
    )
}

export default Footer;
