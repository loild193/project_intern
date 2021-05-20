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
import ProtectedRoute from './routing/ProtectedRoute';

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
            path="/register"
            render={props => <Auth {...props} authRoute="register" />} 
          />

          <ProtectedRoute exact path="/dashboard" component={Homepage} />
        </Switch>
      </Router>
    </AuthContextProvider>
  );
}

export default App;
