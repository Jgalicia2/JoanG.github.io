import { Link } from 'react-router-dom';

//funciton used to set the location of the pages
function Navbar() {
    return (
        <nav className="navbar">
            <div class="navbar">
                <div class="col">
                    <Link class="active" to="/Home">Home</Link>
                </div>
                <div class="col">
                    <Link to="/Resume">Resume</Link>
                </div>
                <div clLinkss="col">
                    <Link to="/Contact">Contact</Link>
                </div>
                <div class="col">
                    <Link to="/About">About</Link>
                </div>
            </div>
        </nav>
    )
}
export default Navbar;