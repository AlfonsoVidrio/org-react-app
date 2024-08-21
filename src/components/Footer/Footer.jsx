import './Footer.css';

export const Footer = () => {
    return (
<footer className='footer' style={{ backgroundImage: 'url(/img/footer.png)' }}>
        <div className='social-networks'>
            <a href="https://github.com/AlfonsoVidrio" target='_blank' rel="noreferrer">
                <img src="/img/github.png" alt="icono github" />
            </a>
            <a href="https://www.linkedin.com/in/alfonsomanuelvidriolizaola/" target='_blank' rel="noreferrer">
                <img src="/img/linkedin.png" alt="icono linkedIn" />
            </a>
        </div>
        <img src="/img/org.png" alt="org" />
        <strong>Desarrollado por Alfonso Vidrio</strong>
</footer>
    )
}
