import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import LoginPage from "./components/pages/LoginPage/loginPage";
import DoctorDashboardPage from "./components/pages/DoctorDashboardPage/doctorDashboardPage";
import PatientRegistrationPage from "./components/pages/PatientRegistrationPage/patientRegistrationPage";
import DoctorRegistrationPage from "./components/pages/DoctorRegistrationPage/doctorRegistrationPage";
import PatientDashboardPage from "./components/pages/PatientDashboardPage/patientDashboardPage";
import NewAppointmentPage from "./components/pages/NewAppointmentPage/newAppointmentPage";
import HomePage from "./components/pages/HomePage/homePage";
import NotFoundPage from "./components/pages/NotFoundPage/notFoundPage";
import SignupPage from "./components/pages/SignupPage/signupPage";
import ResetPasswordPage from "./components/pages/ResetPasswordPage/resetPasswordPage";
import DoctorBasicPage from "./components/pages/DoctorBasicPage/doctorBasicPage";
import DoctorProfessionalPage from "./components/pages/DoctorProfessionalPage/doctorProfessionalPage";
import DoctorCommercialPage from "./components/pages/DoctorCommercialPage/doctorCommercialPage";
import TempPage from "./components/pages/TempPage/tempPage";
import DoctorBasicIntroPage from "./components/pages/BasicIntroPage/basicIntroPage";
import CurrentConditionPage from "./components/pages/CurrentConditionPage/currentConditionPage";
import MedicalHistoryPage from "./components/pages/MedicalHistoryPage/medicalHistoryPage";

export default class AppRouter extends React.Component{
    render(){
        return <Router>
            <Switch>
                <Route path="/" exact={true}>
                    <HomePage/>
                </Route>
                <Route path="/login" exact={true}>
                    <LoginPage/>
                </Route>
                <Route path="/doctor/register" exact={true}>
                    <DoctorRegistrationPage/>
                </Route>
                <Route path="/doctor/dashboard" exact={true}>
                    <DoctorDashboardPage/>
                </Route> 
                <Route path="/patient/register" exact={true}>
                    <PatientRegistrationPage/>
                </Route>
                <Route path="/patient/dashboard" exact={true}>
                    <PatientDashboardPage/>
                </Route>
                <Route path="/new/appointment" exact={true}>
                    <NewAppointmentPage/>
                </Route>
		        <Route path="/signup" exact={true}>
                    <SignupPage/>
                </Route>
                <Route path="/resetpassword" exact={true}>
                    <ResetPasswordPage/>
                </Route>
                <Route path="/drbasic" exact={true}>
                    <DoctorBasicPage/>
                </Route>
		        <Route path="/drprofessional" exact={true}>
                    <DoctorProfessionalPage/>
                </Route>
		        <Route path="/drcommercial" exact={true}>
                    <DoctorCommercialPage/>
                </Route>

                <Route path="/temp" exact={true}>
                    <TempPage/>
                </Route>
                <Route path="/drbasicintro" exact={true}>
                    <DoctorBasicIntroPage/>
                </Route>
                <Route path="/currentcondition" exact={true}>
                    <CurrentConditionPage></CurrentConditionPage>
                 </Route>                
                <Route path="/medicalcondition" exact={true}>
                    <MedicalHistoryPage/>
                </Route>

                <Route path="*" exact={true}>
                    <NotFoundPage/>
                </Route>
            </Switch>
        </Router>
    }
}
