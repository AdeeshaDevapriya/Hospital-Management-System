// import logo from './logo.svg';
// import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router, Route, Switch,} from 'react-router-dom';
//import SideMenu from "./component/SideMenuComponent/SideMenu";
import DashBoard from "./component/StaffComponent/DashBoardComponent/DashBoard";
import Register from "./component/StaffComponent/RegisterComponent/Register";
import Login from "./component/StaffComponent/LoginComponent/Login";
import DoctorAdd from "./component/DoctorComponent/DoctorAddComponent/DoctorAdd";
import DoctorAllView from "./component/DoctorComponent/DoctorAllViewComponent/DoctorAllView";
import DoctorUpdate from "./component/DoctorComponent/DoctorUpdateComponent/DoctorUpdate";
import EditProfile from "./component/StaffComponent/EditProfileComponent/EditProfile";
import ViewProfile from "./component/StaffComponent/ViewProfileComponent/ViewProfile";
import ViewEmployeeList from "./component/StaffComponent/ViewEmployeeListComponent/ViewEmployeeList";
import StaffDash from "./component/StaffComponent/StaffDashComponent/StaffDash";
import Resignation from "./component/StaffComponent/ResignationComponent/Resignation";
import MyProfile from "./component/StaffComponent/MyProfileComponent/MyProfile";

import AddAppointment from "./component/PatientComponent/src/Appointment/Appointment";
import ViewAppointment from "./component/PatientComponent/src/Appointment/AppointmentView";
import InfoAppointment from "./component/PatientComponent/src/Appointment/AppointmentInfo";
import EditAppointment from "./component/PatientComponent/src/Appointment/AppointmentEdit";
import RegPatient from "./component/PatientComponent/src/Patient/Register";
import InfoPatient from "./component/PatientComponent/src/Patient/PatientInfo";
import EditPatient from "./component/PatientComponent/src/Patient/PatientEdit";
import PatientView from "./component/PatientComponent/src/Patient/PatientView";
import PMHome from "./component/PatientComponent/src/PMHome";

import DrugsAdd from "./component/DrugComponent/DrugsAddComponent/DrugsAdd";
import DrugView from "./component/DrugComponent/DrugViewComponent/DrugView";

import additem from "./component/InventoryComponent/additem/additem";
import viewitem from "./component/InventoryComponent/viewitem/viewitem";
import updateitem from "./component/InventoryComponent/updateitem/updateitem";
import searchitem from "./component/InventoryComponent/searchitem/searchitem";
import mainint from "./component/InventoryComponent/mainint/mainint";
import generatereport from "./component/InventoryComponent/generatereport/generatereport";

import DoctorScheduleAdd from "./component/DoctorComponent/DoctorScheduleAdd/DoctorScheduleAdd";
import DoctorScheduleView from "./component/DoctorComponent/DoctorScheduleViewComponent/DoctorScheduleView";
import DoctorMain from "./component/DoctorComponent/DoctorMainComponent/DoctorMain";
import DoctorAdminMain from "./component/DoctorComponent/DoctorAdminMainComponent/DoctorAdminMain";


import RoomsAdd from "./component/RoomComponent/RoomsAddComponent/RoomsAdd";
import RoomsView from "./component/RoomComponent/RoomsViewComponent/RoomsView";
import RoomUpdate from "./component/RoomComponent/RoomUpdateComponent/RoomUpdate";
import RoomMain from "./component/RoomComponent/RoomMainComponent/RoomMain";
import PRoomAdd from "./component/RoomComponent/PRoomAddComponent/PRoomAdd";
import PRoomView from "./component/RoomComponent/PRoomViewComponent/PRoomView";
import RoomCategory from "./component/RoomComponent/RoomMainComponent/RoomCategory";
import RoomSearch from "./component/RoomComponent/RoomSearchComponent/RoomSearch"
import PRoomSearch from "./component/RoomComponent/RoomSearchComponent/PRoomSearch"


