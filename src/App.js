import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Salary from "./Components/SalaryComponent";
import Staff from "./Components/StaffComponent";
import Department from "./Components/DepartmentComponent";
import Home from "./Components/HomeComponent";
import StaffDetail from "./Components/StaffDetailComponent";
//Default
export default function App() {
  return (
    
    <Router>
   
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/nhan-vien">
          <Staff />
        </Route>
        <Route path="/staff/:id">
            <StaffDetail />
        </Route>
        <Route path="/bang-luong">
          <Salary />
        </Route>
        <Route path="/phong-ban">
          <Department />
        </Route>
      </Switch>
    </Router>
  );
}
