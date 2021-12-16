import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AuthProvider from "./component/Context/AuthProvider";
import Dashbord from "./component/Dashbord/Dashboard/Dashbord";
import Error from "./component/Error/Error";
import Explore from "./component/Explore/Explore";
import Home from "./component/Home/Home/Home";
import Login from "./component/Login/Login";
import Order from "./component/Order/Order";
import PrivetRoute from "./component/PrivetRoute/PrivetRoute";
import Register from "./component/Register/Register";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>

          <Route exact path="/home">
            <Home></Home>
          </Route>

          <Route exact path="/explore">
            <Explore></Explore>
          </Route>

          <Route path="/login">
            <Login> </Login>
          </Route>
          <Route path="/register/:userLocation">
            <Register> </Register>
          </Route>
          <PrivetRoute path="/dashboard">
            <Dashbord></Dashbord>
          </PrivetRoute>

          <PrivetRoute path="/order/:id">
            <Order></Order>
          </PrivetRoute>

          <Route path="*">
            <Error></Error>
          </Route>
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
