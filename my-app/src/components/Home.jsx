const Home = () => {
    // Main idea for implementing Home page few things to be changed
    return (
        // Header used for entire home page
        <header class="App-header">

            <div class='header-row'>
                <div class="header-column1">
                    {/* <img class="header-column1" src='Profile_holder.png' alt='held'></img> */}
                    <img src='Profile_holder.png' class="rounded-pill mx-auto d-block" alt="held"></img>
                </div>
                <div class="header-column2">Joan Galicia</div>
            </div>


            <div class="About">
                <h1>About me </h1>
                <p>I am a 22 year old virgin who likes to code and wants to be something in life. Currently
                    I have graduated from school and am looking for work. I have applied to about 40+ jobs but have
                    not aquired a job yet. Please if you are looking for a non skilled employee. I am your guy.
                </p>
                <h3> Thank You</h3>
            </div>

            {/* Projects To be added */}

            <div id="projects">

                <h2>Projects</h2>
                <div class="project-board">
                    <div class="project">
                        <h3>City Spit</h3>
                        <ul>

                            <li>Created a unique pass time app that allows user to save future city destinations and give a basic detailed overview</li>
                            <li>Connected with a Facebook industry mentor for five weeks to discuss and guide the flow of the project</li>
                            <li>Collaborated with teammates over Git repositories each week taking roles as the project manager</li>
                            <li>Utilized Agile and Scrum practices as standard approach to development as well as prototyping and iterative improvements as standard practices</li>
                        </ul>
                    </div>
                    <div class="project">
                        <h3>Music Discovery</h3>
                        <ul>
                            <li>Developed a Spotify web app to create a personalized user playlist using Spotify API, Python, Flask, PostgreSQL, and Heroku</li>
                            <li>A four-week guided solo project used to combine frontend, backend, and database development</li>
                            <li>Created and managed Git project repository using milestones to advance in each new aspect of full stack development</li>
                            <li>Developed on an Azure virtual machine to gain experience in computer virtualization</li>
                        </ul>
                    </div>
                    <div class="project">
                        <h3>This one which does not count</h3>
                        <p>I did stuff for class</p>
                    </div>
                    <div class="project">
                        <h3>Project 4</h3>
                        <p>I did stuff for class</p>
                    </div>
                </div>
            </div>
        </header >
    );
};

export default Home;