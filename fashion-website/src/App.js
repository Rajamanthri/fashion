import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home';
import Men from './Pages/Men';
import Women from './Pages/Women';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'

function App() {
  return (
    // <div className="App">
    //  <Home/>
    // </div>
      <Route>
        <div>
          <Switch>

            <Route path="/">
              <Home/>
            </Route>

            <Route path="/Men">
              <Men/>
            </Route>

            <Route path="/Kids">
              <Kids/>
            </Route>

            <Route path="/Wishlist">
              <Wishlist/>
            </Route>

            <Route path="/Cart">
              <Cart/>
            </Route>

            <Route path="/Contact">
              <Contact/>
            </Route>

          </Switch>
        </div>
      </Route>
  );
}

export default App;
