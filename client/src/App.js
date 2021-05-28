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
import DetailRequest from './components/request/DetailRequest/DetailRequest';
import ProtectedRoute from './routing/ProtectedRoute';
import CreateRequest from './components/request/CreateRequest/CreateRequest';
import OptionsContextProvider from './contexts/OptionsContext';
function App() {
  return (
    <AuthContextProvider>
    <OptionsContextProvider>
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
            path="/register"
            render={props => <Auth {...props} authRoute="register" />} 
          />

          
          <ProtectedRoute 
              exact 
              path="/home"
              component={Home}
            />
          
          <ProtectedRoute 
            exact 
            path="/edit"
            component={EditRequest}
          />
          
          <ProtectedRoute 
            exact 
            path="/create"
            component={CreateRequest}
          />
          <ProtectedRoute 
            exact 
            path="/detail"
            component={DetailRequest}
          />
          
        </Switch>
      </Router>
      </OptionsContextProvider>
    </AuthContextProvider>
    
  );
}

export default App;
