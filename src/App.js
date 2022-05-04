import Sidebar from "./Components/Sidbar/Sidebar";
import Home from "./pages/home/Home.js";
import Profile from "./pages/profile/Profile.js";
import Work from "./pages/my work/Work.js";
import Sikles from "./pages/sikles/Sikles.js";
import CallME from "./pages/call me/CallME.js";

import { BrowserRouter as Router, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
            <div className='animation-area' >
               <ul className="box-area">
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
            </div>
            
        <Router>
          
        <Sidebar />
        {/* <div className="pages"> */}

          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/profile">
            <Profile />
          </Route>

          <Route path="/sikles">
            <Sikles />
          </Route>

          <Route path="/work">
            <Work />
          </Route>

          <Route path="/callME">
            <CallME />
          </Route>
        {/* </div> */}
      </Router>
    </div>
  );
}

export default App;
