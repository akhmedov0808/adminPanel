import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import BaseContextWrapper from './components/common/BaseContext'
import Teacher from './pages/Teachers'
import Navbar from './pages/Navbar'
import Student from './pages/Student'
import Faculty from './pages/Faculty'
import Department from './pages/Department'
import Group from './pages/Group'
import NotFound from './pages/NotFound'


export default function App() {
    return (
        <BrowserRouter>
            <BaseContextWrapper>
                <Navbar />
                <Switch>
                    <Route path="/" component={Department} exact />
                    <Route path="/teacher" component={Teacher} exact />
                    <Route path="/student" component={Student} exact />
                    <Route path="/faculty" component={Faculty} exact />
                    <Route path="/group" component={Group} exact />
                    <Route path="" component={NotFound} exact />
                </Switch>
            </BaseContextWrapper>
        </BrowserRouter>
    )
}
