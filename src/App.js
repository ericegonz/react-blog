import Navbar from './Navbar/Navbar'
import Home from './Home/Home'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BlogCreate from './BlogCreate/BlogCreate';
import BlogDetails from './BlogDetails/BlogDetails';
import Error from './Error/Error'

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/create">
              <BlogCreate />
            </Route>
            <Route path="/blogs/:id">
              <BlogDetails />
            </Route>
            <Route path="*">
              <Error errorMessage="Page not found"/>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
