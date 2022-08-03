import './App.css';
// import './css/Img_change_text.css'
import './JS/index'
import Header from './Custom Components/Header';
import About from './Custom Components/About'
import Certifications from './Custom Components/Certifications'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  //  Link
} from "react-router-dom";
import Projects from './Custom Components/Projects';
import Footer from './Custom Components/Footer';
import Resume from './Custom Components/Resume';
import './css/a.css'
import 'animate.css';

// import firebase from "firebase";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" >
            <>
              <div >
              <center>

                <p class="animate__animated   animate__lightSpeedInLeft " style={{display:'inline',width:'50%a'}}> Shivansh</p> 
                <p  class="animate__animated   animate__lightSpeedInRight "  style={{display:'inline'}}>Sharma</p> 
                
              </center>
                
              </div>
            </>

          </Route>

          <Route exact path="/about" >
            <About />
          </Route>

          <Route exact path="/certifications" >
            <Certifications />
          </Route>

          <Route exact path="/projects" >
            <Projects />
          </Route>


          <Route exact path="/resume" >
            <Resume />
          </Route>


        </Switch>

        <Footer />
      </Router>
    </>
  );

}

export default App;
