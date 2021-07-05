import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import BaseContextWrapper from './components/common/BaseContext'


import Teacher from './pages/Teachers'
import Student from './pages/Student'
import Faculty from './pages/Faculty'
import Department from './pages/Department'
import Group from './pages/Group'


import NotFound from './pages/NotFound'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import EmailConfirmationMessage from './pages/EmailConfirmationMessage'
import ResetPassword from './pages/ResetPassword'
import ResetLink from './pages/ResetLink'
import ConfirmEmail from './pages/ConfirmEmail'
import ResetPasswordMessage from './pages/ResetPasswordMessage'
import Navbar from "./pages/Navbar";


export default function App() {
    return (
        <Router>
            <BaseContextWrapper>
                <Switch>
                    <Route path="/" name="auth" component={Login} exact/>
                    <Route path="/" name="auth" component={Login} exact/>
                    <Route path="/sign-up" name="auth" component={SignUp} exact/>
                    <Route path="/email-confirmation-message" component={EmailConfirmationMessage} exact/>
                    <Route path="/reset-password/:key" name="auth" component={ResetPassword} exact/>
                    <Route path="/reset-link" name="auth" component={ResetLink} exact/>
                    <Route path="/confirm/:confirmationCode" component={ConfirmEmail} exact/>
                    <Route path="/reset-password-message" component={ResetPasswordMessage} exact/>
                    <Route>
                        <Navbar/>
                        <Route path="/faculty" component={Faculty} exact/>
                        <Route path="/department" component={Department} exact/>
                        <Route path="/teacher" component={Teacher} exact/>
                        <Route path="/student" component={Student} exact/>
                        <Route path="/group" component={Group} exact/>
                    </Route>
                    <Route path="" component={NotFound} exact/>
                </Switch>
            </BaseContextWrapper>
        </Router>
    )
}
