//funciton used to set the location of the pages
function Navbar() {
    return (
        //navigation of page defined here 
        //use is to be found in App.js
        <nav className="navbar">
            {/* <a href="/" className="site-title">Site Name</a> */}
            <div class="navbar">
                <div class="col">
                    <a class="active" href="/Home">Home</a>
                </div>
                <div class="col">
                    <a href="/Resume">Resume</a>
                </div>
                <div class="col">
                    <a href="/Contact">Contact</a>
                </div>
                <div class="col">
                    <a href="/About">About</a>
                </div>
            </div>
        </nav>
    )
}
export default Navbar;