import logo from './logo.svg';
// import Profile_holder from './my-app/public/ls'
import './App.css';

function App() {
  return (
    // The entire app
    <div className="App">
      <header className="App-header">
        <div class='header-row'>
          <div class="header-column1">
            <img class="header-column1" src='Profile_holder.png' alt='held'></img>
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
              <h3>Project 1</h3>
              <p>I did stuff for class</p>
            </div>
            <div class="project">
              <h3>Project 2</h3>
              <p>I did stuff for class</p>
            </div>
            <div class="project">
              <h3>Project 3</h3>
              <p>I did stuff for class</p>
            </div>
            <div class="project">
              <h3>Project 4</h3>
              <p>I did stuff for class</p>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
