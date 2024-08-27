import './Navbar.css'
const Navbar = () => {
    return ( 
            <nav className="navbar">
                <ul className="navbar-links">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
                <div className="navbar-buttons">
                    <a href="#" className="btn login">Login</a>
                    <a href="#" className="btn signup">Signup</a>
                </div>
            </nav>
     );
}
 
export default Navbar;