import React,{useEffect, useState} from 'react';
import axios from 'axios';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import UserList from './components/UserList';
import UserInfo from './components/UserInfo';
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
    
  
      <Routes>
        <div>
        <Route path="/" render={(props)=><><UserList {...props} Users={Users}/></>}>
        </Route>
        <Route path="/userInfo/:id" render={(props)=><><UserInfo {...props} Users={Users}/></>} > 
        </Route>
       </div> 
    </Routes>

  )
}

export default App;