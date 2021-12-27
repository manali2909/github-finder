function Footer() {
    const footerYear = new Date().getFullYear()
    return (
        <footer className='footer p-10 bg-gray-700 text-primary-content footer-center'>
            <p>Copyrights &copy; {footerYear} All rights reserved  </p>
        </footer>
    )
}

export default Footer
