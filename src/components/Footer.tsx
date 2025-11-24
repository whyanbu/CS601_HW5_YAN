import "./Footer.css";

const Footer = () => {
    return (
        <footer>
            <div>&copy; 2024 Local Grocery Store</div>
            <nav className="footer-link-wrap">
                <a href=".">About Us</a>
                <a href=".">Contact</a>
                <a href=".">Privacy Policy</a>
            </nav>
        </footer>
    );
};

export default Footer;