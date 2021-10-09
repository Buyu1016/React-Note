import React from 'react'
import { Route, Switch} from 'react-router-dom'
import './main.css'
import StudentList from '../view/Student/List'
import StudentAdd from '../view/Student/Add'
import StudentMessage from '../view/Student/Message'
import CurriculumList from'../view/Curriculum/List'
import CurriculumAdd from'../view/Curriculum/Add'
import Hello from '../view/Hello'

export default function Main() {
    return (
        <div>
            <Switch>
                <Route path={'/'} exact component={Hello}/>
                <Route path={'/student/list'} exact component={StudentList}/>
                <Route path={'/student/add'} exact component={StudentAdd}/>
                <Route path={'/student/details/:id'} exact component={StudentMessage}/>
                <Route path={'/curriculum/list'} exact component={CurriculumList}/>
                <Route path={'/curriculum/add'} exact component={CurriculumAdd}/>
            </Switch>
        </div>
    )
}
