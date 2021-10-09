import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import StudentLayout from './components/StudentLayout/index'
import Header from './page/Admin/Header'
import Side from './page/Admin/Side'
import Main from './page/Admin/Main'
import Login from './page/Login/Login'

export default function App() {

    return (
      <BrowserRouter>
        <Switch>
          <Route path={"/login"} exact component={Login}/>
          <Route path={"/"}>
            <StudentLayout
              header={<Header />}
              side={Side}
              main={<Main />}
            ></StudentLayout>
          </Route>
        </Switch>
      </BrowserRouter>
    );
}