import { Link } from 'react-router-dom';
import pdf from "./documents/JG_Resume.pdf";
import linkedinIcon from "./documents/LinkedIn-Logos/LI-In-Bug.png";
import github from "./documents/GitHub-Mark/PNG/GitHub-Mark-Light-120px-plus.png";
import resume from "./documents/Resume-icon4.png";

//funciton used to set the location of the pages
function Navbar() {
    return (
        <nav className="navbar">
            <div class="navbar">
                <div class="col">
                    <Link class="active" to="/Home">Home</Link>
                </div>
                <div class="col">
                    <Link to="/About">About</Link>
                </div>
                <div class="col">
                    <a href={pdf}>
                        <img src={resume} height='30px' alt='resume-icon' ></img>
                    </a>
                </div>

                <div class="col">
                    <a href='https://www.linkedin.com/in/joan-galicia/'>
                        <img src={linkedinIcon} height='25px' alt='linkedin-Icon'></img>
                    </a>
                </div>

                <div class="col">
                    <a href='https://github.com/Jgalicia2'>
                        <img src={github} height='25px' alt='github-Icon'></img>
                    </a>
                </div>
            </div>
        </nav>
    )
}
export default Navbar;