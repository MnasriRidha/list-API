import React,{useEffect, useState} from 'react'
import axios from 'axios';
import {BrowserRouter as Router,Route} from "react-router-dom";
import './App.css';
import UserList from './components/UserList';
import UserInfo from './components/UserInfo'
function App(props) {
      const [Users, setUsers]=useState([])
    useEffect(()=>{
       axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res=>{console.log(res)
                    setUsers(res.data)
                    
                })
        .catch(err=>{console.log(err)})
    },[])
    
  console.log(Users)
  return (
    <Router>
    <div className="App">
     
        <Route path="/" render={(props)=><><UserList {...props} Users={Users}/></>}>
        </Route>
        <Route path="/userInfo/:id" render={(props)=><><UserInfo {...props} Users={Users}/></>} > 
        </Route>
     
    </div>
   
    </Router>
    
  );
}

export default App;