import addSalary from "./component/SalaryComponent/addSalary/addSalary";
import editSalary from "./component/SalaryComponent/editSalary/editSalary";
import viewSalary from "./component/SalaryComponent/viewSalary/viewSalary";
import searchSalary from "./component/SalaryComponent/searchSalary/searchSalary";
import DoctorSearch from "./component/DoctorComponent/DoctorSearchComponent/DoctorSearch";
import DoctorScheduleSearch from "./component/DoctorComponent/DoctorScheduleSearchComponent/DoctorScheduleSearch"
import DoctorReport from "./component/DoctorComponent/DoctorReportComponent/DoctorReport"

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route extract path = '/DashBoard' component={DashBoard}/>
          <Route extract path = '/Register' component={Register}/>
          <Route extract path = '/Login' component={Login}/>
          <Route extract path = '/DoctorAdd' component={DoctorAdd}/>
          <Route extract path = '/DoctorAllView' component={DoctorAllView}/>
          <Route extract path = '/DoctorUpdate/:id' component={DoctorUpdate}/>
          <Route extract path = '/EditProfile/:id' component={EditProfile}/>
          <Route extract path = '/ViewProfile/:id' component={ViewProfile}/>
          <Route extract path = '/ViewEmployeeList' component={ViewEmployeeList}/>
          <Route extract path = '/StaffDash' component={StaffDash}/>
          <Route extract path = '/Resignation' component={Resignation}/>
          <Route extract path = '/MyProfile' component={MyProfile}/>

          <Route extract path = '/addAppointment' component={AddAppointment}/>
          <Route extract path = '/viewAppointment' component={ViewAppointment}/>
          <Route extract path = '/infoAppointment/:id' component={InfoAppointment}/>
          <Route extract path = '/editAppointment/:id' component={EditAppointment}/>
          <Route extract path = '/registerPatient' component={RegPatient} />
          <Route extract path = '/infoPatient' component={InfoPatient} />
          <Route extract path = '/editPatient/:id' component={EditPatient} />
          <Route extract path = '/viewPatient/:id' component={PatientView} />
          <Route extract path = '/PMHome' component={PMHome}/>
          
          <Route extract path = '/viewPatient/:id' component={PatientView} />         
          <Route extract path = '/addSalary'component = { addSalary }/>
          <Route extract path = '/editSalary/:salary_id'component = { editSalary }/>
          <Route extract path = '/viewSalary'component = { viewSalary }/> 
          <Route extract path = '/searchSalary'component = { searchSalary }/>        
          
          
          <Route extract path = '/DrugsAdd' component={DrugsAdd}/>
          <Route extract path = '/DrugView' component={DrugView}/>          
          
          <Route extract path = '/additem' component={additem}/>
          <Route extract path = '/viewitem' component={viewitem}/>
          <Route extract path = '/updateitem/:id' component={updateitem}/>
          <Route extract path = '/searchitem' component={searchitem}/>
          <Route extract path = '/mainint' component={mainint}/>
          <Route extract path = '/generatereport' component={generatereport}/>
          
                               
                  
          <Route extract path = '/DoctorScheduleAdd' component={DoctorScheduleAdd}/>
          <Route extract path = '/DoctorScheduleView' component={DoctorScheduleView}/>
          <Route extract path = '/DoctorMain' component={DoctorMain}/>
          <Route extract path = '/DoctorAdminMain' component={DoctorAdminMain}/>
          <Route extract path = '/DoctorSearch' component={DoctorSearch}/>
          <Route extract path = '/DoctorScheduleSearch' component={DoctorScheduleSearch}/>
          <Route extract path = '/RoomsAdd' component={RoomsAdd}/>
          <Route extract path = '/RoomsView' component={RoomsView}/>
          <Route extract path = '/RoomUpdate/:id' component={RoomUpdate}/>
          <Route extract path = '/RoomMain' component={RoomMain}/>
          <Route extract path = '/PRoomAdd' component={PRoomAdd}/>
          <Route extract path = '/PRoomView' component={PRoomView}/>
          <Route extract path = '/RoomCategory' component={RoomCategory}/>
          <Route extract path = '/DoctorReport' component={DoctorReport}/>
          <Route extract path = '/RoomSearch' component={RoomSearch}/>
          <Route extract path = '/PRoomSearch' component={PRoomSearch}/>
          
        </Switch>
      </Router>      
    </div>
  );
}

export default App;
