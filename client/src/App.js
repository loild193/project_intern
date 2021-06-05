import {
  BrowserRouter as Router,
  Route, Switch
} from 'react-router-dom';
import './App.css';
import Home from './components/home/index';
import DetailRequest from './components/request/DetailRequest/DetailRequest';
import CreateRequest from './components/request/CreateRequest/CreateRequest';
import EditRequest from "./components/request/EditRequest/EditRequest";
import Admin from './components/users/Admin';
import Auth from './components/views/Auth/Auth';
import AuthContextProvider from './contexts/authContext';
import OptionsContextProvider from './contexts/OptionsContext';
import ProtectedRoute from './routing/ProtectedRoute';
import UserContextProvider from './contexts/userContext';

function App() {
  return (
    <AuthContextProvider>
      <OptionsContextProvider>
        <UserContextProvider>
          <Router>
            <Switch>
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
                path="/admin"
                component={Admin}
              />

              <ProtectedRoute 
                exact 
                path="/"
                component={Home}
              />
              <ProtectedRoute 
                exact 
                path="/detail/:id"
                component={DetailRequest}
              />
              <ProtectedRoute 
                  exact
                  path="/edit/:id"
                  component={EditRequest}
              />
              <ProtectedRoute 
                exact 
                path="/create"
                component={CreateRequest}
              />
            </Switch>
          </Router>
        </UserContextProvider>
      </OptionsContextProvider>
    </AuthContextProvider>
    
  );
}

export default App;
