import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'
import Auth from './components/views/Auth/Auth';
import Homepage from './components/views/Homepage';
import Landing from './components/layout/Landing';
import AuthContextProvider from './contexts/authContext';
import Home from './components/home/index';
import EditRequest from "./components/request/EditRequest";
function App() {
  return (
    <AuthContextProvider>
      <Router>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route 
            exact 
            path="/login"
            render={props => <Auth {...props} authRoute="login" />} 
          />
          <Route 
            exact 
            path="/home"
            render={props => <Home {...props} />} 
          />
          <Route 
            exact 
            path="/edit"
            render={props => <EditRequest {...props} />} 
          />
          <Route 
            exact 
            path="/register"
            render={props => <Auth {...props} authRoute="register" />} 
          />

          <Route exact path="/" component={Homepage} />
        </Switch>
      </Router>
    </AuthContextProvider>
  );
}

export default App;
