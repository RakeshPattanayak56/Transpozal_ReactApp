import React from "react";
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Resources from "./components/pages/Resources";
import Union from "./components/pages/Union-Info";
import Navbar from "./components/layout/Navbar";
import Transporter from "./components/pages/Transporter";
import Dashboard from "./components/pages/Vehicleregistrationdetails";
import Employeedetails from "./components/pages/Employeedetails";
import Membershiprenewal from "./components/pages/Membershiprenewal";
import Vehicleowner from "./components/pages/Vehicle Owner Details";
import Partydetails from "./components/pages/Partydetails";
import Loadingpointdetails from "./components/pages/loadingpointdetails";
import MasterDestinationName from "./components/pages/Unloadingpointdetails";
import Transportedetail from "./components/pages/Transportedetail";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />

        <Sidebar>
          <Routes>
            <Route path="/vehicleregistrationdetails" element={<Dashboard/>} />
            <Route path="/employeedetails" element={<Employeedetails/>} />
            <Route path="/membershiprenewal" element={<Membershiprenewal/>} />
            <Route path="/vehicleowner" element={<Vehicleowner/>} />
            <Route path="/partydetails" element={<Partydetails/>} />
            <Route path="/loadingpointdetails" element={<Loadingpointdetails/>} />
            <Route path="/masterDestinationName" element={<MasterDestinationName/>} />
            <Route path="/transportedetail" element={<Transportedetail/>} />
            <Route exact path="/resources" component={Resources} />
            <Route exact path="/union-Info" component={Union} />
            <Route exact path="/transporter" component={Transporter} />
          </Routes>
        </Sidebar>
      </div>
    </Router>
  );
}

export default App;